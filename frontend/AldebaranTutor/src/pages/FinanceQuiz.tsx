import Navbar from "@/components/Common/Navbar";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import useNotification from "@/hooks/useNotification";
import type { QuizJsonResponse } from "@/types/ai";
import type React from "react";
import { useState } from "react";
import Notification from "@/components/Common/Notification";
import LoadingSpinner from "@/components/Common/LoadingSpinner";

const FinanceQuiz: React.FC = () => {
    const [quizData, setQuizData] = useState<QuizJsonResponse[]>([]);
    const [quizStarted, setQuizStarted] = useState(false);
    const [level, setLevel] = useState<'EASY'| 'MEDIUM' | 'HARD'>('MEDIUM');
    const [isLoading, setIsLoading] = useState(false);
    const {notification, showNotification, hideNotification} = useNotification();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);

    const levelClass = [
        {
            name: "EASY" as const,
            colour: "from-green-500 to-emerald-600",
            icon: "🟢",
            description: "Perfect for beginners"
        },
        {
            name: "MEDIUM" as const,
            colour: "from-yellow-500 to-orange-600",
            icon: "🟡",
            description: "Test your skills"
        },
        {
            name: "HARD" as const,
            colour: "from-red-500 to-pink-600",
            icon: "🔴",
            description: "Expert level challenge"
        },
    ];

    const fetchQuestion = async (levelName: 'EASY' | 'MEDIUM' | 'HARD') => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:8080/quiz/finance?levelName=${levelName}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (response.ok) {
                    console.log("Successfully fetch question data");
                    const data = await response.json();
                    const parsedQuestions = JSON.parse(data.quizJsonResponse);
                    setQuizData(parsedQuestions.questions);
                    setQuizStarted(true);
                    showNotification("Quiz loaded sucessfully", "success");
                } else {
                    showNotification("Failed to load questions", "error");
                    return;
                }
            } catch (error) {
                showNotification("Failed to fetch question data", "error");
                console.error("Failed to fetch question data", error);
                return;
            } finally {
                setIsLoading(false);
            }
    }

    const handleStartQuiz = () => {
        fetchQuestion(level);
    };

   const handleNextQuestion = () => {
       if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
       } else {
        setShowResult(true);
       }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSelectAnswer = (answer: string) => {
       const newAnswer = [...selectedAnswer];
       newAnswer[currentQuestion] = answer;
       setSelectedAnswer(newAnswer);
    }

    const resetQuiz = () => {
        setQuizStarted(false);
        setQuizData([]);
        setCurrentQuestion(0);
        setSelectedAnswer([]);
        setShowResult(false);
    }

    const calculateScore = () => {
        return selectedAnswer.reduce((score, answer, index) => {
            return answer === quizData[index]?.correctAnswer ? score + 1 : score;
        }, 0);
    }

    if (!quizStarted) {
        return (
            <div className="min-h-screen">
                <Navbar />

                <div className="flex flex-col justify-center py-16 px-4 gap-8">
                    <h1 className="text-white text-5xl text-center font-semibold mt-20">Finance 📊</h1>
                    <p className="text-white text-center">Test your knowledge by starting this Finance Quiz</p>
                </div>
                <div className="flex items-center justify-center">   
                    <Card className="max-w-6xl w-full bg-black border-gray-600 p-8">
                        <CardHeader className="text-white text-left font-bold text-2xl">
                            Ready to test your Finance knowledge?
                            <CardDescription className="text-white text-base">The quiz contains 10 questions based on EASY, MEDIUM, HARD LEVEL in Finance sectors. Please select the level and make sure you answer correctly. Good luck!</CardDescription>
                        </CardHeader>
                       <CardContent className="space-y-8">
                                {/* Difficulty Selection */}
                                <div className="space-y-4">
                                    <label className="text-white font-semibold text-lg block">
                                        Choose Difficulty Level
                                    </label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {levelClass.map((lvl) => (
                                            <button
                                                key={lvl.name}
                                                onClick={() => setLevel(lvl.name)}
                                                className={`relative overflow-hidden group p-6 rounded-xl transition-all duration-300 border-2 ${
                                                    level === lvl.name
                                                        ? 'border-white shadow-lg scale-105'
                                                        : 'border-slate-700 hover:border-slate-600'
                                                }`}
                                            >
                                                <div className={`absolute inset-0 bg-gradient-to-br ${lvl.colour} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                                                <div className="relative z-10 space-y-2">
                                                    <div className="text-4xl mb-2">{lvl.icon}</div>
                                                    <div className="text-white font-bold text-xl">{lvl.name}</div>
                                                    <div className="text-gray-400 text-sm">{lvl.description}</div>
                                                </div>
                                                {level === lvl.name && (
                                                    <div className="absolute top-3 right-3">
                                                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                                            <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Quiz Info */}
                                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-3xl font-bold text-blue-400">10</div>
                                            <div className="text-gray-400 text-sm mt-1">Questions</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-purple-400">4</div>
                                            <div className="text-gray-400 text-sm mt-1">Options Each</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-cyan-400">~15</div>
                                            <div className="text-gray-400 text-sm mt-1">Minutes</div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleStartQuiz}
                                    disabled={isLoading}
                                    className="w-full bg-white hover:bg-gray-200 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Generating Quiz...
                                        </span>
                                    ) : (
                                        'Start Quiz'
                                    )}
                                </button>
                            </CardContent>
                    </Card>
                </div>
            </div>
        )
    }

     if (showResult) {
        const score = calculateScore();
        const percentage = (score / quizData.length) * 100;
        const getGrade = () => {
            if (percentage >= 90) return { grade: 'A+', color: 'text-green-400', message: 'Outstanding!' };
            if (percentage >= 80) return { grade: 'A', color: 'text-green-400', message: 'Excellent!' };
            if (percentage >= 70) return { grade: 'B', color: 'text-blue-400', message: 'Well Done!' };
            if (percentage >= 60) return { grade: 'C', color: 'text-yellow-400', message: 'Good Effort!' };
            return { grade: 'D', color: 'text-red-400', message: 'Keep Learning!' };
        };
        const gradeInfo = getGrade();

        return (
            <div className="min-h-screen bg-black">
                <Navbar />
                <Notification
                    message={notification.message}
                    type={notification.type}
                    isVisible={notification.isVisible}
                    onClose={hideNotification}
                    duration={3000}
                    position="top-right"
                />

                <div className="container mx-auto mt-14 px-4 py-16">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-white mb-4">Quiz Complete! 🎉</h1>
                            <p className="text-gray-400">Here's how you performed</p>
                        </div>

                        {/* Score Card */}
                        <Card className="bg-black border-gray-600 mb-8">
                            <CardContent className="p-8">
                                <div className="flex flex-col md:flex-row items-center justify-around gap-8">
                                    <div className="text-center">
                                        <div className={`text-7xl font-bold ${gradeInfo.color} mb-2`}>
                                            {gradeInfo.grade}
                                        </div>
                                        <div className="text-gray-400">{gradeInfo.message}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-6xl font-bold text-white mb-2">
                                            {score}/{quizData.length}
                                        </div>
                                        <div className="text-gray-400">Correct Answers</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-6xl font-bold text-white mb-2">
                                            {percentage.toFixed(0)}%
                                        </div>
                                        <div className="text-gray-400">Accuracy</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Detailed Results */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-white mb-4">Answer Review</h2>
                            {quizData.map((q, index) => {
                                const isCorrect = selectedAnswer[index] === q.correctAnswer;
                                return (
                                    <Card key={index} className={`bg-black border-2 ${isCorrect ? 'border-green-500/30' : 'border-red-500/30'}`}>
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                                                    {isCorrect ? '✓' : '✗'}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-white font-semibold text-lg mb-4">
                                                        Question {index + 1}: {q.question}
                                                    </h3>
                                                    <div className="space-y-2">
                                                        {q.options.map((option, optIndex) => (
                                                            <div
                                                                key={optIndex}
                                                                className={`p-4 rounded-lg border-2 ${
                                                                    option === q.correctAnswer
                                                                        ? 'bg-green-500/10 border-green-500'
                                                                        : selectedAnswer[index] === option
                                                                        ? 'bg-red-500/10 border-red-500'
                                                                        : 'bg-slate-800/50 border-slate-700'
                                                                }`}
                                                            >
                                                                <div className="flex items-center justify-between">
                                                                    <span className="text-white">{option}</span>
                                                                    {option === q.correctAnswer && (
                                                                        <span className="text-green-400 text-sm font-semibold">Correct Answer</span>
                                                                    )}
                                                                    {selectedAnswer[index] === option && option !== q.correctAnswer && (
                                                                        <span className="text-red-400 text-sm font-semibold">Your Answer</span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                                                        <p className="text-sm text-gray-300">
                                                            <span className="font-semibold text-blue-400">Explanation: </span>
                                                            {q.explanation}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>

                        {/* Action Button */}
                        <div className="mt-8">
                            <button
                                onClick={resetQuiz}
                                className="w-full bg-white hover:bg-gray-200 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Take Another Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    const currentQ = quizData[currentQuestion];
    const progress = ((currentQuestion + 1 ) / quizData.length) * 100;
    
      if (!currentQ) {
        return (
            <div className="min-h-screen">
                <Navbar />
                <div className="flex items-center justify-center h-screen">
                    <div className="text-white text-xl flex gap-4 flex-col bg-gray-900/50 p-6 rounded-lg">
                        Loading question...
                        <LoadingSpinner />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="flex flex-col justify-center py-16 px-4 gap-8">
                <h1 className="text-white text-5xl text-center font-semibold mt-20">Information Technology 💻 </h1>
                <p className="text-white text-center">Test your knowledge by starting this Information Technology Quiz</p>
            </div>
            <div className="flex items-center justify-center">
                <Card className="max-w-6xl w-full bg-black border-gray-600 p-8">
                    <CardHeader className="text-white text-left font-bold text-2xl">
                        Question {currentQuestion + 1} of {quizData.length}
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="space-y-4">
                           <h3 className="text-white text-2xl font-semibold leading-relaxed">
                             {currentQ.question}
                           </h3>
                        </div>

                        <div className="max-w-6xl mx-auto w-full">
                        <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full transition-all duration-500 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                            </div>
                            <div className="text-center mt-2">
                                <span className="text-white font-semibold">{Math.round(progress)}% Complete</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {currentQ.options.map((option, index) => {
                                const isSelected = selectedAnswer[currentQuestion] === option;
                                const optionsLabel = ["A", "B", "C", "D"];

                                return (
                                    
                                       <button
                                        key={index}
                                        onClick={() => handleSelectAnswer(option)}
                                        className={`w-full text-left p-5 rounded-xl transition-all duration-300 border-2 group ${
                                            isSelected
                                                ? 'bg-blue-500/20 border-blue-500 shadow-lg scale-105'
                                                : 'bg-slate-800/50 border-slate-700 hover:border-slate-600 hover:bg-slate-800'
                                        }`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-colors ${
                                                isSelected
                                                    ? 'bg-blue-500 text-white'
                                                    : 'bg-slate-700 text-gray-400 group-hover:bg-slate-600'
                                            }`}>
                                                {optionsLabel[index]}
                                            </div>
                                            <span className="text-white text-lg flex-1">{option}</span>
                                            {isSelected && (
                                                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            )}
                                            </div>
                                        </button>
                                )
                            })}
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={handlePreviousQuestion}
                                disabled={currentQuestion === 0}
                                className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-700"
                            >
                                ← Previous
                            </button>
                            <button
                                onClick={handleNextQuestion}
                                disabled={!selectedAnswer[currentQuestion]}
                                className="flex-1 bg-white hover:bg-gray-200 text-black font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {currentQuestion === quizData.length - 1 ? 'Finish Quiz' : 'Next →'}
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>    
            
             <Notification
                message={notification.message}
                type={notification.type}
                isVisible={notification.isVisible}
                onClose={hideNotification}
                duration={1000}
                position="top-right"
            >
            </Notification>
        </div>
    )
}

export default FinanceQuiz;