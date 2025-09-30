import Navbar from "@/components/Common/Navbar";
import type React from "react";
import { motion } from "framer-motion";
import useAuth from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { Code, Settings, TrendingUp } from "lucide-react";
import Footer from "@/components/Common/Footer";


const Learn: React.FC = () => {
    const {user} = useAuth();

    const sectors = [
        {
            id: "IT",
            name: "Information Technology",
            icon: Code,
            bgColor: "from-blue-500/10 to-cyan-500/10",
            color: "from-blue-500 to-cyan-500",
            link: "learn/it",
            description: "Master algorithms, system designs, data structures and programming fundamentals with AI-powered adaptive learning",
            skills: [
                "Data Strutures and Algorithms",
                "System Design",
                "AI/ML",
                "Procedural Programming"
            ]
        },
        {
            id: "Finance",
            name: "Finance",
            icon: TrendingUp,
            bgColor: "from-emerald-500/10 to-green-500/10",
            color: "from-emerald-500/10 to-green-500/10",
            link: "learn/finance",
            description: "Excel in financial modelling, investment analysis, risk management, and quantitive finance concepts",
            skills: [
               "Excel VBA", 
               "Financial Modelling",
               "Investment Analysis",
               "Risk Management"
            ]
        },
        {
            id: "Engineering",
            name: "Engineering",
            icon: Settings,
            bgColor: "from-orange-500/10 to-red-500/10",
            color: "from-orange-500 to-red-500",
            link: "learn/engineering",
            description: "Strengthen your foundation in mechanical, civil, software engineering principles and design model",
            skills: [
                "Engineering Design",
                "Principle of Engineering",
                "CAD Design",
                "Circuit Analysis"
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            {/*Navbar User*/}
            <Navbar />

            {/*Hero Section*/}
             <motion.section 
                id="hero"
                className="min-h-screen"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-6xl mx-auto p-6 flex flex-col items-center justify-center gap-4">
                    <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30 text-purple-300 px-4 py-2 rounded-lg mt-20">
                        👋🏽 Let's Continue Your Journey!
                    </span>
                    <h1 className="text-[50px] text-center text-white font-bold">
                        Welcome Back!
                    </h1>
                    <span className="text-center text-[46px] block font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {user?.userName.toUpperCase()}
                    </span>
                    <h3 className="font-light text-center text-white text-3xl font-bold">
                        What do you want to learn today?
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                        {sectors.map((sector) => (
                            <div
                            key={sector.id}
                            className={`group relative rounded-lg p-8 gap-4 bg-gradient-to-r ${sector.bgColor} hover:scale-105 duration-200 cursor-pointer border-1`}
                            >   
                             {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${sector.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className="relative z-10">

                                    <div className={`w-16 h-16 bg-gradient-to-r ${sector.bgColor} rounded-lg hover:scale-102 mb-8 flex items-center justify-center`}>
                                        <sector.icon className="w-8 h-8 text-white"/>
                                    </div>

                                    <h1 className="text-white font-bold text-2xl">
                                        {sector.name}
                                    </h1>

                                    <h3 className="text-white text-sm mt-4">
                                        {sector.description}
                                    </h3>

                                   <div className="grid grid-cols-1 gap-4 mt-10">
                                        {sector.skills.map((skill) => (
                                            <div className={`bg-gray-900/50 border-b-1 p-4 rounded-lg hover:bg-gradient-to-r ${sector.bgColor} duration-200`}>
                                                <p className="text-white">
                                                    🎯 {skill}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-10">
                                       <Link to={`/${sector.link}`} className={`bg-gradient-to-r ${sector.bgColor} p-4 rounded-lg mt-4 text-white`}>
                                        Start Learning
                                       </Link>  
                                    </div>
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

export default Learn;