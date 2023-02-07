library(dplyr)
library(tidyverse)
library(ggplot2)
library(jsonlite)
setwd("D:/EMS-Alliance/Uncertainty User Study/Analysis")

# Answer conversions
highAnswers <- c("Very Low"=1, "Low"=2, "Somewhat Low"=3, "Medium"=4, "Somewhat High"=5, "High"=6, "Very High"=7)
likeAnswers <- c("Very Unlikely"=1, "Unlikely"=2, "Slightly Unlikely"=3, "Neutral"=4, "Slightly Likely"=5, "Likely"=6, "Very Likely"=7)

file <- read.csv("data/UncertaintyVis_log_2023-02-01.csv")
clickAnswers <- jsonlite::fromJSON("correctClick.json")

rawData <- cbind(PID=file$participantID[1] ,jsonlite::fromJSON(file$participantData[1]))
for (i in 2:nrow(file)) {
  rawData <- rbind(rawData, cbind(PID=file$participantID[i] ,jsonlite::fromJSON(file$participantData[i])))
}

questions <- jsonlite::fromJSON("questions.json")
multipleQuestions <- questions[[1]]
clickQuestions <- questions[[2]]

data <- rawData
# Remove participants
data <- data[data$PID!=13,]
# Remove based on CT
data <- data[data$completionTime>5000,]
data <- data[data$completionTime<60000,]

for (i in 1:nrow(data)) {
  if (data$questionID[i] <= 15) {
    data$Question.Type[i] <- "Certainty"
  } else if (data$questionID[i] >= 22 && data$questionID[i] <= 36) {
    data$Question.Type[i] <- "Concentration"
  } else if (data$questionID[i] >= 43 && data$questionID[i] <= 64) {
    data$Question.Type[i] <- "Likelihood"
  } else if (data$questionID[i] >= 77 && data$questionID[i] <= 81) {
    data$Question.Type[i] <- "Zero Concentration"
  } else if (data$questionID[i] >= 65 && data$questionID[i] <= 76) {
    data$Question.Type[i] <- "Click"
  }
}

# Split multiple choice answers and click answers
mcData <- data[data$questionBlock=="multiple",]
clickData <- data[data$questionBlock=="click",]

#### Multiple choice analysis ####
for (i in 1:nrow(mcData)) {
  # Set correct answers
  mcData$Correct.Answer[i] <- multipleQuestions[multipleQuestions$id==mcData$questionID[i],]$correctAnswer
  
  # Set answers as numbers
  mcData$Num.Answer[i] <- highAnswers[mcData$userAnswer[[i]]]
  mcData$Num.Correct[i] <- highAnswers[mcData$Correct.Answer[[i]]]
  if (is.na(mcData$Num.Answer[i])) {
    mcData$Num.Answer[i] <- likeAnswers[mcData$userAnswer[[i]]]
    mcData$Num.Correct[i] <- likeAnswers[mcData$Correct.Answer[[i]]]
  }
  
  # Calculate how far off user was from correct answer
  mcData$Answer.Diff[i] <- abs(mcData$Num.Answer[i] - mcData$Num.Correct[i])
  
  if (gregexpr("-",multipleQuestions[multipleQuestions$id==mcData$questionID[i],]$image)[[1]][1] != -1) {
    mcData$Vis.Type[i] <- substring(multipleQuestions[multipleQuestions$id==mcData$questionID[i],]$image,
                                  0,gregexpr("-",multipleQuestions[multipleQuestions$id==mcData$questionID[i],]$image)[[1]][1]-1)
  } else if (gregexpr(".png",multipleQuestions[multipleQuestions$id==mcData$questionID[i],]$image)[[1]][1] != -1) {
    mcData$Vis.Type[i] <- substring(multipleQuestions[multipleQuestions$id==mcData$questionID[i],]$image,
                                  0,gregexpr(".png",multipleQuestions[multipleQuestions$id==mcData$questionID[i],]$image)[[1]][1]-2)
  } else {
    mcData$Vis.Type[i] <- substring(multipleQuestions[multipleQuestions$id==mcData$questionID[i],]$image,
                                    0,gregexpr(".gif",multipleQuestions[multipleQuestions$id==mcData$questionID[i],]$image)[[1]][1]-2)
  }
}

