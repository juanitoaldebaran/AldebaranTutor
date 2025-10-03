import ExcelVBA from "@/components/Common/Finance/ExcelVBA";
import FinancialModelling from "@/components/Common/Finance/FinancialModelling";
import InvestmentAnalysis from "@/components/Common/Finance/InvestmentAnalysis";
import RiskManagement from "@/components/Common/Finance/RiskManagement";
import FinanceAppSidebar from "@/components/Common/FinanceAppSidebar";
import Navbar from "@/components/Common/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";
motion

const Finance: React.FC = () => {
    const [activeTab, setActiveTab] = useState("VBA");

    const renderContent = () => {
        switch (activeTab) {
            case "VBA":
                return <ExcelVBA />;
            case "IA":
                return <InvestmentAnalysis />;
            case "FM":
                return <FinancialModelling />;
            case "RM":
                return <RiskManagement />;
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
                    <FinanceAppSidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
                    <div>
                        {renderContent()}
                    </div>
                </SidebarProvider>     
            </motion.section>
        </div>
    )
}

export default Finance;