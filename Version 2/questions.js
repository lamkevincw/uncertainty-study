const questions = {
    "texture": [
        // Reading vis questions
        {
            "id": 1,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Low",
            "image": ["texture-edit1.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 2,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Somewhat High",
            "image": ["texture-edit3.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 3,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["texture-edit5.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        // Reading vis concentration questions
        {
            "id": 22,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["texture-edit2.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 23,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Somewhat High",
            "image": ["texture-edit4.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 24,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "High",
            "image": ["texture-edit6.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Texture/Colour"
        },
        {
            "id": 77,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Very Low",
            "image": ["texture-edit7.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1
        },
        // Interpreting vis questions
        {
            "id": 43,
            "question": "What is the likelihood that the blue X-marked location has a medium concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Very Unlikely",
            "image": ["texture-edit2.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 44,
            "question": "What is the likelihood that the blue X-marked location has a medium concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Neutral",
            "image": ["texture-edit4.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 45,
            "question": "What is the likelihood that the blue X-marked location has a high concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Likely",
            "image": ["texture-edit6.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 65, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["texture1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Texture/Colour"
        },
        {
            "id": 66, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["texture5.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Texture/Colour"
        },
        {
            "id": 67, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["texture9.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Texture/Colour"
        },
    ],
    "hsv": [
        {
            "id": 4,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "High",
            "image": ["hsv-edit1.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "HSV"
        },
        {
            "id": 5,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["hsv-edit3.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "HSV"
        },
        {
            "id": 6,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "High",
            "image": ["hsv-edit5.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "HSV"
        },
        {
            "id": 25,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Very Low",
            "image": ["hsv-edit2.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "HSV"
        },
        {
            "id": 26,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Low",
            "image": ["hsv-edit4.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "HSV"
        },
        {
            "id": 27,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "High",
            "image": ["hsv-edit6.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "HSV"
        },
        {
            "id": 46,
            "question": "What is the likelihood that the blue X-marked location has no pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Unlikely",
            "image": ["hsv-edit2.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 47,
            "question": "What is the likelihood that the blue X-marked location has a low concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Unlikely",
            "image": ["hsv-edit4.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 48,
            "question": "What is the likelihood that the blue X-marked location has a high concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Slightly Likely",
            "image": ["hsv-edit6.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 78,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Very Low",
            "image": ["hsv-edit7.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1
        },
        {
            "id": 68, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["hsv1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "HSV"
        },
        {
            "id": 69, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["hsv2.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "HSV"
        },
        {
            "id": 70, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["hsv3.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "HSV"
        },
    ],
    "vsup": [
        {
            "id": 7,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["vsup-edit1.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "VSUP"
        },
        {
            "id": 8,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["vsup-edit2.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "VSUP"
        },
        {
            "id": 9,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Somewhat High",
            "image": ["vsup-edit3.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "VSUP"
        },
        {
            "id": 28,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Somewhat Low",
            "image": ["vsup-edit1.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "VSUP"
        },
        {
            "id": 29,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Somewhat High",
            "image": ["vsup-edit2.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "VSUP"
        },
        {
            "id": 30,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Somewhat High",
            "image": ["vsup-edit3.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "VSUP"
        },
        {
            "id": 49,
            "question": "What is the likelihood that the blue X-marked location has a low concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Neutral",
            "image": ["vsup-edit1.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 50,
            "question": "What is the likelihood that the blue X-marked location has a medium concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Neutral",
            "image": ["vsup-edit2.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 51,
            "question": "What is the likelihood that the blue X-marked location has a medium concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Likely",
            "image": ["vsup-edit3.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 79,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Very Low",
            "image": ["vsup-edit4.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1
        },
        {
            "id": 74, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["vsup1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "VSUP"
        },
        {
            "id": 75, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["vsup2.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "VSUP"
        },
        {
            "id": 76, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["vsup3.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "VSUP"
        },
    ],
    "static": [
        {
            "id": 13,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Somewhat Low",
            "image": ["static-edit1.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Static"
        },
        {
            "id": 14,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["static-edit2.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Static"
        },
        {
            "id": 15,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Low",
            "image": ["static-edit3.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Static"
        },
        {
            "id": 34,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["static-edit1.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Static"
        },
        {
            "id": 35,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Low",
            "image": ["static-edit2.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Static"
        },
        {
            "id": 36,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["static-edit3.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Static"
        },
        {
            "id": 52,
            "question": "What is the likelihood that the polluted area is exceeding the property boundary?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Likely",
            "image": ["static1.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Static"
        },
        {
            "id": 53,
            "question": "What is the likelihood that the polluted area is exceeding the property boundary?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Very Likely",
            "image": ["static2.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Static"
        },
        {
            "id": 54,
            "question": "What is the likelihood that the polluted area is exceeding the property boundary?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Very Unlikely",
            "image": ["static3.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Static"
        },
        {
            "id": 80,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Very Low",
            "image": ["static-edit4.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1
        },
        {
            "id": 71, // Unique ID to associate participant responses to corresponding question
            "question": "Click on an area enclosed by a boundary where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["static1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Static"
        },
        {
            "id": 72, // Unique ID to associate participant responses to corresponding question
            "question": "Click on an area enclosed by a boundary where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["static2.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Static"
        },
        {
            "id": 73, // Unique ID to associate participant responses to corresponding question
            "question": "Click on an area enclosed by a boundary where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["static3.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Static"
        },
    ],
    "animated": [
        {
            "id": 16,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Low",
            "image": ["animated-edit1.gif"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Animated"
        },
        {
            "id": 17,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "High",
            "image": ["animated-edit2.gif"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Animated"
        },
        {
            "id": 18,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["animated-edit3.gif"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Animated"
        },
        {
            "id": 37,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Low",
            "image": ["animated-edit1.gif"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Animated"
        },
        {
            "id": 38,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["animated-edit2.gif"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Animated"
        },
        {
            "id": 39,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "High",
            "image": ["animated-edit3.gif"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Animated"
        },
        {
            "id": 55,
            "question": "What is the likelihood that the polluted area is exceeding the property boundary?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Likely",
            "image": ["animated1.gif"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 56,
            "question": "What is the likelihood that the polluted area is exceeding the property boundary?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Very Likely",
            "image": ["animated2.gif"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 57,
            "question": "What is the likelihood that the polluted area is exceeding the property boundary?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Very Unlikely",
            "image": ["animated3.gif"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 82,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Very Low",
            "image": ["animated-edit4.gif"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1
        },
        {
            "id": 83, // Unique ID to associate participant responses to corresponding question
            "question": "Click on an area enclosed by a boundary where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["animated1.gif"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Animated"
        },
        {
            "id": 84, // Unique ID to associate participant responses to corresponding question
            "question": "Click on an area enclosed by a boundary where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["animated2.gif"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Animated"
        },
        {
            "id": 85, // Unique ID to associate participant responses to corresponding question
            "question": "Click on an area enclosed by a boundary where concentration is highest. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["animated3.gif"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Animated"
        },
    ],
    "multiples": [
        {
            "id": 19,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Somewhat High",
            "image": ["multiples-edit1.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Multiples"
        },
        {
            "id": 20,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Somewhat Low",
            "image": ["multiples-edit2.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Multiples"
        },
        {
            "id": 21,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Low",
            "image": ["multiples-edit3.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Multiples"
        },
        {
            "id": 40,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["multiples-edit1.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Multiples"
        },
        {
            "id": 41,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Low",
            "image": ["multiples-edit2.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Multiples"
        },
        {
            "id": 42,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Somewhat High",
            "image": ["multiples-edit3.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Multiples"
        },
        {
            "id": 58,
            "question": "What is the likelihood that the polluted area is exceeding the property boundary?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Unlikely",
            "image": ["multiples5.png"],
            "type": "subjective",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Multiples"
        },
        {
            "id": 59,
            "question": "What is the likelihood that the polluted area is exceeding the property boundary?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Very Likely",
            "image": ["multiples6.png"],
            "type": "subjective",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Multiples"
        },
        {
            "id": 60,
            "question": "What is the likelihood that the polluted area is exceeding the property boundary?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Unlikely",
            "image": ["multiples7.png"],
            "type": "subjective",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Multiples"
        },
        {
            "id": 86,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Very Low",
            "image": ["multiples-edit4.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1
        },
        {
            "id": 87, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest (on the first large image). Scroll down to see the question image. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["multiples5.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Multiples"
        },
        {
            "id": 88, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest (on the first large image). Scroll down to see the question image. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["multiples6.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Multiples"
        },
        {
            "id": 89, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest (on the first large image). Scroll down to see the question image. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["multiples7.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Multiples"
        },
    ],
    "separate": [
        {
            "id": 10,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Low",
            "image": ["separate-edit2.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Separate"
        },
        {
            "id": 11,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Very Low",
            "image": ["separate-edit4.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Separate"
        },
        {
            "id": 12,
            "question": "What is the degree of certainty at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Somewhat High",
            "image": ["separate-edit6.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Separate"
        },
        {
            "id": 31,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Medium",
            "image": ["separate-edit1.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Separate"
        },
        {
            "id": 32,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "High",
            "image": ["separate-edit3.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Separate"
        },
        {
            "id": 33,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Very Low",
            "image": ["separate-edit5.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1,
            "notes": "Separate"
        },
        {
            "id": 62,
            "question": "What is the likelihood that the blue X-marked location has a high concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Slightly Unlikely",
            "image": ["separate-edit2.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 63,
            "question": "What is the likelihood that the blue X-marked location has a low concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Very Unlikely",
            "image": ["separate-edit4.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 64,
            "question": "What is the likelihood that the blue X-marked location has a high concentration of pollutants?",
            "answers": {
                "type": "multiple",
                "values": ["Very Unlikely", "Unlikely", "Slightly Unlikely", "Neutral", "Slightly Likely", "Likely", "Very Likely"]
            },
            "correctAnswer": "Neutral",
            "image": ["separate-edit6.png"],
            "type": "subjective",
            "orderGroup": 2,
            "RQ": 1
        },
        {
            "id": 81,
            "question": "What is the predicted concentration of the pollutant at the blue X-marked location?",
            "answers": {
                "type": "multiple",
                "values": ["Very Low", "Low", "Somewhat Low", "Medium", "Somewhat High", "High", "Very High"]
            },
            "correctAnswer": "Very Low",
            "image": ["separate-edit7.png"],
            "type": "technical",
            "orderGroup": 1,
            "RQ": 1
        },
        {
            "id": 90, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest (on the first large image). Scroll down to see the question image. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["separate1.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Separate"
        },
        {
            "id": 91, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest (on the first large image). Scroll down to see the question image. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["separate2.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Separate"
        },
        {
            "id": 92, // Unique ID to associate participant responses to corresponding question
            "question": "Click on the location of the map where concentration is highest (on the first large image). Scroll down to see the question image. The reset button will clear the marker.", // Question text
            "answers": {
                "type": "click", // Answer type (click, multiple, multiple-text, range, text, draw); click creates a target on the user's last mousedown position
                "values": [] // Possible answers that user can choose from; only used for multiple/multiple-text (i.e., choices) and range (i.e, min, max)
            },
            "correctAnswer": "",
            "image": ["separate3.png"], // Associated image; can be multiple images, but it will be easier to display correctly if using only one image file
            "type": "technical", // Type of question: technical (i.e., has correct answer) or subjective
            "orderGroup": 1, // Questions grouped based on value; lower values will be shown first, same values will be randomized; sort of like z-values
            "RQ": 1, // The research question that this question is trying to help answer
            "notes": "Separate"
        },
    ]
}