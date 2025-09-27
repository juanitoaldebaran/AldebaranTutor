import { Award,  Globe, Shield, Star } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        
        <footer className="relative border-t border-gray-800 bg-gray-900/30 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 py-16">

            <div className="text-center mb-12">

                <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    AldebaranTutor
                    </h3>
                    <p className="text-sm text-gray-400">AI-Powered Learning Platform</p>
                </div>
                </div>

                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Empowering the next generation of tech professionals through intelligent, 
                adaptive learning experiences in Computer Science, Finance, and Engineering.
                </p>

                <div className="mb-12">
                <Link 
                    to={"/learn"}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 group"
                >
                    Start Learning
                </Link>
                </div>

                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    
                    <div className="text-sm text-gray-400">
                        © 2025 AldebaranTutor. Revolutionizing education through AI.
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Shield className="w-4 h-4 text-green-400" />
                        Secure & Private
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Globe className="w-4 h-4 text-blue-400" />
                        Global Access
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Award className="w-4 h-4 text-yellow-400" />
                        Industry Certified
                        </div>
                    </div>
                    </div>
                </div>


                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent">
                </div>
                </div>

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
        </footer>
    )
};

export default Footer;