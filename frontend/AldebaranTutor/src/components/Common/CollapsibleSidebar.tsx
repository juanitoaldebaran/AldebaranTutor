import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { CollapsibleTrigger } from "../ui/collapsible";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

interface Section {
    name: string;
    items: string[];
}

interface Course {
    id: number;
    title: string;
    icon: any;
    color: string;
    sections: Section[];
}

interface CourseSidebarProps {
    courses: Course[];
    onSectionSelect: (course: Course, section: Section) => void;
}


const CollapsibleSidebar: React.FC<CourseSidebarProps> = ({courses, onSectionSelect}) => {
    return (
        <div className="w-100 rounded-lg border-r border-gray-800 bg-black">
            <ScrollArea className="h-full">
                <div className="p-4">

                    <div className="space-y-2">
                        {courses.map((course) => {
                            const Icon = course.icon;

                            return (
                                <Collapsible key={course.id}>
                                    <CollapsibleTrigger asChild>
                                        <Button
                                        variant="ghost"
                                        className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
                                        >
                                            <Icon className="mr-2 h-4 w-4"></Icon>
                                            <span className="flex-1 text-left">{course.title}</span>
                                            <ChevronRight className="h-4 w-4 transition-transform data-[state=open]:rotate-90"/>
                                        </Button>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent>
                                        {course.sections.map((section, idx) => (
                                            <Button
                                            key={idx}
                                            variant="ghost"
                                            size="sm"
                                            className="w-full justify-start text-sm text-gray-400 hover:text-white hover:bg-gray-900"
                                            onClick={() => onSectionSelect(course, section)}
                                            >
                                                {section.name}
                                            </Button>
                                        ))}
                                    </CollapsibleContent>
                                </Collapsible>
                            )
                        })}
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}

export default CollapsibleSidebar;