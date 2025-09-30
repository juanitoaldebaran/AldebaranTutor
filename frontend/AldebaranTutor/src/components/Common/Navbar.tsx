import useAuth from "@/hooks/useAuth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import type React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {  LogOut } from "lucide-react";

const navLinks = [
    {
        name: "Start Learning",
        pathname: "/learn",
    },
    {
        name: "Progress",
        pathname: "/dashboard",
    },
    {
        name: "Quiz",
        dropdownItems: [
            {
                label: "IT Quiz", pathname: "/quiz/it",
            },
            {
                label: "Finance Quiz", pathname: "/quiz/finance",
            },
            {
                label: "Engineering Quiz", pathname: "/quiz/engineering",
            }
        ]
    },
    {
        name: "Chat with AI",
        pathname: "/ai"
    }
];

const Navbar: React.FC = () => {

    const {user, isAuthenticated, logout} = useAuth();

    return (
        <div className="fixed z-50 w-full bg-black">
            <div className="flex p-4 items-center justify-between text-white">
                {/*Logo AldebaranTutor*/}
                <Link to={"/"} className="font-light text-[28px]">
                    AldebaranTutor
                </Link>
                
                <div className="flex items-center justify-center gap-2">
                    {isAuthenticated ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="text-white cursor-pointer">{user?.userName.charAt(0)}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="flex flex-col gap-2 mt-2">
                                <DropdownMenuLabel>
                                    {user?.email}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={logout}>
                                    <div className="flex gap-2">
                                        Logout
                                        <LogOut />
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div>
                            <Link 
                            to={"/login"}
                            className="w-0 py-2 px-3 hover:border-b-2 w-full duration-100"
                            >
                                Create an account
                            </Link>
                        </div>
                    )}
                    <ul className="flex items-center gap-2">
                        {navLinks.map((link) => (
                            <li
                            key={link.name}
                            >
                               {link.dropdownItems ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                        variant="ghost"
                                        className="cursor-pointer font-light text-lg py-2 px-3 text-white hover:bg-indigo-600 hover:text-white"
                                        >
                                            {link.name}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        {link.dropdownItems.map((item) => (
                                            <DropdownMenuItem key={item.label} asChild>
                                                <NavLink
                                                to={item.pathname}
                                                className="block w-full text-left py-2 px-3 text-gray-300 rounded-lg hover:bg-indigo-600 hover:text-white transition-all"
                                                >
                                                    {item.label}
                                                </NavLink>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                               ) : (
                                <NavLink 
                                to={link.pathname} 
                                className={({isActive}) => `cursor-pointer font-light py-2 px-3 text-gray-300 transition-colors duration-200 ${isActive ? 'bg-indigo-600 rounded-lg text-white' : 'text-gray-300 rounded-lg hover:text-white hover:bg-indigo-600'}`}
                                >
                                    {link.name}
                                </NavLink>
                               )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;