qTypeSummary <- mcData %>% group_by(Question.Type) %>%
  summarise(N=n(),
            Completion.Time=mean(completionTime),
            CTStdDev=sd(completionTime),
            User.Answer=mean(Num.Answer),
            UserAnsStdDev=sd(Num.Answer),
            Correct.Answer=mean(Num.Correct),
            CorrectStdDev=sd(Num.Correct),
            Diff.Mean=mean(Answer.Diff),
            Diff.StdDev=sd(Answer.Diff),
            CTSE=CTStdDev/sqrt(N),
            UserSE=UserAnsStdDev/sqrt(N),
            CorrectSE=CorrectStdDev/sqrt(N))
print(qTypeSummary)

# CT plot sorted by question type
ggplot(data=qTypeSummary, aes(x=Question.Type, y=Completion.Time, fill=Question.Type)) + 
  geom_col() +
  geom_errorbar(aes(ymin=Completion.Time-CTSE, ymax=Completion.Time+CTSE), width=.1)

qAnsSummary <- data.frame(Question.Type=character(), Answer=character(), Answer.Value=numeric(), Error=numeric())
for (i in 1:nrow(qTypeSummary)) {
  qAnsSummary <- qAnsSummary %>% add_row(Question.Type=qTypeSummary$Question.Type[i],
                                         Answer="User", Answer.Value=qTypeSummary$User.Answer[i],
                                         Error=qTypeSummary$UserSE[i])
  qAnsSummary <- qAnsSummary %>% add_row(Question.Type=qTypeSummary$Question.Type[i],
                                         Answer="Correct", Answer.Value=qTypeSummary$Correct.Answer[i],
                                         Error=qTypeSummary$CorrectSE[i])
}
#qAnsSummary$Question.Type <- factor(qAnsSummary$Question.Type, levels = c("Certainty", "Concentration", "Zero Concentration", "Likelihood"))
qAnsSummary$Answer <- factor(qAnsSummary$Answer, levels = c("User", "Correct"))
ggplot(data=qAnsSummary, aes(x=Question.Type, y=Answer.Value, fill=Answer)) + 
  geom_bar(stat="identity", width=0.75, position = "dodge") +
  geom_errorbar(aes(ymin=Answer.Value-Error, ymax=Answer.Value+Error), width=.1, position=position_dodge(0.75)) +
  scale_y_continuous(breaks=1:7, limits=c(0,7),
                     labels=c("Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"),
                     name="")

visTypeSummary <- mcData %>% group_by(Vis.Type) %>%
  summarise(N=n(),
            Completion.Time=mean(completionTime),
            CTStdDev=sd(completionTime),
            User.Answer=mean(Num.Answer),
            UserAnsStdDev=sd(Num.Answer),
            Correct.Answer=mean(Num.Correct),
            CorrectStdDev=sd(Num.Correct),
            Diff.Mean=mean(Answer.Diff),
            Diff.StdDev=sd(Answer.Diff),
            CTSE=CTStdDev/sqrt(N),
            UserSE=UserAnsStdDev/sqrt(N),
            CorrectSE=CorrectStdDev/sqrt(N))
visTypeSummary$Vis.Type <- factor(visTypeSummary$Vis.Type, levels = c("texture", "hsv", "vsup", "static", "animated", "multiples", "separate"))
print(visTypeSummary)

# CT plot sorted by vis type
ggplot(data=visTypeSummary, aes(x=Vis.Type, y=Completion.Time, fill=Vis.Type)) + 
  geom_bar(stat="identity") +
  geom_errorbar(aes(ymin=Completion.Time-CTSE, ymax=Completion.Time+CTSE), width=.1)

