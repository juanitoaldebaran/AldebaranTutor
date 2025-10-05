import AIChatbot from "@/components/Common/AIChatbot";
import Navbar from "@/components/Common/Navbar";
import { motion } from "framer-motion";
import type React from "react";
motion

const ChatAI: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/*Navbar*/}
            <Navbar />

            {/*Hero Section*/}
             <motion.section 
                id="hero"
                className="min-h-screen flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
               <AIChatbot />
            </motion.section>
        </div>
    )
}

export default ChatAI;
