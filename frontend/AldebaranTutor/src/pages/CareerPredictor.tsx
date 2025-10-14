import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import { motion } from "framer-motion";
import { Bot, CheckCircle } from "lucide-react";
import type React from "react";

const Careerpredictor: React.FC = () => {
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
                        Boost Your Career Interest with Our Machine Learning Model  💻 
                    </span>
                    <h1 className="text-[50px] text-center text-white font-bold">
                        Machine Learning Career Predictor
                    </h1>
                    <h3 className="text-white text-xl mb-4">Discover your ideal career path using advanced machine learning algorithms</h3>
                    <div className="flex items-center gap-6">
                        <div className="flex p-2 gap-2 bg-white rounded-lg border-gray-800/50 border-1">
                            <Bot className="text-green-600"/>
                            <span className="text-black">
                                Machine Learning Model
                            </span>
                        </div>
                        <div className="flex p-2 gap-2 bg-white rounded-lg border-gray-800/50 border-1">
                            <CheckCircle className="text-blue-600"/>
                            <span className="text-black">
                                87% Accuracy
                            </span>
                        </div>
                       
                    </div>
            
                </div>
            </motion.section>

            <Footer />
        </div>
    )
}

export default Careerpredictor;