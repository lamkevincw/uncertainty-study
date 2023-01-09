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
const firstAnimatedID = 13;
const mouseoverCoords = [
    [[480, 316], [588, 376], [617, 215], [675, 277]],
    [[518, 258], [609, 269], [656, 206], [703, 268]],
    [[540, 376], [610, 255], [627, 356], [643, 188]],
    [[523, 285], [540, 398], [578, 244], [663, 328]]
];
const affectChart = ["Enraged", "Panicked", "Stressed", "Jittery", "Shocked", "Surprised", "Upbeat", "Festive", "Exhilarated", "Ecstatic",
    "Livid", "Furious", "Frustrated", "Tense", "Stunned", "Hyper", "Cheerful", "Motivated", "Ispired", "Elated",
    "Fuming", "Frightened", "Angry", "Nervous", "Restless", "Energized", "Lively", "Enthusiastic", "Optimistic", "Excited",
    "Anxious", "Apprehensive", "Worried", "Irritated", "Annoyed", "Pleased", "Happy", "Focused", "Proud", "Thrilled",
    "Repulsed", "Troubled", "Concerned", "Uneasy", "Peeved", "Pleasant", "Joyful", "Hopeful", "Playful", "Blissful",
    "Disgusted", "Glum", "Disappointed", "Down", "Apathetic", "At Ease", "Easygoing", "Content", "Loving", "Fulfilled",
    "Pessimistic", "Morose", "Discouraged", "Sad", "Bored", "Calm", "Secure", "Satisfied", "Grateful", "Touched",
    "Alienated", "Miserable", "Lonely", "Disheartened", "Tired", "Relaxed", "Chill", "Restful", "Blessed", "Balanced",
    "Despondent", "Depressed", "Sullen", "Exhausted", "Fatigued", "Mellow", "Thoughtful", "Peaceful", "Comfy", "Carefree",
    "Despair", "Hopeless", "Desolate", "Spent", "Drained", "Sleepy", "Complacent", "Tranquil", "Cozy", "Serene"];

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
    // Download answers as local text file
    // var element = document.createElement('a');
    // element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(userReponses)));
    // element.setAttribute('download', "userResponses.txt");

    // element.style.display = 'none';
    // document.body.appendChild(element);

    // element.click();

    // document.body.removeChild(element);

    // Send answers to be stored in BOF
    let submitForm = document.createElement("form");
    submitForm.setAttribute("action", "#");
    submitForm.setAttribute("method", "post");
    submitForm.style.display = 'none';
    document.body.append(submitForm);

    let submitResponses = document.createElement("input");
    submitResponses.setAttribute("type", "text");
    submitResponses.setAttribute("value", JSON.stringify(userReponses));
    submitResponses.setAttribute("name", "participantResponses");
    submitResponses.style.display = 'none';
    submitForm.append(submitResponses);

    let submitBut = document.createElement("input");
    submitBut.setAttribute("type", "submit");
    submitBut.setAttribute("name", "submitButton");
    submitBut.setAttribute("value", "Continue");
    submitBut.style.display = 'none';
    submitForm.append(submitBut);
    submitBut.click();
}

