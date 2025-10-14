from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib
from sklearn.ensemble import RandomForestClassifier
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

def get_training_data():
    """
    features: [math_score, coding_interest, problem_solving, business_interest, hands_on_work]
    label = 0 - computer science, 1 - finance, 2 - engineering
    """

    X = np.array([
        #computer science - high math, problem solving, and coding
        [9, 9, 8, 3, 5],
        [8, 10, 9, 2, 4],
        [9, 8, 9, 4, 6],
        [7, 9, 8, 3, 5],
        [8, 8, 8, 3, 4],
        [9, 7, 9, 2, 5],
        [7, 8, 7, 4, 6],
        [8, 9, 8, 3, 5],
        [9, 9, 9, 2, 4],
        [8, 8, 8, 3, 5],

        #finance students - high finance, and business interest
        [9, 4, 7, 9, 4],
        [8, 3, 6, 10, 3],
        [9, 2, 8, 9, 5],
        [7, 3, 7, 8, 4],
        [8, 4, 7, 9, 3],
        [9, 3, 8, 10, 4],
        [7, 2, 6, 8, 3],
        [8, 3, 7, 9, 4],
        [9, 4, 8, 9, 3],
        [8, 3, 7, 8, 4],

        #engineering students - high math, problem solving, and hands on
        [9, 5, 9, 4, 9],
        [8, 6, 8, 3, 10],
        [9, 4, 9, 5, 8],
        [7, 5, 8, 4, 9],
        [8, 6, 9, 3, 10],
        [9, 5, 8, 4, 9],
        [8, 4, 9, 3, 8],
        [7, 5, 8, 4, 10],
        [9, 6, 9, 3, 9],
        [8, 5, 8, 4, 10],
    ]
    )

    y = np.array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2  
    ])

    return X, y

def train_model():
    print("Training AI Model")

    X, y = get_training_data()

    model = RandomForestClassifier(
        n_estimators=100,
        max_depth=10,
        random_state=42,
        min_samples_split=2
    )

    model.fit(X, y)

    train_score = model.score(X, y)

    print(f"Model Accuraccy: {train_score * 100:.2f}%")

    return model

if os.path.exists("course_predictor_model.pkl"):
    print("Loading existing model...")
    model = joblib.load("course_predictor_model.pkl")
    print("Model loaded successfully!")
else:
    model = train_model()

COURSES = ["Computer Science", "Finance", "Engineering"]

@app.route("/")
def health_check():
    "Check if API is running"
    return jsonify({
        "status": "healthy",
        "message": "API is running",
        "model": model is not None,
        "timestamp": datetime.now().isoformat()
    })

@app.route("/predict", methods=["POST"])
def predict():

    try:
        data = request.get_json()

        required_field = ["mathScore", "codingInterest", "problemSolving", "businessInterest", "handsOnWork"]
        
        for field in required_field:
            if field not in data:
                return jsonify({
                    "success": False,
                    "error": f"Missing required field: {field}"
                }), 400

        
        features = np.array([[
            float(data["mathScore"]),
            float(data["codingInterest"]),
            float(data["problemSolving"]),
            float(data["businessInterest"]),
            float(data["handsOnWork"])
        ]])

        if np.any(features < 1) or np.any(features > 10):
            return jsonify({
                "status": False,
                "error": "Value must be between 1 or 10"
            }, 400)
        
        prediction_idx = model.predict(features)[0]
        probabilities = model.predict_proba(features)[0]

        feature_names = ['Math', 'Coding', 'Problem Solving', 'Business', 'Hands-on']
        importances = model.feature_importances_

        recommendations = [
            {
                'course': COURSES[i],
                'confidence': float(probabilities[i] * 100),
                'rank': idx + 1
            }
            for idx, i in enumerate(np.argsort(probabilities)[::-1])
        ]

        response = {
            "success": True,
            "prediction": {
                "topRecommendation": COURSES[prediction_idx],
                "confidence": float(probabilities[prediction_idx] * 100),
                "allReccomendations": recommendations,
            }, 
            "insight": {    
                "featureImportance": [
                    {"feature": name, "importance": float(imp * 100)}
                    for name, imp in zip(feature_names, importances)
                ]
            }, 
            "timestamp": datetime.now().isoformat()
        }

        return jsonify(response)

    except ValueError as e:
        return jsonify({
            'success': False,
            'error': f'Invalid input values: {str(e)}'
        }), 400
    
    except Exception as e:
        print(f"❌ Error during prediction: {str(e)}")
        return jsonify({
            'success': False,
            'error': 'An error occurred during prediction'
        }), 500

@app.route("/retrain", methods=["POST"])
def retrain_model():
    try:
        global model
        model = train_model()

        return jsonify({
            "status": True,
            "message": "Model trained successfully",    
            "timeformat": datetime.now().isoformat()
        })
    
    except ValueError as e:
        return jsonify({
            "success": False,
            "error": str(e)
        }), 400

@app.route("/model-info", methods=['GET'])
def model_info():
    """Get information about the current model"""
    X, y = get_training_data()
    
    return jsonify({
        'success': True,
        'modelInfo': {
            'algorithm': 'Random Forest Classifier',
            'numberOfTrees': 100,
            'trainingDataSize': len(X),
            'courses': COURSES,
            'features': [
                'Mathematical Aptitude',
                'Programming Interest',
                'Problem Solving Skills',
                'Business Interest',
                'Hands-on Work Preference'
            ],
            'accuracy': float(model.score(X, y) * 100)
        }
    })

if __name__ == '__main__':
    print("Starting API Server")

    app.run(debug=True, port=5000, host='0.0.0.0')