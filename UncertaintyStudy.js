// Study constants
const maxBlocks = 1;
const maxTrials = questions.length;
const visTypes = {
    "Texture/Colour": false,
    "HSV": false,
    "Static/Animated": false,
    "VSUP": false,
    "Multiples": false,
    "Separate": false,
    "Mouseover": false
};
const mouseoverCoords = [[500, 265], [590, 315], [615, 182], [663, 223]];

// Study control variables
let blockNumber = 0;
let trialNumber = 0;
let studyOrder = [];
let answerType = "none";
let answerSubType = "";
let instructions;

// Canvas variables
let canvas;
let ctx;
let drawing = false;
let prevX = 0;
let prevY = 0;
let currX = 0;
let currY = 0;

// User repsonses
let userReponses = [];
let currResponse;
let canvasPoints = [];
let trialStartTime;

function setup() {
    // Set up study order here
    let questionOrder = {};
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].orderGroup in questionOrder) {
            questionOrder[questions[i].orderGroup].push(i);
        } else {
            questionOrder[questions[i].orderGroup] = [i]
        }
    }
    let sortedKeys = Object.keys(questionOrder).sort();
    for (let i = 0; i < sortedKeys.length; i++) {
        // let shuffledOrder = shuffleArray(questionOrder[sortedKeys[i]]);
        let shuffledOrder = questionOrder[sortedKeys[i]];
        for (let j = 0; j < shuffledOrder.length; j++) {
            studyOrder.push(shuffledOrder[j]);
        }
    }
    console.log(studyOrder)

    // Set up event listeners
    canvas = document.getElementById("answerCanvas");
    ctx = canvas.getContext("2d");
    canvas.addEventListener("mousedown", function (e) { getXY("down", e) });
    canvas.addEventListener("mousemove", function (e) { getXY("move", e) });
    canvas.addEventListener("mouseup", function (e) { getXY("up", e) });
    canvas.addEventListener("mouseout", function (e) { getXY("out", e) });
}

function startStudy() {
    blockNumber = 0;
    startBlock();
}

function endStudy() {
    // Send answers to be stored in BOF
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(userReponses)));
    element.setAttribute('download', "userResponses.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function startBlock() {
    blockNumber++;
    trialNumber = 0;

    showInstructions(questions[studyOrder[0]].notes);
    // startTrial();
}

function endBlock() {
    if (blockNumber < maxBlocks) {
        startBlock();
    } else {
        endStudy();
    }
}

