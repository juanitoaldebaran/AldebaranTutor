import Navbar from "@/components/Common/Navbar";
import type React from "react";

const ITQuiz: React.FC = () => {

    return (
        <div className="min-h-screen">
            <Navbar />
            
            <div className="min-h-screen">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-white font-bold mt-28 text-3xl">
                        Information Technology Quiz
                    </h1>
                    <p className="text-white">
                        Practice your knowledge with industry level test
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ITQuiz;