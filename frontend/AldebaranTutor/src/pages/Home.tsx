import Navbar from "@/components/Common/Navbar";
import type React from "react";
import { motion } from "framer-motion";
import { Brain, Clock, Code, Settings, Shield, Target, TrendingUp, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Common/Footer";


const Home: React.FC = () => {

    const learningSectors = [
        {
            id: "CS",
            name: "Computer Science",
            description: "Master algorithms, system designs, data structures and programming fundamentals with AI-powered adaptive learning",
            icon: Code,
            bgColor: "from-blue-500/10 to-cyan-500/10",
            color: "from-blue-500 to-cyan-500",
            skills: [
               "Data Structures", 
               "System Designs",
               "AI/ML",
               "Procedural Programming"
            ]
        }, 
        {
            id: "FIN",
            name: "Finance",
            description: "Excel in financial modelling, investment analysis, risk management, and quantitive finance concepts",
            icon: TrendingUp,
            bgColor: "from-emerald-500/10 to-green-500/10",
            color: "from-emerald-500/10 to-green-500/10",
            skills: [
               "Excel VBA", 
               "Financial Modelling",
               "Investment Analysis",
               "Risk Management"
            ]
        }, 
        {
            id: "ENG",
            name: "Engineering",
            description: "Strengthen your foundation in mechanical, civil, and software engineering principles",
            icon: Settings,
            bgColor: "from-orange-500/10 to-red-500/10",
            color: "from-orange-500 to-red-500",
            skills: [
                "Engineering Design",
                "Principle of Engineering",
                "CAD Design",
                "Circuit Analysis"
            ]
        }
    ];

    const features = [
        {
            icon : Brain,
            title: "AI-Powered Adaptive Learning",
            description: "Machine learning altgorithm that adapt to your learning style",
            color: "blue"
        }, 
        {
            icon: Clock,
            title: "Advanced Analytics Dashboard",
            description: "Real-time insight into your learning progress, and performance metrics",
            color: "purple"
        }, 
        {
            icon: Trophy,
            title: "Personalized Learnig Paths",
            description: "Customized curriculum based on your goals and current skill levels",
            color: "green"
        }, {
            icon: Shield,
            title: "Gamified Experience",
            description: "Earn badges, compete with peers, and track your achievements",
            color: "yellow"
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            {/*Navbar Section*/}
            <Navbar />

            {/*Hero Section*/}
             <motion.section 
                id="hero"
                className="min-h-screen flex items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="mt-10 max-w-6xl mx-auto p-6 flex flex-col items-center justify-center gap-4">
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
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Our Learning
                            <span className="ml-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Sectors
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Dive deep into the most in-demand skills in today's technology-driven world
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {learningSectors.map((sector) => (
                            <div 
                                key={sector.id}
                                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                            >
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${sector.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                                
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 bg-gradient-to-r ${sector.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <sector.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                                        {sector.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {sector.description}
                                    </p>

                                    {/* Skills */}
                                    <div className="mb-8">
                                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                            <Target className="w-5 h-5 text-purple-400" />
                                            Key Skills
                                        </h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {sector.skills.map((skill, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-2 p-3 text-sm bg-gray-800/50 border border-gray-700/50 text-gray-200 rounded-lg hover:bg-gray-700/50 transition-colors"
                                                >
                                                    <div className={`w-2 h-2 bg-gradient-to-r ${sector.color} rounded-full`}></div>
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Link to={"/learn"} className={`w-full bg-gradient-to-r ${sector.color} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg group-hover:scale-105`}>
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Why Choose Us Section */}
            <motion.section 
                id="choose-us"
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-xl">
                    {features.map((badge, index) => (
                        <div
                        key={index}
                        className="flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <badge.icon className={`w-10 h-10 text-${badge.color}-400`} />
                            </div>
                            <div>
                                <h2 className="text-white font-bold text-2xl">
                                    {badge.title}
                                </h2>
                                <p className="text-xl text-white">
                                    {badge.description}
                                </p>
                            </div>
                            
                        </div>   
                    ))}
                </div>
                
                </div>
            </motion.section>
            
            <Footer />

        </div>
    )
}

export default Home;