vAnsSummary <- data.frame(Vis.Type=character(), Answer=character(), Answer.Value=numeric(), Error=numeric())
for (i in 1:nrow(visTypeSummary)) {
  vAnsSummary <- vAnsSummary %>% add_row(Vis.Type=visTypeSummary$Vis.Type[i],
                                         Answer="User", Answer.Value=visTypeSummary$User.Answer[i],
                                         Error=visTypeSummary$UserSE[i])
  vAnsSummary <- vAnsSummary %>% add_row(Vis.Type=visTypeSummary$Vis.Type[i],
                                         Answer="Correct", Answer.Value=visTypeSummary$Correct.Answer[i],
                                         Error=visTypeSummary$CorrectSE[i])
}
vAnsSummary$Vis.Type <- factor(vAnsSummary$Vis.Type, levels = c("texture", "hsv", "vsup", "static", "animated", "multiples", "separate"))
vAnsSummary$Answer <- factor(vAnsSummary$Answer, levels = c("User", "Correct"))
ggplot(data=vAnsSummary, aes(x=Vis.Type, y=Answer.Value, fill=Answer)) + 
  geom_bar(stat="identity", width=0.75, position = "dodge") +
  geom_errorbar(aes(ymin=Answer.Value-Error, ymax=Answer.Value+Error), width=.1, position=position_dodge(0.75)) +
  scale_y_continuous(breaks=1:7, limits=c(0,7),
                     labels=c("Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"),
                     name="")

questionSummary <- mcData %>% group_by(questionID) %>%
  summarise(N=n(),
            Completion.Time=mean(completionTime),
            CTStdDev=sd(completionTime),
            User.Answer=mean(Num.Answer),
            UserAnsStdDev=sd(Num.Answer),
            Correct.Answer=mean(Num.Correct),
            CorrectStdDev=sd(Num.Correct),
            Diff.Mean=mean(Answer.Diff),
            Diff.StdDev=sd(Answer.Diff),
            CTSE=CTStdDev/sqrt(N),
            UserSE=UserAnsStdDev/sqrt(N),
            CorrectSE=CorrectStdDev/sqrt(N))
print(questionSummary)

# CT plot sorted by question number
ggplot(data=questionSummary, aes(x=questionID, y=Completion.Time)) + 
  geom_bar(stat="identity") +
  geom_errorbar(aes(ymin=Completion.Time-CTSE, ymax=Completion.Time+CTSE), width=.1)

trialSummary <- mcData %>% group_by(trialNumber) %>%
  summarise(N=n(),
            Completion.Time=mean(completionTime),
            CTStdDev=sd(completionTime),
            User.Answer=mean(Num.Answer),
            UserAnsStdDev=sd(Num.Answer),
            Correct.Answer=mean(Num.Correct),
            CorrectStdDev=sd(Num.Correct),
            Diff.Mean=mean(Answer.Diff),
            Diff.StdDev=sd(Answer.Diff),
            CTSE=CTStdDev/sqrt(N),
            UserSE=UserAnsStdDev/sqrt(N),
            CorrectSE=CorrectStdDev/sqrt(N))
print(trialSummary)

# CT plot sorted by trial number
ggplot(data=trialSummary, aes(x=trialNumber, y=Completion.Time)) + 
  geom_bar(stat="identity") +
  geom_errorbar(aes(ymin=Completion.Time-CTSE, ymax=Completion.Time+CTSE), width=.1)

#### Click analysis ####
for (i in 1:nrow(clickData)) {
  if (clickData$userAnswer[[i]][1] >= clickAnswers[clickAnswers$questionID==clickData$questionID[i],]$xlim[[1]][1] &&
      clickData$userAnswer[[i]][1] <= clickAnswers[clickAnswers$questionID==clickData$questionID[i],]$xlim[[1]][2] &&
      clickData$userAnswer[[i]][2] >= clickAnswers[clickAnswers$questionID==clickData$questionID[i],]$ylim[[1]][1] &&
      clickData$userAnswer[[i]][2] <= clickAnswers[clickAnswers$questionID==clickData$questionID[i],]$ylim[[1]][2]) {
    clickData$Answer.Correct[i] <- "Correct"
  } else {
    clickData$Answer.Correct[i] <- "Incorrect"
  }
}
