library(dplyr)
library(tidyverse)
library(ggplot2)
library(jsonlite)
setwd("D:/EMS-Alliance/Uncertainty User Study/Analysis")

demoFile <- read.csv("data/questionnaire_demographics_2023-02-14.csv")
postFile <- read.csv("data/questionnaire_post-cond_2023-02-14.csv")

# Exclude unfinished participants
unfinishedPID <- c(1,2,28,43,47,68,76)
for (i in 1:length(unfinishedPID)) {
  demoFile <- demoFile[demoFile$participantID != unfinishedPID[i],]
  postFile <- postFile[postFile$participantID != unfinishedPID[i],]
}

demoSummary <- demoFile %>%
  summarise(N=n(),
            Age=mean(age),
            Comp.Usage=mean(compUsage),
            Game.Usage=mean(gameUsage),
            Vis.Usage=mean(visUsage))
print(demoSummary)

#### TLX Analysis ####
tlxData <- data.frame(PID=character(), Load=character(), Score=numeric())
for (i in 1:nrow(postFile)) {
  tlxData <- tlxData %>% add_row(PID=as.character(postFile$participantID[i]), Load="Mental", Score=postFile$mental[i])
  tlxData <- tlxData %>% add_row(PID=as.character(postFile$participantID[i]), Load="Physical", Score=postFile$physical[i])
  tlxData <- tlxData %>% add_row(PID=as.character(postFile$participantID[i]), Load="Temporal", Score=postFile$temporal[i])
  tlxData <- tlxData %>% add_row(PID=as.character(postFile$participantID[i]), Load="Performance", Score=postFile$performance[i])
  tlxData <- tlxData %>% add_row(PID=as.character(postFile$participantID[i]), Load="Effort", Score=postFile$effort[i])
  tlxData <- tlxData %>% add_row(PID=as.character(postFile$participantID[i]), Load="Frustration", Score=postFile$frustration[i])
}
tlxData$PID <- factor(tlxData$PID)
tlxData$Load <- factor(tlxData$Load, levels=c("Mental", "Physical", "Temporal", "Performance", "Effort", "Frustration"))
tlxSummary <- tlxData %>% group_by(Load) %>%
  summarise(N=n(),
            Score=mean(Score))
print(tlxSummary)

ggplot(data=tlxSummary, aes(x=Load, y=Score, fill=Load)) + 
  geom_bar(stat="identity") +
  ggtitle("NASA TLX Scores") +
  scale_y_continuous(breaks=c(1:7), limits=c(0,7))

#### Ranking Visualizations ####
bestWorst <- data.frame(PID=character(), BW=character(), Response=character())
visRanking <- data.frame(PID=character(), X7=character(), X6=character(), X5=character(), X4=character(), X3=character(), X2=character(), X1=character())
for (i in 1:nrow(postFile)) {
  if (postFile$participantID[i] != 52) {
    bestWorst <- bestWorst %>% add_row(PID=as.character(postFile$participantID[i]), BW="Most Liked", Response=postFile$visTypeMost[i])
    bestWorst <- bestWorst %>% add_row(PID=as.character(postFile$participantID[i]), BW="Most Disliked", Response=postFile$visTypeLeast[i])
  }
  
  if (postFile$participantID[i] != 52 && postFile$participantID[i] != 6 && postFile$participantID[i] != 42) {
    userRanking <- unlist(lapply(unlist(strsplit(toupper(postFile$visRanking[i]), ",")), function(x){gsub(" ","",x)}))
    newRow <- c(as.character(postFile$participantID[i]),userRanking)
    visRanking[nrow(visRanking) + 1,] <- newRow
  }
}
bestWorst$PID <- factor(bestWorst$PID)
bestWorst$BW <- factor(bestWorst$BW, levels=c("Most Liked", "Most Disliked"))
bestWorst$Response <- factor(bestWorst$Response)

BWSummary <- bestWorst %>% count(BW, Response)
  # summarise(N=n(),
  #           Texture=sum(Response=="Type A"),
  #           HSV=sum(Response=="Type B"),
  #           VSUP=sum(Response=="Type C"),
  #           Static=sum(Response=="Type D"),
  #           Animated=sum(Response=="Type E"),
  #           Multiples=sum(Response=="Type F"),
  #           Separate=sum(Response=="Type G"))
levels(BWSummary$Response) <- c("Texture", "HSV", "VSUP", "Static", "Animated", "Small Multiples", "Separate")
print(BWSummary)

ggplot(data=BWSummary, aes(x=Response, y=n/length(unique(bestWorst$PID))*100, fill=BW)) + 
  geom_bar(stat="identity", position="dodge") +
  ggtitle("Most Liked/Disliked Visualization Types") + 
  scale_y_continuous(limits=c(0,100),name="Percentage (%)") +
  scale_fill_discrete(name="")

visScores <- data.frame(Vis.Type=character(), Score=numeric())
visScores <- visScores %>% add_row(Vis.Type="A", Score=0)
visScores <- visScores %>% add_row(Vis.Type="B", Score=0)
visScores <- visScores %>% add_row(Vis.Type="C", Score=0)
visScores <- visScores %>% add_row(Vis.Type="D", Score=0)
visScores <- visScores %>% add_row(Vis.Type="E", Score=0)
visScores <- visScores %>% add_row(Vis.Type="F", Score=0)
visScores <- visScores %>% add_row(Vis.Type="G", Score=0)
visScores$Vis.Type <- factor(visScores$Vis.Type)
for (i in 1:nrow(visRanking)) {
  visScores$Score[visScores$Vis.Type==visRanking$X7[i]] = visScores$Score[visScores$Vis.Type==visRanking$X7[i]] + 7
  visScores$Score[visScores$Vis.Type==visRanking$X6[i]] = visScores$Score[visScores$Vis.Type==visRanking$X6[i]] + 6
  visScores$Score[visScores$Vis.Type==visRanking$X5[i]] = visScores$Score[visScores$Vis.Type==visRanking$X5[i]] + 5
  visScores$Score[visScores$Vis.Type==visRanking$X4[i]] = visScores$Score[visScores$Vis.Type==visRanking$X4[i]] + 4
  visScores$Score[visScores$Vis.Type==visRanking$X3[i]] = visScores$Score[visScores$Vis.Type==visRanking$X3[i]] + 3
  visScores$Score[visScores$Vis.Type==visRanking$X2[i]] = visScores$Score[visScores$Vis.Type==visRanking$X2[i]] + 2
  visScores$Score[visScores$Vis.Type==visRanking$X1[i]] = visScores$Score[visScores$Vis.Type==visRanking$X1[i]] + 1
}
levels(visScores$Vis.Type) <- c("Texture", "HSV", "VSUP", "Static", "Animated", "Small Multiples", "Separate")

ggplot(data=visScores, aes(x=Vis.Type, y=Score/length(unique(bestWorst$PID)), fill=Vis.Type)) + 
  geom_bar(stat="identity") +
  ggtitle("Visualization Type Rankings") + 
  scale_y_continuous(breaks=c(1:7), limits=c(0,7), name="Score")
