import AIMachineLearning from "@/components/Common/IT/AIMachineLearning";
import DataStructure from "@/components/Common/IT/DataStructures";
import ProceduralProgramming from "@/components/Common/IT/ProceduralProgramming";
import SystemDesign from "@/components/Common/IT/SystemDesign";
import ITAppSidebar from "@/components/Common/ITAppSidebar";
import Navbar from "@/components/Common/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";
motion

const IT: React.FC = () => {
    const [activeTab, setActiveTab] = useState("DSA");

    const renderContent = () => {
        switch (activeTab) {
            case "DSA":
                return <DataStructure />;
            case "SD":
                return <SystemDesign />;
            case "AI/ML":
                return <AIMachineLearning />;
            case "PP":
                return <ProceduralProgramming />;
            default:
                return <p className="text-white text-center">Select Learning Content</p>
        }
    }

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            <motion.section 
                className="min-h-screen px-4 flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <SidebarProvider>
                    <ITAppSidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
                    <div>
                        {renderContent()}
                    </div>
                </SidebarProvider>     
            </motion.section>
        </div>
    )
}

export default IT;  