const instructionText = {
    "startPage": {
        "text-1": "In this study, you will be asked to perform a series of tasks that require you to view and interpret a visualization of a polluted location, and then answer some questions related to the visualization.",
        "text-2": "As seen in the example image above, pollutants (red area) have been spilled in an area owned by a company, who owns the land that is bordered by the blue lines. They have employed underground sensors (blue triangles with a white border) to monitor the extent of the spill and have used a computer model to produce a 2D estimate of the size and shape of the polluted area.",
        "text-3": "The sensors can detect the concentration of the pollutants at various thresholds, which are marked by different colours (as shown in the left image). The pollution model is most certain about the concentration levels nearest the sensors. The certainty is reduced in proportion to the distance away from any given sensor (as shown in the right image).\n\nDifferent types of visualizations will be used in this study. Instructions will be shown to describe how to interpret these visualizations, followed by a set of 13 questions for that visualization type.\nYou can choose to take a short break at any time while the instructions are being shown, but please try to complete each set of questions as quickly as possible.\n\nEach set of 13 questions will be preceded by instructionsPlease do not use the back button or refresh the page during the study, as the results will not be saved until all tasks have been completed.",
        "img-1": "start-img1.png",
        "img-2": "start-img2.png",
        "img-3": "start-img3.png"
    },
    "visPage": [
        {
            "name": "Texture",
            "text": "This visualization type uses colour and texture to differentiate between the concentration of the pollutants and the certainty of the pollution model.\n\nDifferent colours are used to distinguish between the levels of concentration, while textures (e.g., crosshatching, dotting) show the different degrees of certainty.\n\nYou may now choose to take a short break before proceeding to the questions with the Continue button.",
            "img-1": "vis-baseline.png",
            "img-2": "texture-instruct.png"
        },
        {
            "name": "HSV",
            "text": "This visualization type uses colour value (i.e., the hue of the colour, such as red, green, or blue) and colour saturation (on a scale from grey to pure colour) to differentiate between the concentration of the pollutants and the certainty of the pollution model.\n\nThe value of the colour shows the level of concentration: for example, a red colour indicates high concentration. The saturation shows the level of certainty: for example, a greyish red indicates high concentration but low certainty.\n\nYou may now choose to take a short break before proceeding to the questions with the Continue button.",
            "img-1": "vis-baseline.png",
            "img-2": "hsv-instruct.png"
        },
        {
            "name": "Static",
            "text": "This visualization type uses a modeling algorithm to predict the extent of pollutants at a location. All the predicted areas of concentration are overlaid onto a static map at the same time."
            + "\n\nThe model makes a prediction of the polluted area at three different concentration levels: high, medium, and low. Multiple predictions of the model are made at each concentration level, and the results are overlaid on the map all at once in a static image."
            + "\n\nIndividual model outcomes are represented with grey lines at various concentrations. Summary lines are used to indicate the average model prediction at each concentration level: a red line for the high concentration area, an orange line for the medium concentration area, and a yellow line for the low concentration area."
            + "\n\nYou may now choose to take a short break before proceeding to the questions with the Continue button.",
            "img-1": "vis-baseline.png",
            "img-2": "static-instruct.png"
        },
        {
            "name": "Animated",
            "text": "This visualization type uses a modeling algorithm to predict the extent of pollutants at a location. An animation is used to show the different areas of pollutant concentration that are predicted by the model."
                + "\n\nThe model makes a prediction of the polluted area at three different concentration levels: high, medium, and low. Multiple predictions of the model are made at each concentration level, and the results are animated onto the map one line at a time. Each individual line appears one by one in the visualization, followed by a coloured summary line that shows the mean of the lines at that concentration level."
                + "\n\nIndividual model outcomes are represented with grey lines at various concentrations. Summary lines are used to indicate the average model prediction at each concentration level: a red line for the high concentration area, an orange line for the medium concentration area, and a yellow line for the low concentration area."
                + "\n\nYou may now choose to take a short break before proceeding to the questions with the Continue button.",
            "img-1": "vis-baseline.png",
            "img-2": "animated-instruct.gif"
        },
        {
            "name": "VSUP",
            "text": "This visualization type uses a value-suppressing uncertainty palette to show both pollutant contamination and certainty of the predictive model. A value-suppressing uncertainty palette maps both the pollutant contamination concentration and certainty of the predictive model to an output colour, with a greater ranger of colours reserved for more certain values. As concentration increases, the colour value changes. As the contamination concentration becomes less certain, there are fewer potential colours. Concentration values are split into more colours when the certainty is high, and fewer colours when the certainty is low.\n\nFor example, a high concentration prediction and a medium concentration prediction will have two different colours if they are nearby a sensor, as the certainty will be high. If the concentration predictions are further from a sensor, both predictions may be mapped to the same colour.\n\nYou may now choose to take a short break before proceeding to the questions with the Continue button.",
            "img-1": "vis-baseline.png",
            "img-2": "vsup-instruct.png"
        },
        {
            "name": "Multiples",
            "text": "This visualization type uses a modelling algorithm to predict the extent of pollutants at a location. The visualization shows several outcomes of the model while using different sets of parameters. Different outcomes of the model are shown simultaneously in a grid.\n\nEach of the nine images shows a different area that is based on different settings of the model's parameters; taken together, the images show the full range of what the model predicts.\n\nYou may now choose to take a short break before proceeding to the questions with the Continue button.",
            "img-1": "vis-baseline.png",
            "img-2": "multiples-instruct.png"
        },
        {
            "name": "Separate",
            "text": "This visualization type uses side-by-side visualizations of the same location to differentiate between the concentration of the pollutants and the certainty of the pollution model.\n\nThe left image shows the level of concentration, and the right image shows the degree of certainty.\n\nYou may now choose to take a short break before proceeding to the questions with the Continue button.",
            "img-1": "vis-baseline.png",
            "img-2": "separate-instruct.png"
        },
    ],
    "questionPage": {
        "multiple": {
            "name": "Multiple Choice",
            "text": "The following set of questions will be multiple choice questions, similar to the example above. A visualization image will be presented with each question. Read the question carefully and select the response which most accurately and correctly answers the question.",
            "img": "multiple-choice-instruction.png"
        },
        "click": {
            "name": "Click",
            "text": "The following set of questions will require you to click on the image itself to answer the question. A visualization image will be presented with each question. Read the question carefully and click on the location on the image which most accurately and correctly answers the question.",
            "img": "click-instruction.png"
        },
        "multiple-text": {
            "name": "Multiple Choice - Textbox",
            "text": "The following set of questions will be multiple choice questions, followed by a text-entry box to describe your reasoning for your answer, similar to the example above. A visualization image will be presented with each question. Read the question carefully and select the response which most accurately and correctly answers the question, and provide a reason for your response.",
            "img": "multiple-choice-text-instruction.png"
        },
        "text": {
            "name": "Text Box",
            "text": "The following set of questions will be a short answer question. A visualization image will be presented with each question. Read the question carefully and enter your answer in the provided text box.",
            "img": "text-instruction.png"
        },
        "mouseover": {
            "name": "Mouseover",
            "text": "The following set of questions will include a mix of question types. In order to answer the questions, use your mouse to hover over the image, where a tooltip will inform you of the pollution model's certainty at that mouse location. A visualization image will be presented with each question. Read the question carefully before providing your response.",
            "img": "mouseover-instruct.png"
        }
    }
}