function startTrial() {
    clearUI();
    trialNumber++;

    let newQuestion = questions[studyOrder[trialNumber - 1]];
    answerType = newQuestion.answers.type;
    if (answerType === "mouseover") {
        answerSubType = newQuestion.answers.values[0];
    }
    console.log(newQuestion)

    // Set study labels
    document.getElementById("trialNumberLabel").textContent = "Question " + trialNumber + " of " + maxTrials;

    // Set question text
    document.getElementById("questionText").textContent = newQuestion.question;
    // Set images and labels
    switch (newQuestion.image.length) {
        case 1:
            document.getElementById("imageSingle").src = "images/" + newQuestion.image[0];
            document.getElementById("imageSingleLabel").textContent = "Image";
            break;
        case 2:
            document.getElementById("imageDouble1").src = "images/" + newQuestion.image[0];
            document.getElementById("imageDouble2").src = "images/" + newQuestion.image[1];
            document.getElementById("imageDoubleLabel1").textContent = "A";
            document.getElementById("imageDoubleLabel2").textContent = "B";
            break;
    }

    // Set answers
    let ansType, ansValues;
    if (newQuestion.answers.type === "mouseover") {
        ansType = newQuestion.answers.values[0];
        ansValues = newQuestion.answers.values[1];
    } else {
        ansType = newQuestion.answers.type;
        ansValues = newQuestion.answers.values;
    }
    switch (ansType) {
        case "multiple":
            let answerSet = [];
            for (let i = 0; i < ansValues.length; i++) {
                // Create multiple choice radio button
                answerSet.push(document.createElement("input"));
                answerSet[i].id = "item" + ansValues[i];
                answerSet[i].className = "multipleChoiceAnswer";
                answerSet[i].name = "userAnswer";
                answerSet[i].value = ansValues[i];
                answerSet[i].type = "radio";
                document.getElementById("answersForm").append(answerSet[i]);
                // Create label
                let label = document.createElement("label");
                label.className = "multipleChoiceLabel";
                label.htmlFor = "item" + ansValues[i];
                label.textContent = ansValues[i];
                document.getElementById("answersForm").append(label);
            }
            break;
        case "multiple-text":
            let multipleChoice = [];
            for (let i = 0; i < ansValues.length; i++) {
                // Create multiple choice radio button
                multipleChoice.push(document.createElement("input"));
                multipleChoice[i].id = "item" + ansValues[i];
                multipleChoice[i].className = "multipleChoiceAnswer";
                multipleChoice[i].name = "userAnswer";
                multipleChoice[i].value = ansValues[i];
                multipleChoice[i].type = "radio";
                document.getElementById("answersForm").append(multipleChoice[i]);
                // Create label
                let label = document.createElement("label");
                label.className = "multipleChoiceLabel";
                label.htmlFor = "item" + ansValues[i];
                label.textContent = ansValues[i];
                document.getElementById("answersForm").append(label);
            }
            // Create textbox
            let textLabel = document.createElement("label");
            textLabel.className = "reasonLabel";
            textLabel.htmlFor = "reasonBoxAnswer";
            textLabel.textContent = "Why?";
            document.getElementById("answersForm").append(textLabel);
            let reasonBox = document.createElement("textarea");
            reasonBox.id = "reasonBoxAnswer";
            reasonBox.className = "reasonBoxAnswer";
            reasonBox.name = "userAnswerText";
            reasonBox.placeholder = "Provide reasoning here";
            reasonBox.form = "answersForm";
            reasonBox.cols = 50;
            document.getElementById("answersForm").append(reasonBox);
            break;
        case "click":
        case "draw":
            let reset = document.createElement("button");
            reset.className = "submitButton";
            reset.type = "button";
            reset.textContent = "Reset";
            reset.addEventListener("click", clearCanvas);
            document.getElementById("answersForm").append(reset);
            break;
        case "range":
            let range = document.createElement("input");
            range.id = "rangeSlider";
            range.className = "rangeAnswer";
            range.name = "userAnswer";
            range.type = "range";
            range.min = "0";
            range.max = "100";
            range.defaultValue = "0";
            range.step = "1";
            document.getElementById("answersForm").append(range);
            let label = document.createElement("label");
            label.htmlFor = "rangeSlider";
            label.className = "answerLabel";
            label.textContent = range.value;
            document.getElementById("answersForm").append(label);
            range.addEventListener("input", function (event) { label.textContent = event.target.value })
            break;
        case "text":
            let textbox = document.createElement("textarea");
            textbox.className = "textboxAnswer";
            textbox.name = "userAnswer";
            textbox.placeholder = "Enter answer here";
            textbox.form = "answersForm";
            textbox.cols = 50;
            document.getElementById("answersForm").append(textbox);
            break;
    }
    let submitButton = document.createElement("input");
    submitButton.className = "submitButton";
    submitButton.type = "submit";
    submitButton.value = "Submit";
    document.getElementById("answersForm").append(submitButton);

    // User responses initialization
    currResponse = {
        questionID: newQuestion.id,
        blockNumber: blockNumber,
        trialNumber: trialNumber
    }

    trialStartTime = new Date().getTime();
}

function endTrial(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let formObj = Object.fromEntries(formData)
    console.log(formObj);

    let ansType;
    if (answerType === "mouseover") {
        ansType = answerSubType;
    } else {
        ansType = answerType
    }
    switch (ansType) {
        case "multiple":
        case "range":
        case "text":
            if ("userAnswer" in formObj && formObj.userAnswer !== "") { // Check if user entered an answer
                currResponse["userAnswer"] = formObj.userAnswer;
            } else {
                alert("Please input an answer before submitting.");
                return;
            }
            break;
        case "multiple-text":
            if ("userAnswer" in formObj && formObj.userAnswerText !== "") { // Check if user entered an answer
                currResponse["userAnswer"] = formObj.userAnswer + ";" + formObj.userAnswerText;
            } else {
                alert("Please input an answer before submitting.");
                return;
            }
            break;
        case "draw":
            if (canvasPoints.length > 0) {
                currResponse["userAnswer"] = canvasPoints;
            } else {
                alert("Please input an answer before submitting.");
                return;
            }
            break;
        case "click":
            if (canvasPoints.length > 0) {
                currResponse["userAnswer"] = canvasPoints[canvasPoints.length - 1];
            } else {
                alert("Please input an answer before submitting.");
                return;
            }
            break;
    }
    currResponse["completionTime"] = (new Date().getTime()) - trialStartTime;
    userReponses.push(currResponse);
    console.log(userReponses)

    clearUI();

    if (trialNumber < maxTrials) {
        if (visTypes[questions[studyOrder[trialNumber]].notes] || trialNumber + 1 > Object.keys(visTypes).length * 2) {
            startTrial();
        } else {
            showInstructions(questions[studyOrder[trialNumber]].notes);
        }
    } else {
        endBlock();
    }
}

