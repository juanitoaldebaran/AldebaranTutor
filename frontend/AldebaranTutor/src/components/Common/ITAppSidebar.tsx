import { Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import { Bot, Code, Database, DatabaseZap } from "lucide-react";

const tech = [
    {
        id: "DSA",
        title: "Data Structures",
        icon: Code,
    },
    {
        id: "SD",
        title: "System Design",
        url: "/learn/it/system-design",
        icon: Database,
    },
    {
        id: "AI/ML",
        title: "AI/ML",
        icon: Bot,
    },
    {
        id: "PP",
        title: "Procedural Programming",
        icon: DatabaseZap
    }
];

interface SetActiveTabProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const ITAppSidebar: React.FC<SetActiveTabProps> = ({activeTab, setActiveTab}) => {
    return (
       <Sidebar>
        <SidebarContent className="text-white bg-black">
         <SidebarGroup>
            <SidebarMenu className="flex gap-12 pt-16">
                    {tech.map((tech) => (
                        <SidebarMenuItem key={tech.id} className="mt-4">
                            <button onClick={() => setActiveTab(tech.id)} className={`w-full flex items-center justify-between text-left py-8 px-6 gap-10 cursor-pointer  ${tech.id === activeTab ? "bg-indigo-600 duration-200 cursor-pointer rounded-lg" : "hover:bg-indigo-600 rounded-lg duration-200"}`}>
                                <span>{tech.title}</span>
                                <tech.icon />
                            </button>
                        </SidebarMenuItem>
                    ))}
            </SidebarMenu>
         </SidebarGroup>
        </SidebarContent>
       </Sidebar>
    )
}

export default ITAppSidebar;