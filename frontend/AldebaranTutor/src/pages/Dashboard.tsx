import Navbar from "@/components/Common/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useAuth from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { Brain, Rocket, Trophy } from "lucide-react";
import type React from "react";

const Dashboard: React.FC = () => {
    const {user} = useAuth();

    return (
        <div className="min-h-screen">   
            {/*Navbar*/}
            <Navbar />

            {/*Dashboard Content*/}
            <motion.section 
                id="hero"
                className="min-h-screen px-4 flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                    <div className="flex px-4 gap-2 mt-24">
                        <h1 className="text-white font-bold text-4xl">
                            Learning Progress 📈
                        </h1>
                        <span className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30 text-purple-300 px-4 py-2 rounded-lg">
                            {user?.email}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 cursor-pointer">
                        <Card className="w-full bg-gradient-to-r from-emerald-100/10 to-green-500/10 border-gray-800 hover:scale-102 duration-200">
                            <CardHeader>
                                <CardTitle className="flex justify-between text-white">
                                    Course Started 
                                    <Brain className="w-10 h-10 bg-gradient-to-r from-emerald-500/10 to-green-500/10 text-white rounded-lg p-2"/>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                    <div>
                                        <h1 className="text-white font-bold text-[24px]">
                                            0
                                        </h1>
                                    </div>
                            </CardContent>
                        </Card>
                        <Card className="border-gray-800 hover:scale-102 duration-200 bg-gradient-to-r from-orange-500 to-red-500">
                            <CardHeader>
                                <CardTitle className="flex justify-between text-white">
                                    Total Points
                                    <Trophy className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-2" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                    <div>
                                        <h1 className="text-white font-bold text-[24px]">
                                            0
                                        </h1>
                                    </div>
                            </CardContent>
                        </Card>
                        <Card className="border-gray-800 hover:scale-102 duration-200 bg-gradient-to-r from-blue-500 to-cyan-500 ">
                            <CardHeader>
                                <CardTitle className="flex justify-between text-white">
                                    Day Streak
                                    <Rocket className="w-10 h-10 text-white rounded-lg p-2 bg-gradient-to-r from-blue-500 to-cyan-500"/>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                    <div>
                                        <h1 className="text-white text-[24px] font-bold">
                                            0
                                        </h1>
                                    </div>
                            </CardContent> 
                        </Card>
                    </div>
            </motion.section>
        </div>
    )
}

export default Dashboard;