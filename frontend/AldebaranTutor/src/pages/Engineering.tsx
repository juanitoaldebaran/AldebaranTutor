import CADDesign from "@/components/Common/Engineering/CADDesign";
import CircuitAnalysis from "@/components/Common/Engineering/CircuitAnalysis";
import EngineeringDesign from "@/components/Common/Engineering/EngineeringDesign";
import PrincipleEngineering from "@/components/Common/Engineering/PrincipleEngineering";
import EngineeringAppSidebar from "@/components/Common/EngineeringAppSidebar";
import Navbar from "@/components/Common/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";
motion

const Engineering: React.FC = () => {
    const [activeTab, setActiveTab] = useState("ED");

    const renderContent = () => {
        switch (activeTab) {
            case "ED":
                return <EngineeringDesign />;
            case "PE":
                return <PrincipleEngineering />;
            case "CA":
                return <CircuitAnalysis />;
            case "CAD":
                return <CADDesign />;
            default:
                return <p className="text-white text-center">Select Learning Content</p>
        }
    }

    return (
        <div className="min-h-screen">
            <Navbar />

            <motion.section 
                className="min-h-screen px-4 flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <SidebarProvider>
                    <EngineeringAppSidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
                    <div>
                        {renderContent()}
                    </div>
                </SidebarProvider>     
            </motion.section>
        </div>
    )
}

export default Engineering;