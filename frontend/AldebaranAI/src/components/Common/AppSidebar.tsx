import * as React from "react"

import { SearchForm } from "./SearchForm"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import type { ConversationRequest, ConversationResponse } from "@/types/conversation"
import { useEffect } from "react"
import conversationService from "@/services/conversationService"
import { NavUser } from "./NavUser"
import useAuth from "@/hooks/useAuth"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    const {user} = useAuth();
    const [newConversation, setNewConversation] = useState<ConversationRequest>({
        firstMessage: "",
    });
    const [conversationList, setConversationList] = useState<ConversationResponse[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchConversations = async () => {
            setIsLoading(true);
            try {
                const allUserConversations = await conversationService.getUserConversations();
                setConversationList(allUserConversations);
                console.log("Successfully fetch all user conversations");
            } catch (error: any) {
                throw new Error(error?.response?.data?.message || "Failed to fetch all conversations");
            } finally {
                setIsLoading(false);
            }
    }

    const createNewMessage = async () => {
            setIsLoading(true);
            try {
                const newConversationResponse = await conversationService.createConversation(newConversation);
                setConversationList(prev => [...prev, newConversationResponse]);
                setNewConversation({
                    firstMessage: "",
                });
                console.log("Successfully create new conversation");
            } catch (error: any) {
                throw new Error(error?.response?.data?.message || "Failed to create new message");
            } finally { 
                setIsLoading(false);
            }
        }

    useEffect(() => {
        createNewMessage();
        fetchConversations();
    }, []);

    return (
        <Sidebar {...props}>
        <SidebarHeader>
            <div className="flex flex-col jusfity-center gap-6 p-2">
                <h1 className="font-semibold text-2xl">
                    AldebaranAI
                </h1>
                <SearchForm />
                <Button className="cursor-pointer">
                    New Message
                <FontAwesomeIcon icon={faPlus}/>
                </Button>
            </div>
        </SidebarHeader>
        <SidebarContent className="gap-0">
            <SidebarGroup>
                <SidebarGroupLabel className="text-sm font-light">
                    Conversations
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {conversationList.map((conversations) => (
                            <SidebarMenuItem key={conversations.conversationId}>
                                <SidebarMenuButton asChild>

                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            {user && <NavUser user={user}></NavUser>}
        </SidebarFooter>
        <SidebarRail />
        </Sidebar>
    )
}
