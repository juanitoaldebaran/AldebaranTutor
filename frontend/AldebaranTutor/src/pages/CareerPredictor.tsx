import Footer from "@/components/Common/Footer";
import LoadingSpinner from "@/components/Common/LoadingSpinner";
import Navbar from "@/components/Common/Navbar";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bot,
  Brain,
  CheckCircle,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

interface FormData {
  mathScore: number;
  codingInterest: number;
  problemSolving: number;
  businessInterest: number;
  handsOnWork: number;
}

interface Recommendation {
  course: string;
  confidence: number;
  rank: number;
}

interface FeatureImportance {
  feature: string;
  importance: number;
}

interface PredictionResponse {
  success: boolean;
  prediction?: {
    topRecommendation: string;
    confidence: number;
    allReccomendations: Recommendation[];
  };
  insight?: {
    featureImportance: FeatureImportance[];
  };
  error?: string;
}

interface Question {
  key: keyof FormData;
  label: string;
  description: string;
  emoji: string;
}

const Careerpredictor: React.FC = () => {
  const BASE_API_URL = "http://localhost:5000";

  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);

  const questions: Question[] = [
    {
      key: "mathScore",
      label: "Mathematical Aptitude",
      description: "How confident are you with mathematics and quantitative analysis?",
      emoji: "📊",
    },
    {
      key: "codingInterest",
      label: "Programming Interest",
      description: "How interested are you in coding and software development?",
      emoji: "💻",
    },
    {
      key: "problemSolving",
      label: "Problem Solving Skills",
      description: "How much do you enjoy solving complex logical problems?",
      emoji: "🧩",
    },
    {
      key: "businessInterest",
      label: "Business & Finance Interest",
      description: "How interested are you in markets, economics, and business strategy?",
      emoji: "💼",
    },
    {
      key: "handsOnWork",
      label: "Hands-on Work Preference",
      description: "How much do you enjoy practical, hands-on building and creating?",
      emoji: "🔧",
    },
  ];

  const [formData, setFormData] = useState<FormData>({
    mathScore: 5,
    codingInterest: 5,
    problemSolving: 5,
    businessInterest: 5,
    handsOnWork: 5,
  });

  const handleSliderChange = (field: keyof FormData, value: number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setShowResult(true);

    try {
      const response = await fetch(`${BASE_API_URL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: PredictionResponse = await response.json();

      if (data.success) {
        setPrediction(data);
      } else {
        console.error("Prediction failed:", data.error);
      }
    } catch (error) {
      console.error("Failed to connect to backend:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      mathScore: 5,
      codingInterest: 5,
      problemSolving: 5,
      businessInterest: 5,
      handsOnWork: 5,
    });
    setPrediction(null);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <motion.section
        id="hero"
        className="min-h-screen flex items-center mt-18"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto p-6 flex flex-col items-center justify-center gap-4">
          <span className="bg-gradient-to-r from-green-400/20 to-green-400/20 text-white px-4 py-2 rounded-lg">
            Boost Your Career Interest with Our Machine Learning Model 💻
          </span>
          <h1 className="text-[50px] text-center text-white font-bold">
            Machine Learning Career Predictor
          </h1>
          <h3 className="text-white text-xl mb-4">
            Discover your ideal career path using advanced machine learning algorithms
          </h3>

          <div className="flex items-center gap-6">
            <div className="flex p-2 gap-2 bg-white rounded-lg border-gray-800/50 border-1">
              <Bot className="text-green-600" />
              <span className="text-black">Machine Learning Model</span>
            </div>
            <div className="flex p-2 gap-2 bg-white rounded-lg border-gray-800/50 border-1">
              <CheckCircle className="text-blue-600" />
              <span className="text-black">87% Accuracy</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100 mt-10 w-full max-w-3xl">
            {!showResult ? (
              <div className="p-10">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <Brain className="text-purple-600" />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-black text-xl font-semibold">Tell me about yourself</h1>
                    <h3 className="text-black text-lg">Rate yourself from 1-10 in each category</h3>
                  </div>
                </div>

                <div className="space-y-10 mt-8">
                  {questions.map(({ key, label, description, emoji }) => (
                    <div key={key}>
                      <div className="flex items-start gap-3">
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <span className="text-lg">{emoji}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-black text-xl">{label}</span>
                          <p className="text-sm text-gray-600">{description}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <span>Low</span>
                        <input
                          type="range"
                          min={1}
                          max={10}
                          className="w-full h-4 mx-3"
                          value={formData[key]}
                          onChange={(e) => handleSliderChange(key, parseInt(e.target.value))}
                        />
                        <span>High</span>
                        <span className="ml-3 p-3 bg-blue-700 rounded-full text-white">
                          {formData[key]}
                        </span>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full bg-green-600 text-white py-5 px-8 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {isLoading ? (
                      <>
                        <span>Analyzing Your Profile...</span>
                        <LoadingSpinner />
                      </>
                    ) : (
                      <>
                        <Zap className="w-6 h-6" />
                        <span>Get My AI Recommendation</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <motion.div
                className="p-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {prediction ? (
                  <>
                    <div className="rounded-lg p-6 bg-green-600 mb-6">
                      <h3 className="text-white text-lg">🥳 Your Top Career Recommendation</h3>
                      <h4 className="text-white font-bold text-4xl mt-2">
                        {prediction.prediction?.topRecommendation}
                      </h4>
                      <p className="text-white text-sm mt-2">
                        Based on your profile, this field suits best for your career interest.
                      </p>
                      <div className="flex gap-2 mt-4">
                        <span className="bg-gray-100 px-3 py-2 rounded-lg text-black">
                          {prediction.prediction?.confidence.toFixed(2)}% Match
                        </span>
                        <span className="bg-gray-100 px-3 py-2 rounded-lg text-black flex items-center gap-2">
                          <Bot className="text-blue-600 w-4 h-4" /> AI Powered Predictor
                        </span>
                      </div>
                    </div>

                   
                    <div className="rounded-lg p-6 bg-gray-100 mb-6">
                      <h3 className="text-gray-900 text-lg font-semibold mb-3">
                        📊 Detailed Confidence Breakdown
                      </h3>
                      {prediction.prediction?.allReccomendations?.map((rec) => (
                        <div key={rec.course} className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>{rec.course}</span>
                            <span>{rec.confidence.toFixed(2)}%</span>
                          </div>
                          <div className="w-full bg-gray-300 h-2 rounded-full">
                            <div
                              className="bg-green-600 h-2 rounded-full"
                              style={{ width: `${rec.confidence}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-lg p-6 bg-gray-100">
                      <h3 className="text-gray-900 text-lg font-semibold mb-3">
                        🧠 Feature Importance
                      </h3>
                      {prediction.insight?.featureImportance?.map((feat) => (
                        <div key={feat.feature} className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>{feat.feature}</span>
                            <span>{feat.importance.toFixed(2)}%</span>
                          </div>
                          <div className="w-full bg-gray-300 h-2 rounded-full">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${feat.importance}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-center text-red-600 font-semibold">
                    ❌ Unable to fetch prediction. Try again.
                  </p>
                )}

                <button
                  onClick={resetForm}
                  className="w-full mt-8 bg-gray-700 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ArrowLeft /> Retake the Form
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Careerpredictor;
