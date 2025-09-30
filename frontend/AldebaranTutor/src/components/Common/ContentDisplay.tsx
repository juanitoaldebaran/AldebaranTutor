import {  BookOpen } from "lucide-react";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import type { SelectedContent } from "@/types/course";

interface CourseContentProps {
    selectedContent: SelectedContent | null;
    welcomeTitle: string;
    welcomeSubtitle: string;
    onStartQuiz: (level: string) => void;
}

const ContentDisplay: React.FC<CourseContentProps> = ({
    selectedContent,
    welcomeTitle,
    welcomeSubtitle,
}) => {

    if (!selectedContent) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <BookOpen className="text-white"/>
                <h1 className="text-4xl text-white">{welcomeTitle}</h1>
                <p className="text-xl text-gray-400">{welcomeSubtitle}</p>
            </div>
        )
    }

    const {course, section} = selectedContent;
    const Icon = course.icon;

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Header Card */}
            <Card className="border-2 border-gray-800 bg-gray-950">
                <CardHeader>
                <div className="flex items-center gap-3">
                    <div className={`${course.color} p-2 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                    <CardTitle className="text-2xl text-white">{course.title}</CardTitle>
                    <CardDescription className="text-base text-gray-400">{section.name}</CardDescription>
                    </div>
                </div>
                </CardHeader>
            </Card>

            {/* Content Card */}
            <Card className="border border-gray-800 bg-gray-950">
                <CardHeader>
                <CardTitle className="text-white">Learning Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                {section.items.map((item, idx) => (
                    <div 
                    key={idx} 
                    className="flex gap-3 p-4 rounded-lg border border-gray-800 bg-black hover:border-gray-700 transition-colors"
                    >
                    <p className="text-sm text-gray-300">{item}</p>
                    </div>
                ))}
                </CardContent>
            </Card>
      </div>
    )
}

export default ContentDisplay;