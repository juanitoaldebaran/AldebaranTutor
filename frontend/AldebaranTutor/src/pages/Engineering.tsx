import CollapsibleSidebar from "@/components/Common/CollapsibleSidebar";
import ContentDisplay from "@/components/Common/ContentDisplay";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import { engineeringCourses } from "@/data/financeCourses";
import type { Course, Section, SelectedContent } from "@/types/course";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
motion

const Engineering: React.FC = () => {
     const [selectedContent, setSelectedContent] = useState<SelectedContent | null>(null);

    const handleSectionSelect = ( course: Course, section: Section,) => {
        setSelectedContent({course, section})
    };

    const handleStartQuiz = () => {

    };

    return (
        <div className="min-h-screen">
            <Navbar />

             <motion.section 
                id="hero"
                className="min-h-screen pt-20 pb-10 flex flex-col items-center justify-center" 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
                    <h1 className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mt-10 text-4xl font-bold">
                        Engineering
                    </h1>

                    <h3 className="text-white text-2xl text-center mb-10">
                       Learn the fundamental and advanced concepts of modern engineering.
                    </h3>

                    <span className="inline-block bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                        ⚙️ Focused on: Mechanical Engineering, Electrial Engineering, Civil Engineering, Computer Engineering
                    </span>

                    <Link to={"/quiz/engineering"} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white p-3 rounded-lg">
                        Start Quiz Now 🚀
                    </Link>
                </div>

                <div className="flex items-center min-h-[calc(100vh-200px)] max-w-7xl p-4 rounded-lg bg-black border-1 mt-10">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1 className="text-white text-3xl">
                            Select Learning Modules
                        </h1>
                        <CollapsibleSidebar 
                        courses={engineeringCourses}
                        onSectionSelect={handleSectionSelect}
                        />
                    </div>
                    <div>
                        <ScrollArea className="h-full">
                        <motion.div 
                            className="p-4 sm:p-8"
                            key={selectedContent ? selectedContent.section.name : "welcome"}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ContentDisplay
                                selectedContent={selectedContent}
                                welcomeTitle="Start Your Engineering Journey"
                                welcomeSubtitle="Select a topic from the sidebar to view the curriculum."
                                onStartQuiz={handleStartQuiz}
                            />
                        </motion.div>
                    </ScrollArea>
                    </div>
                </div>
               
            </motion.section>

            <Footer />
        </div>
    )
}

export default Engineering;