function startBlock() {
    blockNumber++;
    trialNumber = 0;

    if (studyOrder[0] === firstAnimatedID) {
        showInstructions("Animated");
    } else {
        showInstructions(questions[studyOrder[0]].notes);
    }
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
            document.getElementById("imageSingle").src = window.origin + "/my_blueprint/images/" + newQuestion.image[0];
            document.getElementById("imageSingleLabel").textContent = "";
            break;
        case 2:
            document.getElementById("imageDouble1").src = window.origin + "/my_blueprint/images/" + newQuestion.image[0];
            document.getElementById("imageDouble2").src = window.origin + "/my_blueprint/images/" + newQuestion.image[1];
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
        case "affective":
            let table = document.createElement("table");

            for (let i = 0; i < 10; i++) {
                let tr = table.insertRow();
                for (let j = 0; j < 10; j++) {
                    let td = tr.insertCell();
                    td.append(document.createTextNode(affectChart[i * 10 + j]));
                    td.style.border = '1px solid black';
                    td.id = "tableAnswer" + (i * 10 + j);
                    if (i < 5 && j < 5) {
                        td.style.background = "lightcoral";
                    } else if (i < 5 && j >= 5) {
                        td.style.background = "yellow";
                    } else if (i >= 5 && j < 5) {
                        td.style.background = "skyblue";
                    } else if (i >= 5 && j >= 5) {
                        td.style.background = "palegreen";
                    }
                }
            }
            table.onclick = selectAffectAnswer;
            document.getElementById("answersForm").append(table);
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
        case "affective":
            if (!("userAnswer" in currResponse)) {
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
        console.log(questions[studyOrder[trialNumber]])
        if (questions[studyOrder[trialNumber]].id === firstAnimatedID) {
            showInstructions("Animated");
        } else if (visTypes[questions[studyOrder[trialNumber]].notes] || trialNumber + 1 > Object.keys(visTypes).length * 2) {
            startTrial();
        } else {
            showInstructions(questions[studyOrder[trialNumber]].notes);
        }
    } else {
        endBlock();
    }
}

function showInstructions(type) {
    // console.log(type)
    let imageIndex = Object.keys(visTypes).indexOf(type);
    if (type === "Animated") {
        imageIndex = 7;
    } else {
        visTypes[type] = true;
    }

    instructions = document.createElement("div");
    instructions.className = "instructionsDiv";
    // instructions.style.width = window.innerWidth - 80;
    // instructions.style.height = 900;

    let instructImage = document.createElement("img");
    instructImage.className = "instructImage";
    instructImage.src = window.origin + "/my_blueprint/images/instruct" + (imageIndex + 1) + (type === "Animated" ? ".gif" : ".png");
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
    // console.log(visTypes)
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

function selectAffectAnswer(e) {
    console.log(e.target)
    console.log(e.target.textContent)
    if (e.target.tagName === "TD") {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                document.getElementById("tableAnswer" + (i * 10 + j)).style.border = "1px solid black";
            }
        }
        e.target.style.border = "3px solid red"
    }
    currResponse["userAnswer"] = e.target.textContent;
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
    let coords;
    if (questions[studyOrder[trialNumber - 1]].image[0] === "mouseover1.png" ||
        questions[studyOrder[trialNumber - 1]].image[0] === "mouseover-edit1.png" ||
        questions[studyOrder[trialNumber - 1]].image[0] === "mouseover-edit2.png") {
        coords = mouseoverCoords[0];
    } else if (questions[studyOrder[trialNumber - 1]].image[0] === "mouseover2.png" ||
        questions[studyOrder[trialNumber - 1]].image[0] === "mouseover-edit3.png" ||
        questions[studyOrder[trialNumber - 1]].image[0] === "mouseover-edit4.png") {
        coords = mouseoverCoords[1];
    } else if (questions[studyOrder[trialNumber - 1]].image[0] === "mouseover3.png" ||
        questions[studyOrder[trialNumber - 1]].image[0] === "mouseover-edit5.png" ||
        questions[studyOrder[trialNumber - 1]].image[0] === "mouseover-edit6.png") {
        coords = mouseoverCoords[2];
    } else if (questions[studyOrder[trialNumber - 1]].image[0] === "mouseover4.png" ||
        questions[studyOrder[trialNumber - 1]].image[0] === "mouseover-edit7.png" ||
        questions[studyOrder[trialNumber - 1]].image[0] === "mouseover-edit8.png") {
        coords = mouseoverCoords[3];
    }
    for (let i = 0; i < coords.length; i++) {
        let r = Math.sqrt(Math.pow(x - coords[i][0], 2) + Math.pow(y - coords[i][1], 2)) * 1.3;
        if (r < min) {
            min = r;
        }
    }
    return min;
}

setup();
startStudy();