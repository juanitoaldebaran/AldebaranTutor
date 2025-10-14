import useAuth from "@/hooks/useAuth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import type React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { LogOut, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    {
        name: "Career Predictor",
        pathname: "/careerpredictor"
    },
    {
        name: "Learn",
        pathname: "/learn",
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
        pathname: "/ai/chat"
    }
];

const Navbar: React.FC = () => {

    const {user, isAuthenticated, logout} = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 w-full shadow-lg border-b-2 border-gray-900/50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-black"}`}>    
            <div className="flex p-4 items-center justify-between text-white">
                <Link to={"/"} className="font-light text-[28px]">
                    AldebaranTutor
                </Link>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>
                
                {/* Desktop navbar */}
                <div className="hidden md:flex items-center justify-center gap-2">
                    {isAuthenticated ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="text-white cursor-pointer">{user?.userName.charAt(0)}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="flex flex-col gap-2 mt-2 bg-gray-900 border border-gray-700 rounded-lg p-2 z-50">
                                <DropdownMenuLabel className="text-white px-2">
                                    {user?.email}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-gray-700 h-px" />
                                <DropdownMenuItem onClick={logout} className="cursor-pointer text-white hover:bg-indigo-600 rounded px-2 py-1">
                                    <div className="flex gap-2 items-center">
                                        Logout
                                        <LogOut size={16} />
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div>
                            <Link 
                            to={"/login"}
                            className="py-2 px-3 hover:border-b-2 duration-100"
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
                                    <DropdownMenuContent className="bg-gray-900 border border-gray-700 rounded-lg p-2 mt-2 z-50">
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


            {/* Mobile navbar */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col p-6 border-gray-300 bg-gray-950 gap-3 duration-300">
                     {navLinks.map((link) =>
                        link.dropdownItems ? (
                        <div key={link.name} className="flex flex-col gap-1">
                            <span className="font-semibold text-gray-200">
                            {link.name}
                            </span>
                            {link.dropdownItems.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.pathname}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="pl-4 py-1 text-gray-400 hover:text-white"
                            >
                                {item.label}
                            </NavLink>
                            ))}
                        </div>
                        ) : (
                        <NavLink
                            key={link.name}
                            to={link.pathname}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="py-2 text-gray-300 hover:text-white"
                        >
                            {link.name}
                        </NavLink>
                        )
                    )}

                    {isAuthenticated ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="text-white cursor-pointer w-10 h-10 rounded-full">{user?.userName.charAt(0)}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="flex flex-col gap-2 mt-2 bg-gray-900 border border-gray-700 rounded-lg p-2 z-50">
                                <DropdownMenuLabel className="text-white px-2 ">
                                    {user?.email}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-gray-700 h-px" />
                                <DropdownMenuItem onClick={logout} className="cursor-pointer text-white hover:bg-indigo-600 rounded px-2 py-1">
                                    <div className="flex gap-2 items-center">
                                        Logout
                                        <LogOut size={16} />
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div>
                            <Link 
                            to={"/login"}
                            className="py-2 px-3 duration-100 text-gray-300 hover:text-white"
                            >
                                Create an account
                            </Link>
                        </div>
                    )}
                </div>      
            )}
        </nav>
    )
}

export default Navbar;