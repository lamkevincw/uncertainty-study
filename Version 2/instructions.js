const instructionText = {
    "startPage": {
        "text-1": "In this study, you will be asked to perform a series of tasks that require you to view and interpret a visualization of a polluted location, and then answer some questions related to the visualization.",
        "text-2": "As seen in the example image above, pollutants (red area) have been spilled in an area owned by a company, who owns the land that is bordered by the blue lines. They have employed underground sensors (blue triangles with a white border) to monitor the extent of the spill and have used a computer model to produce a 2D estimate of the size and shape of the polluted area.",
        "text-3": "The sensors can detect the concentration of the pollutants at various thresholds, which are marked by different colours (as shown in the left image). The pollution model is most certain about the concentration levels nearest the sensors. The certainty is reduced in proportion to the distance away from any given sensor (as shown in the right image).\n\nDifferent types of visualizations will be used in this study. Instructions will follow regarding how to interpret these visualizations.\nPlease do not use the back button or refresh the page during the study, as the results will not be saved until all tasks have been completed.",
        "img-1": "start-img1.png",
        "img-2": "start-img2.png",
        "img-3": "start-img3.png"
    },
    "visPage": [
        {
            "name": "Texture",
            "text": "This visualization type employs colour and texture to differentiate between the concentration of the pollutants and the certainty of the pollution model.\n\nDifferent colours are used to distinguish between the levels of concentration, while textures (e.g., crosshatching, dotting) show the different degrees of certainty.",
            "img-1": "vis-baseline.png",
            "img-2": "texture-instruct.png"
        },
        {
            "name": "HSV",
            "text": "This visualization type uses colour value and colour saturation to differentiate between the concentration of the pollutants and the certainty of the pollution model.\n\nThe value of the colour shows the level of concentration, while the saturation shows the level of certainty.",
            "img-1": "vis-baseline.png",
            "img-2": "hsv-instruct.png"
        },
        {
            "name": "Static",
            "text": "This visualization type uses a modelling algorithm to predict the extent of pollutants at a location. The visualization shows several outcomes of the model while using different sets of parameters.\nAll of the individual results are overlaid on the map at the same time.\n\nIndividual model outcomes are represented with grey lines. The red line indicates the average outcome of the model for high concentrations of the pollutant. The orange line indicates the average for medium concentrations of the pollutant. The yellow line indicates the average for low concentrations of the pollutant.",
            "img-1": "vis-baseline.png",
            "img-2": "static-instruct.png"
        },
        {
            "name": "Animated",
            "text": "This visualization type uses a modelling algorithm to predict the extent of pollutants at a location. The visualization shows several outcomes of the model while using different sets of parameters.\nThe individual results are shown in different frames of the animation, as well as a coloured line that is used to show the average outcome.\n\nIndividual model outcomes are represented with grey lines. The red line indicates the average outcome of the model for high concentrations of the pollutant. The orange line indicates the average for medium concentrations of the pollutant. The yellow line indicates the average for low concentrations of the pollutant.",
            "img-1": "vis-baseline.png",
            "img-2": "animated-instruct.gif"
        },
        {
            "name": "VSUP",
            "text": "This visualization type uses a value-suppressing uncertainty palette to show both pollutant contamination and certainty of the predictive model. A value-suppressing uncertainty palette maps both the pollutant contamination concentration and certainty of the predictive model to an output colour, with a greater ranger of colours reserved for more certain values. As concentration increases, the colour value changes. As the contamination concentration becomes less certain, there are less potential colours. Concentration values are split into more colours when the certainty is high, and fewer colours when the certainty is low.\n\nFor example, a high concentration prediction and a medium concentration prediction will have two different colours if they are nearby a sensor, as the certainty will be high. If the concentration predictions are further from a sensor, both predictions may be mapped to the same colour.",
            "img-1": "vis-baseline.png",
            "img-2": "vsup-instruct.png"
        },
        {
            "name": "Multiples",
            "text": "This visualization type uses a modelling algorithm to predict the extent of pollutants at a location. The visualization shows several outcomes of the model while using different sets of parameters. Different outcomes of the model are shown simultaneously in a grid.\n\nEach of the nine images shows a different area that is based on different settings of the model's parameters; taken together, the images show the full range of what the model predicts",
            "img-1": "vis-baseline.png",
            "img-2": "multiples-instruct.png"
        },
        {
            "name": "Separate",
            "text": "This visualization type uses side-by-side visualizations of the same location to differentiate between the concentration of the pollutants and the certainty of the pollution model.\n\nThe left image shows the level of concentration, and the right image shows the degree of certainty.",
            "img-1": "vis-baseline.png",
            "img-2": "separate-instruct.png"
        },
    ],
    "questionPage": {
        "multiple": {
            "name": "Multiple Choice",
            "text": "The following set of questions will be multiple choice questions, similar to the example above. Read the question carefully and select the response which most accurately and correctly answers the question.",
            "img": "multiple-choice-instruction.png"
        },
        "click": {
            "name": "Click",
            "text": "The following set of questions will require you to click on the image itself to answer the question. Read the question carefully and click on the location on the image which most accurately and correctly answers the question.",
            "img": "click-instruction.png"
        },
        "multiple-text": {
            "name": "Multiple Choice - Textbox",
            "text": "The following set of questions will be multiple choice questions, followed by a text-entry box to describe your reasoning for your answer, similar to the example above. Read the question carefully and select the response which most accurately and correctly answers the question, and provide a reason for your response.",
            "img": "multiple-choice-text-instruction.png"
        },
        "text": {
            "name": "Text Box",
            "text": "The following set of questions will be a short answer question. Read the question carefully and enter your answer in the provided text box.",
            "img": "text-instruction.png"
        },
        "mouseover": {
            "name": "Mouseover",
            "text": "The following set of questions will include a mix of question types. In order to answer the questions, use your mouse to hover over the image, where a tooltip will inform you of the pollution model's certainty at that mouse location. Read the question carefully before providing your response.",
            "img": "mouseover-instruct.png"
        }
    }
}