import Navbar from "@/components/Common/Navbar";
import type React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Clock, Shield, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Common/Footer";

const Home: React.FC = () => {

    const learningSectors = [
        {
            "id": "CS",
            "name": "Computer Science",
            "description": "Master algorithms, system designs, data structures and programming fundamentals with AI-powered adaptive learning",
            "icon": "💻",
            "skills": [
               "Data Structures", 
               "System Designs",
               "AI/ML",
               "Procedural Programming"
            ]
        }, 
        {
            "id": "FIN",
            "name": "Finance",
            "description": "Excel in financial modelling, investment analysis, risk management, and quantitive finance concepts",
            "icon": "📈",
            "skills": [
               "Excel VBA", 
               "Financial Modelling",
               "Investment Analysis",
               "Risk Management"
            ]
        }, 
        {
            "id": "ENG",
            "name": "Engineering",
            "description": "Strengthen your foundation in mechanical, civil, and software engineering principles",
            "icon": "⚙️",
            "skills": [
                "Engineering Design",
                "Principle of Engineering",
                "CAD Design",
                "Circuit Analysis"
            ]
        }
    ];


    return (
        <div className="min-h-screen bg-black">
            {/*Navbar Section*/}
            <Navbar />

            {/*Hero Section*/}
             <motion.section 
                id="hero"
                className="min-h-screen flex items-center bg-black"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-6xl mx-auto p-6 flex flex-col items-center justify-center gap-4">
                    <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30 text-purple-300 px-4 py-2 rounded-lg">
                        ⚡️ Now Powered with ML model and AI tools
                    </span>
                    <h1 className="text-[50px] text-center text-white font-bold">
                        The Foundation for Your Learning Platform
                    </h1>
                    <span className="text-center text-[46px] block font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        AI-Powered Learning
                    </span>
                    <p className="text-white text-[21px] text-center">
                        Specialized in Computer Science, Finance, and Engineering Sectors with our AI
                        learning platform. Learn anywhere and everywhere
                    </p>
                    <p className="text-center mt-4 bg-white text-black p-2 rounded-lg">
                        🚀 Deep dive into the world of Technology, Finance, and Engineering
                    </p>
                
                <div className="flex flex-wrap justify-center gap-4 mt-12">

                    <div className="flex items-center gap-2 bg-gray-900/50 border border-gray-700 rounded-full px-4 py-2">
                        <Brain className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-300">AI-Adaptive</span>
                    </div>

                    <div className="flex items-center gap-2 bg-gray-900/50 border border-gray-700 rounded-full px-4 py-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-300">24/7 Available</span>
                    </div>

                    <div className="flex items-center gap-2 bg-gray-900/50 border border-gray-700 rounded-full px-4 py-2">
                        <Trophy className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm text-gray-300">Gamified</span>
                    </div>

                    <div className="flex items-center gap-2 bg-gray-900/50 border border-gray-700 rounded-full px-4 py-2">
                        <Shield className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">Proven Results</span>
                    </div>

                </div>
                </div>
            </motion.section>
            
            {/* Services Section */}
            <motion.section 
                id="features"
                className="min-h-screen py-40 border-bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-semibold text-center text-white mb-8 mt-10">
                    Our
                    <span className="ml-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                         Learning Sectors
                    </span>
                </h2>
                <h3 className="text-3xl font-semibold text-gray-200 text-center">
                    Our learning content covers the most in demand modules in today's technology driven world
                </h3>

                <div className="grid grid-cols-1 gap-8 mt-12">
                    {learningSectors.map((service, idx) => (
                    <motion.div 
                        key={service.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        className="flex flex-col  text-left cursor-pointer border-t-1 border-purple-600  p-8 gap-8 shadow-md rounded-lg bg-gray-900/50 hover:shadow-xl hover:scale-102 transition-all min-h-[320px] text-white"
                    >       
                            <h1 className="text-8xl">
                                {service.icon}
                            </h1>
                            <h2 className="text-[40px] font-bold  rounded-lg">
                                {service.name}
                            </h2>
                            <h3 className="text-2xl font-light">
                                {service.description}
                            </h3>
                            <h4 className="font-bold text-2xl">
                                🎯 Key Skills
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                {service.skills.map((skill, index) => (
                                    <div
                                    key={index}
                                    className="flex items-center p-6 text-sm border-1 border-bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-gray-800/30 text-gray-100 rounded-lg"
                                    >
                                        ✅ {skill}
                                    </div>
                                ))}
                            </div>
                            <Link to={'/learn'} className="bg-purple-600 hover:bg-purple-800 duration-200 p-4 rounded-lg shadow-lg text-center font-bold text-[20px]">
                                Get Started
                            </Link>
                    </motion.div>
                    ))}
                </div>
                </div>
            </motion.section>

            {/* Why Choose Us Section */}
            <motion.section 
                id=""
                className="min-h-screen py-40 border-bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-semibold text-center text-white mb-8 mt-10">
                    Why Choose
                    <span className="ml-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                         Us?
                    </span>
                </h2>
                <h3 className="text-3xl font-semibold text-gray-200 text-center">
                    Our learning content covers the most in demand modules in today's technology driven world
                </h3>

                <div className="grid grid-cols-1 gap-8 mt-12">
                    {learningSectors.map((service, idx) => (
                    <motion.div 
                        key={service.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        className="flex flex-col  text-left cursor-pointer border-t-1 border-purple-600  p-8 gap-8 shadow-md rounded-lg bg-gray-900/50 hover:shadow-xl hover:scale-102 transition-all min-h-[320px] text-white"
                    >       
                        
                    </motion.div>
                    ))}
                </div>
                </div>
            </motion.section>
            
            <Footer />

        </div>
    )
}

export default Home;