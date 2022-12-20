const questions = [
    {
        "id": 0, // Unique ID to associate participant responses to corresponding question
        "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["texture1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Texture/Colour"
    },
    {
        "id": 1,
        "question": "What is the degree of certainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["texture-edit1.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Texture/Colour"
    },
    {
        "id": 2,
        "question": "How confident are you that the blue X-marked location has a medium concentration of pollutants?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["texture-edit2.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 3,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["texture1.png", "texture2.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 4, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["texture4.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 5, 
        "question": "To what extent does the visualization make you feel positive or negative?",
        "answers": {
            "type": "multiple",
            "values": ["Very Negative", "Negative", "Slightly Negative", "Neutral", "Slightly Positive", "Positive", "Very Positive"]
        },
        "image": ["texture3.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 6, // Unique ID to associate participant responses to corresponding question
        "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["hsv1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "HSV"
    },
    {
        "id": 7,
        "question": "What is the degree of certainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["hsv-edit1.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "HSV"
    },
    {
        "id": 8,
        "question": "How confident are you that the blue X-marked location has no pollutants?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["hsv-edit2.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 9,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["hsv1.png", "texture3.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 10, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["hsv1.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 11, 
        "question": "To what extent does the visualization make you feel positive or negative?",
        "answers": {
            "type": "multiple",
            "values": ["Very Negative", "Negative", "Slightly Negative", "Neutral", "Slightly Positive", "Positive", "Very Positive"]
        },
        "image": ["hsv1.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 12, // Unique ID to associate participant responses to corresponding question
        "question": "Click on an area enclosed by a boundary where concentration is highest. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["static1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Static/Animated"
    },
    {
        "id": 13,
        "question": "How many individual outcomes exist for each concentration level?",
        "answers": {
            "type": "text",
            "values": []
        },
        "image": ["animated1.gif"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Static/Animated"
    },
    {
        "id": 14,
        "question": "How confident are you that the pollutants do NOT go over the road?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["animated1.gif"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 15,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["static1.png", "animated1.gif"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 16, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["static1.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 17, 
        "question": "To what extent does the visualization make you feel positive or negative?",
        "answers": {
            "type": "multiple",
            "values": ["Very Negative", "Negative", "Slightly Negative", "Neutral", "Slightly Positive", "Positive", "Very Positive"]
        },
        "image": ["animated1.gif"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 18, // Unique ID to associate participant responses to corresponding question
        "question": "Click on the location of the map with the lowest concentration and highest degree of certainty. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["vsup1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "VSUP"
    },
    {
        "id": 19,
        "question": "What is the degree of uncertainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["vsup-edit1.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "VSUP"
    },
    {
        "id": 20,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["vsup1.png", "vsup2.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 21,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["hsv1.png", "vsup1.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 22, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["vsup1.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 23, 
        "question": "To what extent does the visualization make you feel positive or negative?",
        "answers": {
            "type": "multiple",
            "values": ["Very Negative", "Negative", "Slightly Negative", "Neutral", "Slightly Positive", "Positive", "Very Positive"]
        },
        "image": ["vsup1.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 24, // Unique ID to associate participant responses to corresponding question
        "question": "Describe the area of which the highest concentration of pollutants is located in.", // Question text
        "answers": {
            "type": "text", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["multiples1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "techincal", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Multiples"
    },
    {
        "id": 25,
        "question": "How confident are you that the polluted area is exceeding the property boundary?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["multiples1.png"],
        "type": "subjective",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Multiples"
    },
    {
        "id": 26,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["multiples1.png", "static1.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 27,
        "question": "On average, what percentage of the property (outlined in blue) is polluted?",
        "answers": {
            "type": "range",
            "values": ["0", "100"]
        },
        "image": ["multiples1.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 28, 
        "question": "Does the set of images demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["multiples1.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 29, 
        "question": "To what extent does the set of visualizations make you feel positive or negative?",
        "answers": {
            "type": "multiple",
            "values": ["Very Negative", "Negative", "Slightly Negative", "Neutral", "Slightly Positive", "Positive", "Very Positive"]
        },
        "image": ["multiples1.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 30, // Unique ID to associate participant responses to corresponding question
        "question": "What is the pollutant concentration at the blue X-marked sensor?", // Question text
        "answers": {
            "type": "multiple", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["separate-edit1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Separate"
    },
    {
        "id": 31,
        "question": "What is the degree of certainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["separate-edit2.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Separate"
    },
    {
        "id": 32,
        "question": "How confident are you that the high concentration area is portrayed with high certainty?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["separate1.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 33,
        "question": "What percentage of the polluted area has a very high degree of certainty?",
        "answers": {
            "type": "range",
            "values": ["0", "100"]
        },
        "image": ["separate1.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 34, 
        "question": "Does the situation at this site demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["separate1.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 35, 
        "question": "To what extent does the visualization make you feel positive or negative?",
        "answers": {
            "type": "multiple",
            "values": ["Very Negative", "Negative", "Slightly Negative", "Neutral", "Slightly Positive", "Positive", "Very Positive"]
        },
        "image": ["separate1.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 36, // Unique ID to associate participant responses to corresponding question
        "question": "Hover mouse over the image to see model certainty.\nWhat is the model certainty at the X-marked location?", // Question text
        "answers": {
            "type": "mouseover", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": ["range"] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["mouseover-edit1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Mouseover"
    },
    {
        "id": 37,
        "question": "Hover mouse over the image to see model certainty.\nWhat is the model certainty at the X-marked location?",
        "answers": {
            "type": "mouseover",
            "values": ["range"]
        },
        "image": ["mouseover-edit2.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Mouseover"
    },
    {
        "id": 38,
        "question": "Hover mouse over the image to see model certainty.\nHow confident are you that the high concentration area is portrayed with high certainty?",
        "answers": {
            "type": "mouseover",
            "values": ["multiple", ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]]
        },
        "image": ["mouseover1.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 39,
        "question": "Hover mouse over the image to see model certainty.\nOn average, what percentage of the property (outlined in blue) has a high degree of model certainty?",
        "answers": {
            "type": "mouseover",
            "values": ["multiple-text", ["Yes", "No"]]
        },
        "image": ["mouseover1.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 40, 
        "question": "Hover mouse over the image to see model certainty.\nDoes the situation at this site demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "mouseover",
            "values": ["multiple", ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]]
        },
        "image": ["mouseover1.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 41, 
        "question": "Hover mouse over the image to see model certainty.\nTo what extent does the visualization make you feel positive or negative?",
        "answers": {
            "type": "mouseover",
            "values": ["multiple", ["Very Negative", "Negative", "Slightly Negative", "Neutral", "Slightly Positive", "Positive", "Very Positive"]]
        },
        "image": ["mouseover1.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },

    // {
    //     "id": 41,
    //     "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
    //     "answers": {
    //         "type": "affective",
    //         "values": []
    //     },
    //     "image": ["mouseover1.png"],
    //     "type": "affective",
    //     "orderGroup": 3,
    //     "RQ": 1
    // },



    {
        "id": 42, // Unique ID to associate participant responses to corresponding question
        "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["texture5.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Texture/Colour"
    },
    {
        "id": 43,
        "question": "What is the degree of certainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["texture-edit3.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Texture/Colour"
    },
    {
        "id": 44,
        "question": "How confident are you that the blue X-marked location has a medium concentration of pollutants?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["texture-edit4.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 45,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["texture5.png", "texture6.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 46, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["texture8.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 47,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["texture7.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 48, // Unique ID to associate participant responses to corresponding question
        "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["hsv2.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "HSV"
    },
    {
        "id": 49,
        "question": "What is the degree of certainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["hsv-edit3.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "HSV"
    },
    {
        "id": 50,
        "question": "How confident are you that the blue X-marked location has a low concentration of pollutants?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["hsv-edit4.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 51,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["hsv2.png", "texture7.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 52, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["hsv2.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 53,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["hsv2.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 54, // Unique ID to associate participant responses to corresponding question
        "question": "Click on an area enclosed by a boundary where concentration is highest. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["static2.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Static/Animated"
    },
    {
        "id": 55,
        "question": "What is the degree of certainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["static-edit2.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Static/Animated"
    },
    {
        "id": 56,
        "question": "How confident are you that the pollutants are affecting the water source?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["animated2.gif"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 57,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["static2.png", "animated2.gif"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 58, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["static2.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 59,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["animated2.gif"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 60, // Unique ID to associate participant responses to corresponding question
        "question": "Click on the location of the map with the lowest concentration and highest degree of certainty. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["vsup3.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "VSUP"
    },
    {
        "id": 61,
        "question": "What is the degree of uncertainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["vsup-edit2.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "VSUP"
    },
    {
        "id": 62,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["vsup3.png", "vsup4.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 63,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["hsv2.png", "vsup3.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 64, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["vsup3.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 65,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["vsup3.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    // {
    //     "id": 66, // Unique ID to associate participant responses to corresponding question
    //     "question": "Describe the area of which the highest concentration of pollutants is located in.", // Question text
    //     "answers": {
    //         "type": "text", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
    //         "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
    //     },
    //     "image": ["multiples1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
    //     "type": "techincal", // Type of question: technical (i.e., has correct answer) or subjective
    //     "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
    //     "RQ": 1, // The research question that this question is trying to help answer
    //     "notes": "Multiples"
    // },
    // {
    //     "id": 67,
    //     "question": "How confident are you that the polluted area is exceeding the property boundary?",
    //     "answers": {
    //         "type": "multiple",
    //         "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
    //     },
    //     "image": ["multiples1.png"],
    //     "type": "subjective",
    //     "orderGroup": 1,
    //     "RQ": 1,
    //     "notes": "Multiples"
    // },
    // {
    //     "id": 68,
    //     "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
    //     "answers": {
    //         "type": "multiple-text",
    //         "values": ["A", "B"]
    //     },
    //     "image": ["multiples1.png", "static1.png"],
    //     "type": "subjective",
    //     "orderGroup": 2,
    //     "RQ": 1
    // },
    // {
    //     "id": 69,
    //     "question": "On average, what percentage of the property (outlined in blue) is polluted?",
    //     "answers": {
    //         "type": "range",
    //         "values": ["0", "100"]
    //     },
    //     "image": ["multiples1.png"],
    //     "type": "subjective",
    //     "orderGroup": 2,
    //     "RQ": 5
    // },
    // {
    //     "id": 70, 
    //     "question": "Does the set of images demonstrate a low risk, or a high risk situation?",
    //     "answers": {
    //         "type": "multiple",
    //         "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
    //     },
    //     "image": ["multiples1.png"],
    //     "type": "affective",
    //     "orderGroup": 3,
    //     "RQ": 1
    // },
    {
        "id": 71,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["multiples1.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 72, // Unique ID to associate participant responses to corresponding question
        "question": "What is the pollutant concentration at the blue X-marked sensor?", // Question text
        "answers": {
            "type": "multiple", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["separate-edit3.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Separate"
    },
    {
        "id": 73,
        "question": "What is the degree of certainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["separate-edit4.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Separate"
    },
    {
        "id": 74,
        "question": "How confident are you that the high concentration area is portrayed with high certainty?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["separate2.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 75,
        "question": "What percentage of the polluted area has a very high degree of certainty?",
        "answers": {
            "type": "range",
            "values": ["0", "100"]
        },
        "image": ["separate2.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 76, 
        "question": "Does the situation at this site demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["separate2.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 77,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["separate2.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 78, // Unique ID to associate participant responses to corresponding question
        "question": "Hover mouse over the image to see model certainty.\nWhat is the model certainty at the X-marked location?", // Question text
        "answers": {
            "type": "mouseover", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": ["range"] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["mouseover-edit3.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Mouseover"
    },
    {
        "id": 79,
        "question": "Hover mouse over the image to see model certainty.\nWhat is the model certainty at the X-marked location?",
        "answers": {
            "type": "mouseover",
            "values": ["range"]
        },
        "image": ["mouseover-edit4.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Mouseover"
    },
    {
        "id": 80,
        "question": "Hover mouse over the image to see model certainty.\nHow confident are you that the high concentration area is portrayed with high certainty?",
        "answers": {
            "type": "mouseover",
            "values": ["multiple", ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]]
        },
        "image": ["mouseover2.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 81,
        "question": "Hover mouse over the image to see model certainty.\nOn average, what percentage of the property (outlined in blue) has a high degree of model certainty?",
        "answers": {
            "type": "mouseover",
            "values": ["multiple-text", ["Yes", "No"]]
        },
        "image": ["mouseover2.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 82, 
        "question": "Hover mouse over the image to see model certainty.\nDoes the situation at this site demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "mouseover",
            "values": ["multiple", ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]]
        },
        "image": ["mouseover2.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 83,
        "question": "Hover mouse over the image to see model certainty.\nSelect the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["mouseover2.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 84, // Unique ID to associate participant responses to corresponding question
        "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["texture9.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Texture/Colour"
    },
    {
        "id": 85,
        "question": "What is the degree of certainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["texture-edit5.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Texture/Colour"
    },
    {
        "id": 86,
        "question": "How confident are you that the blue X-marked location has a high concentration of pollutants?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["texture-edit6.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 87,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["texture9.png", "texture10.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 88, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["texture12.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 89,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["texture11.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 90, // Unique ID to associate participant responses to corresponding question
        "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["hsv3.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "HSV"
    },
    {
        "id": 91,
        "question": "What is the degree of certainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["hsv-edit5.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "HSV"
    },
    {
        "id": 92,
        "question": "How confident are you that the blue X-marked location has a high concentration of pollutants?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["hsv-edit6.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 93,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["hsv3.png", "texture11.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 94, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["hsv3.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 95,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["hsv3.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 96, // Unique ID to associate participant responses to corresponding question
        "question": "Click on an area enclosed by a boundary where concentration is highest. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["static3.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Static/Animated"
    },
    {
        "id": 97,
        "question": "How confident are you that the pollutants do NOT go over the road?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["static-edit3.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Static/Animated"
    },
    {
        "id": 98,
        "question": "How confident are you that the pollutants do NOT go over the road?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["animated3.gif"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 99,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["static3.png", "animated3.gif"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 100, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["static3.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 101,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["animated3.gif"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 102, // Unique ID to associate participant responses to corresponding question
        "question": "Click on the location of the map with the lowest concentration and highest degree of certainty. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["vsup5.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "VSUP"
    },
    {
        "id": 103,
        "question": "What is the degree of uncertainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["vsup-edit3.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "VSUP"
    },
    {
        "id": 104,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["vsup5.png", "vsup6.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 105,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["hsv3.png", "vsup5.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 106, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["vsup5.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 107,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["vsup5.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    // {
    //     "id": 108, // Unique ID to associate participant responses to corresponding question
    //     "question": "Describe the area of which the highest concentration of pollutants is located in.", // Question text
    //     "answers": {
    //         "type": "text", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
    //         "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
    //     },
    //     "image": ["multiples1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
    //     "type": "techincal", // Type of question: technical (i.e., has correct answer) or subjective
    //     "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
    //     "RQ": 1, // The research question that this question is trying to help answer
    //     "notes": "Multiples"
    // },
    // {
    //     "id": 109,
    //     "question": "How confident are you that the polluted area is exceeding the property boundary?",
    //     "answers": {
    //         "type": "multiple",
    //         "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
    //     },
    //     "image": ["multiples1.png"],
    //     "type": "subjective",
    //     "orderGroup": 1,
    //     "RQ": 1,
    //     "notes": "Multiples"
    // },
    // {
    //     "id": 110,
    //     "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
    //     "answers": {
    //         "type": "multiple-text",
    //         "values": ["A", "B"]
    //     },
    //     "image": ["multiples1.png", "static1.png"],
    //     "type": "subjective",
    //     "orderGroup": 2,
    //     "RQ": 1
    // },
    // {
    //     "id": 111,
    //     "question": "On average, what percentage of the property (outlined in blue) is polluted?",
    //     "answers": {
    //         "type": "range",
    //         "values": ["0", "100"]
    //     },
    //     "image": ["multiples1.png"],
    //     "type": "subjective",
    //     "orderGroup": 2,
    //     "RQ": 5
    // },
    // {
    //     "id": 112, 
    //     "question": "Does the set of images demonstrate a low risk, or a high risk situation?",
    //     "answers": {
    //         "type": "multiple",
    //         "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
    //     },
    //     "image": ["multiples1.png"],
    //     "type": "affective",
    //     "orderGroup": 3,
    //     "RQ": 1
    // },
    {
        "id": 113,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["multiples1.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 114, // Unique ID to associate participant responses to corresponding question
        "question": "What is the pollutant concentration at the blue X-marked sensor?", // Question text
        "answers": {
            "type": "multiple", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["separate-edit5.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Separate"
    },
    {
        "id": 115,
        "question": "What is the degree of certainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["separate-edit6.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Separate"
    },
    {
        "id": 116,
        "question": "How confident are you that the high concentration area is portrayed with high certainty?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["separate3.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 117,
        "question": "What percentage of the polluted area has a very high degree of certainty?",
        "answers": {
            "type": "range",
            "values": ["0", "100"]
        },
        "image": ["separate3.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 118, 
        "question": "Does the situation at this site demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["separate3.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 119,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["separate3.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 120, // Unique ID to associate participant responses to corresponding question
        "question": "Hover mouse over the image to see model certainty.\nWhat is the model certainty at the X-marked location?", // Question text
        "answers": {
            "type": "mouseover", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": ["range"] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["mouseover-edit5.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Mouseover"
    },
    {
        "id": 121,
        "question": "Hover mouse over the image to see model certainty.\nWhat is the model certainty at the X-marked location?",
        "answers": {
            "type": "mouseover",
            "values": ["range"]
        },
        "image": ["mouseover-edit6.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Mouseover"
    },
    {
        "id": 122,
        "question": "Hover mouse over the image to see model certainty.\nHow confident are you that the high concentration area is portrayed with high certainty?",
        "answers": {
            "type": "mouseover",
            "values": ["multiple", ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]]
        },
        "image": ["mouseover3.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 123,
        "question": "Hover mouse over the image to see model certainty.\nOn average, what percentage of the property (outlined in blue) has a high degree of model certainty?",
        "answers": {
            "type": "mouseover",
            "values": ["multiple-text", ["Yes", "No"]]
        },
        "image": ["mouseover3.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 124, 
        "question": "Hover mouse over the image to see model certainty.\nDoes the situation at this site demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "mouseover",
            "values": ["multiple", ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]]
        },
        "image": ["mouseover3.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 125,
        "question": "Hover mouse over the image to see model certainty.\nSelect the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["mouseover3.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 126, // Unique ID to associate participant responses to corresponding question
        "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["texture13.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Texture/Colour"
    },
    {
        "id": 127,
        "question": "What is the degree of certainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["texture-edit7.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Texture/Colour"
    },
    {
        "id": 128,
        "question": "How confident are you that the blue X-marked location has a low concentration of pollutants?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["texture-edit8.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 129,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["texture13.png", "texture14.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 130, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["texture16.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 131,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["texture15.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 132, // Unique ID to associate participant responses to corresponding question
        "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["hsv4.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "HSV"
    },
    {
        "id": 133,
        "question": "What is the degree of certainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["hsv-edit7.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "HSV"
    },
    {
        "id": 134,
        "question": "How confident are you that the blue X-marked location has no pollutants?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["hsv-edit8.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 135,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["hsv4.png", "texture15.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 136, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["hsv4.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 137,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["hsv4.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 138, // Unique ID to associate participant responses to corresponding question
        "question": "Click on an area enclosed by a boundary where concentration is highest. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["static4.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Static/Animated"
    },
    {
        "id": 139,
        "question": "How confident are you that the pollutants do NOT go over the road?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["static-edit4.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Static/Animated"
    },
    {
        "id": 140,
        "question": "How confident are you that the pollutants do NOT go over the road?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["animated4.gif"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 141,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["static4.png", "animated4.gif"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 142, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["static4.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 143,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["animated4.gif"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 144, // Unique ID to associate participant responses to corresponding question
        "question": "Click on the location of the map with the lowest concentration and highest degree of certainty. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["vsup7.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "VSUP"
    },
    {
        "id": 145,
        "question": "What is the degree of uncertainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["vsup-edit4.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "VSUP"
    },
    {
        "id": 146,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["vsup7.png", "vsup8.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 147,
        "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
        "answers": {
            "type": "multiple-text",
            "values": ["A", "B"]
        },
        "image": ["hsv4.png", "vsup7.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 148, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["vsup7.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 149,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["vsup7.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    // {
    //     "id": 150, // Unique ID to associate participant responses to corresponding question
    //     "question": "Describe the area of which the highest concentration of pollutants is located in.", // Question text
    //     "answers": {
    //         "type": "text", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
    //         "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
    //     },
    //     "image": ["multiples1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
    //     "type": "techincal", // Type of question: technical (i.e., has correct answer) or subjective
    //     "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
    //     "RQ": 1, // The research question that this question is trying to help answer
    //     "notes": "Multiples"
    // },
    // {
    //     "id": 151,
    //     "question": "How confident are you that the polluted area is exceeding the property boundary?",
    //     "answers": {
    //         "type": "multiple",
    //         "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
    //     },
    //     "image": ["multiples1.png"],
    //     "type": "subjective",
    //     "orderGroup": 1,
    //     "RQ": 1,
    //     "notes": "Multiples"
    // },
    // {
    //     "id": 152,
    //     "question": "Which visualization do you find easier to interpret when trying to understand the concentration and certainty of the pollutant extent?",
    //     "answers": {
    //         "type": "multiple-text",
    //         "values": ["A", "B"]
    //     },
    //     "image": ["multiples1.png", "static1.png"],
    //     "type": "subjective",
    //     "orderGroup": 2,
    //     "RQ": 1
    // },
    // {
    //     "id": 153,
    //     "question": "On average, what percentage of the property (outlined in blue) is polluted?",
    //     "answers": {
    //         "type": "range",
    //         "values": ["0", "100"]
    //     },
    //     "image": ["multiples1.png"],
    //     "type": "subjective",
    //     "orderGroup": 2,
    //     "RQ": 5
    // },
    // {
    //     "id": 154, 
    //     "question": "Does the set of images demonstrate a low risk, or a high risk situation?",
    //     "answers": {
    //         "type": "multiple",
    //         "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
    //     },
    //     "image": ["multiples1.png"],
    //     "type": "affective",
    //     "orderGroup": 3,
    //     "RQ": 1
    // },
    {
        "id": 155,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["multiples1.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 156, // Unique ID to associate participant responses to corresponding question
        "question": "What is the pollutant concentration at the blue X-marked sensor?", // Question text
        "answers": {
            "type": "multiple", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["separate-edit7.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Separate"
    },
    {
        "id": 157,
        "question": "What is the degree of certainty at the blue X-marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
        },
        "image": ["separate-edit8.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Separate"
    },
    {
        "id": 158,
        "question": "How confident are you that the high concentration area is portrayed with high certainty?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["separate4.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 159,
        "question": "What percentage of the polluted area has a very high degree of certainty?",
        "answers": {
            "type": "range",
            "values": ["0", "100"]
        },
        "image": ["separate4.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 160, 
        "question": "Does the situation at this site demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]
        },
        "image": ["separate4.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 161,
        "question": "Select the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["separate4.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 162, // Unique ID to associate participant responses to corresponding question
        "question": "Hover mouse over the image to see model certainty.\nWhat is the model certainty at the X-marked location?", // Question text
        "answers": {
            "type": "mouseover", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": ["range"] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["mouseover-edit7.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Mouseover"
    },
    {
        "id": 163,
        "question": "Hover mouse over the image to see model certainty.\nWhat is the model certainty at the X-marked location?",
        "answers": {
            "type": "mouseover",
            "values": ["range"]
        },
        "image": ["mouseover-edit8.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Mouseover"
    },
    {
        "id": 164,
        "question": "Hover mouse over the image to see model certainty.\nHow confident are you that the high concentration area is portrayed with high certainty?",
        "answers": {
            "type": "mouseover",
            "values": ["multiple", ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]]
        },
        "image": ["mouseover4.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 165,
        "question": "Hover mouse over the image to see model certainty.\nOn average, what percentage of the property (outlined in blue) has a high degree of model certainty?",
        "answers": {
            "type": "mouseover",
            "values": ["multiple-text", ["Yes", "No"]]
        },
        "image": ["mouseover4.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 166, 
        "question": "Hover mouse over the image to see model certainty.\nDoes the situation at this site demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "mouseover",
            "values": ["multiple", ["Very Low Risk", "Low Risk", "Somewhat Low Risk", "Neutral", "Somewhat High Risk", "High Risk", "Very High Risk"]]
        },
        "image": ["mouseover4.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 167,
        "question": "Hover mouse over the image to see model certainty.\nSelect the word that most accurately reflects how you feel regarding the situation represented by the visualization.",
        "answers": {
            "type": "affective",
            "values": []
        },
        "image": ["mouseover4.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },

]