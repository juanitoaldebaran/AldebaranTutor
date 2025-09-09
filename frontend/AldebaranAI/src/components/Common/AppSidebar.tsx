import * as React from "react"
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
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import type { ConversationRequest, ConversationResponse } from "@/types/conversation"
import { useEffect } from "react"
import conversationService from "@/services/conversationService"
import { NavUser } from "./NavUser"
import useAuth from "@/hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { Input } from "../ui/input"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    const {user, logout} = useAuth();
    const [conversationList, setConversationList] = useState<ConversationResponse[]>([]);
    const [filteredConversations, setFilteredConversations] = useState<ConversationResponse[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const fetchConversations = async () => {
        setIsLoading(true);
        try {
            const allUserConversations = await conversationService.getUserConversations();
            setConversationList(allUserConversations);
            setFilteredConversations(allUserConversations);
            console.log("Successfully fetch all user conversations");
        } catch (error: any) {
            console.error("Failed to fetch conversations:", error?.response?.data?.message || "Failed to fetch all conversations");
        } finally {
            setIsLoading(false);
        }
    }

    const createNewMessage = async () => {
        setIsLoading(true);
        try {
            const conversationRequest: ConversationRequest = {
                firstMessage: "Hello! I'd like to start a new conversation.",
            };

            const newConversationResponse = await conversationService.createConversation(conversationRequest);
            
            setConversationList(prev => [...prev, newConversationResponse]);
            setFilteredConversations(prev => [...prev, newConversationResponse]);
            
            navigate(`/ai/conversations/${newConversationResponse.conversationId}/messages`);
            
            console.log("Successfully created new conversation and navigated to messages");
        } catch (error: any) {
            console.error("Failed to create new conversation:", error?.response?.data?.message || "Failed to create new message");
        } finally { 
            setIsLoading(false);
        }
    }

    const handleConversationClick = (conversationId: number) => {
        navigate(`/ai/conversations/${conversationId}/messages`);
    }

    const handleSearch = async (term: string) => {
        setSearchTerm(term);
        
        if (!term.trim()) {
            setFilteredConversations(conversationList);
            return;
        }

        try {
            const localFiltered = conversationList.filter(conversation =>
                conversation.name.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredConversations(localFiltered);
        } catch (error: any) {
            console.error("Search failed:", error?.message);
            const localFiltered = conversationList.filter(conversation =>
                conversation.name.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredConversations(localFiltered);
        }
    }

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    useEffect(() => {
        fetchConversations();
    }, []);

    useEffect(() => {
        handleSearch(searchTerm);
    }, [searchTerm, conversationList]);

    return (
        <Sidebar {...props}>
        <SidebarHeader className="border-b">
            <div className="flex flex-col justify-center gap-6 p-2">
                <div className="flex flex-col">
                    <h1 className="font-semibold text-2xl">
                        AldebaranAI
                    </h1>
                    <p className="font-light text-xs">
                        Your Best AI Assistant
                    </p>
                </div>
                <div className="relative space-x-2">
                    <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-2"></FontAwesomeIcon>
                    <Input
                        id="searchTerm"
                        name="searchTerm"
                        type="text"
                        placeholder="Search conversations..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8"
                    />
                </div>
                <Button 
                    className="cursor-pointer" 
                    onClick={createNewMessage}
                    disabled={isLoading}
                >
                    {isLoading ? "Creating..." : "New Message"}
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
                        {isLoading && conversationList.length === 0 ? (
                            <div className="px-2 py-4 text-center text-sm">
                                Loading conversations...
                            </div>
                        ) : (filteredConversations.length === 0 ? (
                            <div className="px-2 py-4 text-center text-sm">
                                {searchTerm ? `No conversations found for "${searchTerm}"` : "No conversations on your list"}
                            </div>
                        ) : (
                            filteredConversations.map((conversation) => (
                            <SidebarMenuItem key={conversation.conversationId}>
                                <SidebarMenuButton
                                    onClick={() => handleConversationClick(conversation.conversationId)}
                                    className="cursor-pointer hover:bg-gray-100"
                                >
                                    <span className="truncate">
                                        {conversation.name}
                                    </span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            {user && <NavUser user={user} logout={handleLogout}></NavUser>}
        </SidebarFooter>
        <SidebarRail />
        </Sidebar>
    )
}