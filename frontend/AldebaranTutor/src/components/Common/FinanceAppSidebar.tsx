import { Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import {  Brain, DollarSign, DollarSignIcon, File } from "lucide-react";

const financeItems = [
    {
        id: "VBA",
        title: "Excel VBA",
        url: "/learn/finance/excelvba",
        icon: DollarSign,
    },
    {
        id: "IA",
        title: "Investment Analysis",
        url: "/learn/finance/investmentanalysis",
        icon: DollarSignIcon,
    },
    {
        id: "FM",
        title: "Financial Modelling",
        url: "/learn/finance/financialmodelling",
        icon: File,
    },
    {
        id: "RM",
        title: "Risk Management",
        url: "/learn/finance/riskmanagement",
        icon: Brain
    }
];

interface SetActiveTabProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const FinanceAppSidebar: React.FC<SetActiveTabProps> = ({activeTab, setActiveTab}) => {
    return (
       <Sidebar>
        <SidebarContent className="text-white bg-black">
         <SidebarGroup>
            <SidebarMenu className="flex gap-12 pt-16">
                    {financeItems.map((finance) => (
                        <SidebarMenuItem key={finance.id} className="mt-4">
                            <button onClick={() => setActiveTab(finance.id)} className={`w-full flex items-center justify-between text-left py-8 px-6 gap-10 cursor-pointer  ${finance.id === activeTab ? "bg-indigo-600 duration-200 cursor-pointer rounded-lg" : "hover:bg-indigo-600 rounded-lg duration-200"}`}>
                                <span>{finance.title}</span>
                                <finance.icon />
                            </button>
                        </SidebarMenuItem>
                    ))}
            </SidebarMenu>
         </SidebarGroup>
        </SidebarContent>
       </Sidebar>
    )
}

export default FinanceAppSidebar;