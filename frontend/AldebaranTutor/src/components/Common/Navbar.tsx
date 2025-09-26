import useAuth from "@/hooks/useAuth";
import type React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const navLinks = [
    {
        "name": "Start Learning",
        "pathname": "/learn"
    }
];

const Navbar: React.FC = () => {

    const {user, isAuthenticated} = useAuth();

    return (
        <div className="fixed z-50 w-full bg-black">
            <div className="flex p-6 items-center justify-between text-white">
                {/*Logo AldebaranTutor*/}
                <h1 className="font-light text-[28px]">
                    AldebaranTutor
                </h1>
                
                <div className="flex items-center justify-center gap-2">
                    <ul>
                        {navLinks.map((link) => (
                            <li
                            key={link.name}
                            >
                                <NavLink 
                                to={link.pathname}
                                className={`font-light relative py-2 px-3 w-0 hover:border-b-2 w-full duration-100 bg-gray-700"`}
                                >
                                {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {isAuthenticated ? (
                        <div>
                            <Link 
                            to={"/login"}
                            />
                        </div>
                    ) : (
                        <div className="bg-white text-white p-4">
                            {user?.email}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;