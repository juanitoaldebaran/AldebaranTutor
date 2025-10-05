import { Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import {  ArrowUpToLine, ChartArea, CircuitBoard, Pencil } from "lucide-react";

const engineering = [
    {
        id: "ED",
        title: "Engineering Design",
        icon: ChartArea,
    },
    {
        id: "PE",
        title: "Principle Engineering",
        icon: Pencil,
    },
    {
        id: "CA",
        title: "Circuit Analysis",
        icon: CircuitBoard,
    },
    {
        id: "CAD",
        title: "CAD Design",
        icon: ArrowUpToLine
    }
];

interface SetActiveTabProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const EngineeringAppSidebar: React.FC<SetActiveTabProps> = ({activeTab, setActiveTab}) => {
    return (
       <Sidebar>
        <SidebarContent className="text-white bg-black">
         <SidebarGroup>
            <SidebarMenu className="flex gap-12 pt-16">
                    {engineering.map((eng) => (
                        <SidebarMenuItem key={eng.id} className="mt-4">
                            <button onClick={() => setActiveTab(eng.id)} className={`w-full flex items-center justify-between text-left py-8 px-6 gap-10 cursor-pointer  ${eng.id === activeTab ? "bg-indigo-600 duration-200 cursor-pointer rounded-lg" : "hover:bg-indigo-600 rounded-lg duration-200"}`}>
                                <span>{eng.title}</span>
                                <eng.icon />
                            </button>
                        </SidebarMenuItem>
                    ))}
            </SidebarMenu>
         </SidebarGroup>
        </SidebarContent>
       </Sidebar>
    )
}

export default EngineeringAppSidebar;