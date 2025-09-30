import Navbar from "@/components/Common/Navbar";
import { motion } from "framer-motion";
import type React from "react";
motion

const ChatAI: React.FC = () => {
    return (
        <div>
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
                <div className="max-w-6xl mx-auto p-6 flex flex-col items-center justify-center gap-4 mt-24">
                    <h1 className="text-white font-bold text-4xl">
                        Chat with Our AI
                    </h1>
                </div>
            </motion.section>
        </div>
    )
}

export default ChatAI;
