const instructionText = {
    "startPage": {
        "text-1": "In this study, you will be asked to perform a series of tasks that require you to view and interpret a visualization of a polluted location, and then answer some questions related to the visualization.",
        "text-2": "As seen in the example image above, pollutants (red area) have been spilled in an area owned by a company, who owns the land that is bordered by the blue lines. They have employed underground sensors (blue triangles) to monitor the extent of the spill and have used an algorithm to produce a 2D model of what the polluted area is expected to be.",
        "text-3": "The sensors can detect the concentration of the pollutants at various thresholds, which are marked by different colours (as shown in the left image). The pollution model is most accurate, or “certain” of the concentration levels, nearest the sensors. This degree of certainty lowers in proportion to the distance away from any given sensor (as shown in the right image).\n\nDifferent types of visualizations will be used in this study. Instructions will follow regarding how to interpret these visualizations when compared to their original versions. Please take your time learning how they work.",
        "img-1": "start-img1.png",
        "img-2": "start-img2.png",
        "img-3": "start-img3.png"
    },
    "visPage": [
        {
            "name": "Texture",
            "text": "This visualization type employs colour and texture to differentiate between the concentration of the pollutants and the certainty of the pollution model. The main difference from the original versions is the use of texturing instead of only colours.\n\nDifferent colours are used to distinguish between the levels of concentration. Textures (e.g., crosshatching, dotting) show the different degrees of certainty.",
            "img-1": "vis-baseline.png",
            "img-2": "texture-instruct.png"
        },
        {
            "name": "HSV",
            "text": "This visualization shows the spread of hydrocarbon contamination in an area, as well as the model's certainty of hydrocarbons at that location. Certainty is based on the distance from the sensors.\nThe sensors are marked by a blue triangle.\nThe higher colour saturation shows the higher certainty of the model.\nThe value of the colour shows how high the concentration of hydrocarbons is at that location.",
            "img-1": "vis-baseline.png",
            "img-2": "hsv-instruct.png"
        },
        {
            "name": "Static",
            "text": "This visualization shows various results of a modelling algorithm that predicts the extent of hydrocarbon contamination at a location. Different outcomes from the model are shown in this type of visualization.\nEach line represents the boundary or concentration threshold of a single outcome of the model. A grey line represents a single outcome from the model, while a coloured line shows the average of outcomes at various concentration levels.\nThe sensors are marked by a blue triangle.",
            "img-1": "vis-baseline.png",
            "img-2": "static-instruct.png"
        },
        {
            "name": "Animated",
            "text": "This visualization shows various results of a modelling algorithm that predicts the extent of hydrocarbon contamination at a location. Different outcomes from the model are shown in this type of visualization.\nEach line represents the boundary or concentration threshold of a single outcome of the model. A grey line represents a single outcome from the model, while a coloured line shows the average of outcomes at various concentration levels.\nThe sensors are marked by a blue triangle.",
            "img-1": "vis-baseline.png",
            "img-2": "animated-instruct.png"
        },
        {
            "name": "VSUP",
            "text": "This visualization uses a value-suppressed uncertainty palette to show both hydrocarbon contamination and certainty of the model.\nA value-suppressed uncertainty palette maps a value (i.e., concentration) on the x-axis, with values increasing as the palette moves to the right (as shown on the legend).\nA second value (i.e., certainty) maps to the palette on the y-axis, with the most certain values located at the top of the palette.\nFor example, the value at point \"A\" scores low in concentration, but high in certainty. The value at point \"B\" has a higher concentration than point \"A\", but also more uncertainty.\nThe sensors are marked by a blue triangle.",
            "img-1": "vis-baseline.png",
            "img-2": "vsup-instruct.png"
        },
        {
            "name": "Multiples",
            "text": "This visualization shows various results of a modelling algorithm that predicts the extent of hydrocarbon contamination at a location.\nDifferent outcomes from the model are shown in this type of visualization. Each image in the grid represents a single outcome of the model.\nThe sensors are marked by a blue triangle.",
            "img-1": "vis-baseline.png",
            "img-2": "multiples-instruct.png"
        },
        {
            "name": "Separate",
            "text": "This visualization shows the spread of hydrocarbon contamination in an area, as well as the model's certainty of hydrocarbons at that location.\nThe certainty is represented in the top image and the concentration of the pollutants is represented in the bottom image.\nThe sensors are marked by a blue triangle.",
            "img-1": "vis-baseline.png",
            "img-2": "separate-instruct.png"
        },
    ],
    "questionPage": {
        "multiple": {
            "name": "Multiple Choice",
            "text": "The following set of questions will be multiple choice questions, similar to the example above. Read the question carefully and select the response which most accurately and correctly answers the question.",
            "img": "multiple-choice-instruction.png"
        }
    }
}