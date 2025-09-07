import React from "react";
import { AppSidebar } from "@/components/Common/AppSidebar";
import { ChatInterface } from "@/components/Common/ChatInterface"; // Adjust path as needed
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

const Home: React.FC = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="flex flex-col overflow-hidden">
                <ChatInterface/>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default Home;