function showInstructions(type) {
    console.log(type)
    visTypes[type] = true;
    let imageIndex = Object.keys(visTypes).indexOf(type);

    instructions = document.createElement("div");
    instructions.className = "instructionsDiv";

    let instructImage = document.createElement("img");
    instructImage.className = "instructImage";
    instructImage.src = "images/instruct" + (imageIndex + 1) + ".png";
    instructions.append(instructImage);

    let instructText = document.createElement("span");
    instructText.textContent = instructionText[type];
    instructText.className = "instructText";
    instructions.append(instructText);

    let instructButton = document.createElement("button");
    instructButton.className = "instructButton";
    instructButton.textContent = "Continue";
    instructButton.onclick = instructionsButton;
    instructions.append(instructButton);

    document.body.append(instructions);
}

function instructionsButton() {
    document.body.removeChild(instructions);
    console.log(visTypes)
    startTrial();
}

function clearUI() {
    answerType = "none";
    answerSubType = "";

    document.getElementById("imageSingle").src = "";
    document.getElementById("imageDouble1").src = "";
    document.getElementById("imageDouble2").src = "";
    document.getElementById("imageSingleLabel").textContent = "";
    document.getElementById("imageDoubleLabel1").textContent = "";
    document.getElementById("imageDoubleLabel2").textContent = "";

    let answersList = document.getElementById("answersForm");
    let childCount = parseInt(answersList.childElementCount);
    for (let i = 0; i < childCount; i++) {
        answersList.removeChild(answersList.lastChild);
    }

    clearCanvas();
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

function drawCircle() {
    // Draw circle
    ctx.beginPath();
    ctx.arc(currX, currY, 10, 0, 2 * Math.PI, false);
    // ctx.fillStyle = 'green';
    // ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();

    // Draw target lines
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.moveTo(currX - 15, currY);
    ctx.lineTo(currX + 15, currY);
    ctx.stroke();
    ctx.moveTo(currX, currY - 15);
    ctx.lineTo(currX, currY + 15);
    ctx.stroke();
    ctx.closePath();
}

function drawTooltip() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(currX + 10, currY + 10, 150, 50);

    ctx.fillStyle = "black";
    ctx.font = "14px sans-serif";
    ctx.fillText("Model Certainty:", currX + 30, currY + 30);
    ctx.fillText(
        // currX + ", " + currY + ", " +
        Math.max(100 - Math.round(minimumDistance(currX, currY)), 0) + "%", currX + 30, currY + 50
    );
    ctx.closePath();
}

function clearCanvas() {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    canvasPoints = [];
}

function getXY(mode, e) {
    if (answerType === "click" || answerType === "draw") {
        switch (mode) {
            case "down":
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvas.getBoundingClientRect().left;
                currY = e.clientY - canvas.getBoundingClientRect().top;
                drawing = true;
                if (answerType === "draw") {
                    ctx.beginPath();
                    ctx.fillStyle = "red";
                    ctx.fillRect(currX, currY, 2, 2);
                    ctx.closePath();
                } else {
                    clearCanvas();
                    drawCircle();
                }
                canvasPoints.push([currX, currY]);
                break;
            case "move":
                if (drawing) {
                    prevX = currX;
                    prevY = currY;
                    currX = e.clientX - canvas.getBoundingClientRect().left;
                    currY = e.clientY - canvas.getBoundingClientRect().top;
                    // console.log(currX + "," + currY)
                    if (answerType === "draw") {
                        draw();
                    } else {
                        clearCanvas();
                        drawCircle();
                    }
                    canvasPoints.push([currX, currY]);
                }
                break;
            case "up":
            case "out":
                drawing = false;
        }
    } else if (answerType === "mouseover") {
        switch (mode) {
            case "move":
                currX = e.clientX - canvas.getBoundingClientRect().left;
                currY = e.clientY - canvas.getBoundingClientRect().top;
                clearCanvas();
                if (currX > 250 && currX < 950) {
                    drawTooltip();
                }
                break;
            case "out":
                clearCanvas();
                break;
        }
    }
}

function shuffleArray(array) {
    let sorted = array.slice(0);
    for (let i = sorted.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
    }
    return sorted;
}

function minimumDistance(x, y) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < mouseoverCoords.length; i++) {
        let r = Math.sqrt(Math.pow(x - mouseoverCoords[i][0], 2) + Math.pow(y - mouseoverCoords[i][1], 2));
        if (r < min) {
            min = r;
        }
    }
    return min;
}

setup();
startStudy();