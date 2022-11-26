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
        "question": "What is the degree of uncertainty at the blue X marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Low", "Somewhat Low", "Medium", "Somewhat High", "High"]
        },
        "image": ["texture7.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Texture/Colour"
    },
    {
        "id": 2,
        "question": "How confident are you that the blue X marked location has a medium concentration of pollutants?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["texture8.png"],
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
        "image": ["texture1.png", "texture4.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 4, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Low Risk", "High Risk"]
        },
        "image": ["texture10.png"],
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
        "image": ["texture6.png"],
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
        "question": "What is the degree of uncertainty at the X marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Low", "Somewhat Low", "Somewhat High", "High"]
        },
        "image": ["hsv5.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "HSV"
    },
    {
        "id": 8,
        "question": "How confident are you that the highlighted location has no pollutants?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["hsv6.png"],
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
        "image": ["hsv2.png", "hsv4.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 10, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Low Risk", "High Risk"]
        },
        "image": ["hsv7.png"],
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
        "image": ["hsv8.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 12, // Unique ID to associate participant responses to corresponding question
        "question": "Click on the part of the boundary with the highest degree of certainty. The reset button will clear the marker.", // Question text
        "answers": {
            "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["static5.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Static/Animated"
    },
    {
        "id": 13,
        "question": "Does the pollutants exceed the property boundary?",
        "answers": {
            "type": "multiple",
            "values": ["Yes", "No"]
        },
        "image": ["static2.png"],
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
        "image": ["static2.png", "animated2.gif"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 16, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Low Risk", "High Risk"]
        },
        "image": ["static6.png"],
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
        "image": ["animated3.gif"],
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
        "image": ["vsup6.jpg"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "VSUP"
    },
    {
        "id": 19,
        "question": "What is the degree of uncertainty at the X marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Low", "Medium", "High"]
        },
        "image": ["vsup7.jpg"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "VSUP"
    },
    {
        "id": 20,
        "question": "Do you feel that information has been withheld from this visualization?",
        "answers": {
            "type": "multiple-text",
            "values": ["Yes", "No"]
        },
        "image": ["vsup8.jpg"],
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
        "image": ["vsup6.jpg", "hsv2.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 22, 
        "question": "Does this visualization demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Low Risk", "High Risk"]
        },
        "image": ["vsup9.jpg"],
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
        "image": ["vsup10.jpg"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 24, // Unique ID to associate participant responses to corresponding question
        "question": "In the bottom-left image, at what concentration is the rightmost sensor sitting in?", // Question text
        "answers": {
            "type": "multiple", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": ["Low", "Medium", "High"] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["multiples2.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Multiples"
    },
    {
        "id": 25,
        "question": "In the top-right image, what level of concentration has the highest degree of certainty?",
        "answers": {
            "type": "multiple",
            "values": ["Low", "Medium", "High"]
        },
        "image": ["multiples1.jpg"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Multiples"
    },
    {
        "id": 26,
        "question": "How confident are you that the high concentration area in the middle-row images is accurately portrayed?",
        "answers": {
            "type": "multiple",
            "values": ["Very Unconfident", "Unconfident", "Slightly Unconfident", "Neutral", "Slightly Confident", "Confident", "Very Confident"]
        },
        "image": ["multiples1.jpg"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 1
    },
    {
        "id": 27,
        "question": "On average, what percentage of the polluted area is exceeding the property boundary?",
        "answers": {
            "type": "range",
            "values": ["0", "100"]
        },
        "image": ["multiples3.png"],
        "type": "subjective",
        "orderGroup": 2,
        "RQ": 5
    },
    {
        "id": 28, 
        "question": "Does the bottom-middle image demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "multiple",
            "values": ["Low Risk", "High Risk"]
        },
        "image": ["multiples2.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 29, 
        "question": "To what extent does the visualization make you feel positive or negative?",
        "answers": {
            "type": "multiple",
            "values": ["Very Negative", "Negative", "Slightly Negative", "Neutral", "Slightly Positive", "Positive", "Very Positive"]
        },
        "image": ["multiples1.jpg"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 30, // Unique ID to associate participant responses to corresponding question
        "question": "What is the pollutant concentration at the middle sensor?", // Question text
        "answers": {
            "type": "multiple", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": ["Low", "Somewhat Low", "Somewhat High", "High"] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["separate1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Separate"
    },
    {
        "id": 31,
        "question": "What is the degree of certainty at the blue X marked location?",
        "answers": {
            "type": "multiple",
            "values": ["Low", "Somewhat Low", "Somewhat High", "High"]
        },
        "image": ["separate3.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Separate"
    },
    {
        "id": 32,
        "question": "How confident are you that the high concentration area is accurately portrayed?",
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
            "values": ["Low Risk", "High Risk"]
        },
        "image": ["separate2.png"],
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
        "image": ["separate2.png"],
        "type": "affective",
        "orderGroup": 3,
        "RQ": 1
    },
    {
        "id": 36, // Unique ID to associate participant responses to corresponding question
        "question": "Hover mouse over the image to see model certainty.\nWhat is the model certainty at the X marked location?", // Question text
        "answers": {
            "type": "mouseover", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
            "values": ["range"] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
        },
        "image": ["mouseover2.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
        "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
        "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
        "RQ": 1, // The research question that this question is trying to help answer
        "notes": "Mouseover"
    },
    {
        "id": 37,
        "question": "Hover mouse over the image to see model certainty.\nWhat is the model certainty at the X marked location?",
        "answers": {
            "type": "mouseover",
            "values": ["range"]
        },
        "image": ["mouseover3.png"],
        "type": "technical",
        "orderGroup": 1,
        "RQ": 1,
        "notes": "Mouseover"
    },
    {
        "id": 38,
        "question": "Hover mouse over the image to see model certainty.\nHow confident are you that the high concentration area is accurately portrayed by the model?",
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
        "question": "Hover mouse over the image to see model certainty.\nAt the X marked location, do you think it is possible that the pollutants could be at medium concentration?",
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
        "id": 40, 
        "question": "Hover mouse over the image to see model certainty.\nDoes the situation at this site demonstrate a low risk, or a high risk situation?",
        "answers": {
            "type": "mouseover",
            "values": ["multiple", ["Low Risk", "High Risk"]]
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
    //     "id": 42, 
    //     "question": "Click on the location of the map where concentration is highest.",
    //     "answers": {
    //         "type": "click",
    //         "values": []
    //     },
    //     "image": ["img1.png"],
    //     "type": "technical",
    //     "orderGroup": 1,
    //     "RQ": 1,
    //     "Notes": "Static/Animated"
    // },
    // {
    //     "id": 43, 
    //     "question": "Click on the location of the map where concentration is highest.",
    //     "answers": {
    //         "type": "click",
    //         "values": []
    //     },
    //     "image": ["img1.png"],
    //     "type": "technical",
    //     "orderGroup": 1,
    //     "RQ": 1,
    //     "Notes": "Mouseover"
    // },
    // {
    //     "id": 44, 
    //     "question": "Click on the location of the map where concentration is highest.",
    //     "answers": {
    //         "type": "click",
    //         "values": []
    //     },
    //     "image": ["img5.png"],
    //     "type": "technical",
    //     "orderGroup": 1,
    //     "RQ": 1,
    //     "Notes": "VSUP"
    // },
    // {
    //     "id": 45, 
    //     "question": "Click on the location of the map where concentration is highest.",
    //     "answers": {
    //         "type": "click",
    //         "values": []
    //     },
    //     "image": ["img1.png"],
    //     "type": "technical",
    //     "orderGroup": 1,
    //     "RQ": 1,
    //     "Notes": "HSV"
    // },
    // {
    //     "id": 46, 
    //     "question": "Click on the location of the map where concentration is highest.",
    //     "answers": {
    //         "type": "click",
    //         "values": []
    //     },
    //     "image": ["img1.png"],
    //     "type": "technical",
    //     "orderGroup": 1,
    //     "RQ": 1,
    //     "Notes": "HSV"
    // },
    // {
    //     "id": 47, 
    //     "question": "Click on the location of the map where concentration is highest.",
    //     "answers": {
    //         "type": "click",
    //         "values": []
    //     },
    //     "image": ["img1.png"],
    //     "type": "technical",
    //     "orderGroup": 1,
    //     "RQ": 1,
    //     "Notes": "HSV"
    // },
    // {
    //     "id": 1,
    //     "question": "Between image A and image B, which image are you more confident in?",
    //     "answers": {
    //         "type": "multiple-text", // multiple-text creates radio boxes based on answers.values and adds an additional textbox for user to provide reasoning
    //         "values": ["A", "B"]
    //     },
    //     "image": ["img2-1.png", "img2-2.png"],
    //     "type": "subjective",
    //     "orderGroup": 2,
    //     "RQ": 5
    // },
    // {
    //     "id": 2,
    //     "question": "What percentage of this property would you say is contaminated?",
    //     "answers": {
    //         "type": "range", // range creates a slider from answers.values[0] to answers.values[1]
    //         "values": ["0", "100"]
    //     },
    //     "image": ["img3.png"],
    //     "type": "subjective",
    //     "orderGroup": 2,
    //     "RQ": 1
    // },
    // {
    //     "id": 3,
    //     "question": "Is the plume over the property line?",
    //     "answers": {
    //         "type": "multiple", // multiple creates radio boxes based on answers.values
    //         "values": ["Yes", "No"]
    //     },
    //     "image": ["img4.png"],
    //     "type": "technical",
    //     "orderGroup": 1,
    //     "RQ": 1
    // },
    // {
    //     "id": 4,
    //     "question": "What is this visualization representing?",
    //     "answers": {
    //         "type": "text", // text creates a 3-line textbox for user to provide an open-ended response
    //         "values": []
    //     },
    //     "image": ["img5.jpg"],
    //     "type": "subjective",
    //     "orderGroup": 2.1,
    //     "RQ": 2
    // },
    // {
    //     "id": 5,
    //     "question": "Draw the area that you would expect to find hydrocarbons with high certainty.",
    //     "answers": {
    //         "type": "draw", // draw allows users to draw on the image with their mouse
    //         "values": []
    //     },
    //     "image": ["img6.png"],
    //     "type": "subjective",
    //     "orderGroup": 2.2,
    //     "RQ": 1
    // }
]