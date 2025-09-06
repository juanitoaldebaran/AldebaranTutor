import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { LoginRequest } from "@/types/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useNotification from "@/hooks/useNotification";
import Notification from "@/components/Common/Notification";
import useAuth from "@/hooks/useAuth";
import LoadingSpinner from "@/components/Common/LoadingSpinner";

const Login: React.FC = () => {
    const [loginData, setLoginData] = useState<LoginRequest>({
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    const {notification, showNotification, hideNotification} = useNotification();
    const [isLoading, setIsLoading] = useState(false);
    const {login} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const fromPath = location.state?.fromPath?.pathname || "/ai/conversations";
    const isFormValid = loginData.email && loginData.password;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(loginData.email)) {
            showNotification("Please input a valid email address", "warning");
            return;
        }

        if (!isFormValid) {
            showNotification("Please check required field", "warning");
            return;
        }
        
        setIsLoading(true);
        try {
            await login(loginData);
            showNotification("Login successfully, redirect to main page", "success");
            console.log("User successfully logged in");
            setTimeout(() => {
                navigate(fromPath, { replace: true })
            }, 2000);
        } catch (error: any) {
            showNotification("Failed to login to your account", "error");
            console.error(error?.response?.data?.message || "Failed to login to account");
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <div className="min-h-screen w-full bg-black flex items-center justify-center">
            <Card className="w-full max-w-sm bg-white">
            <CardHeader className="text-center">
                 <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Input 
                            id="email"
                            name="email"
                            type="email"
                            value={loginData.email}
                            placeholder="Email"
                            onChange={handleChange}
                            >
                            </Input>
                        </div>
                        <div className="grid gap-2">
                          <div className="flex relative">
                                <Input 
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={loginData.password}
                                    placeholder="Password"
                                    onChange={handleChange}
                                    >
                                </Input>
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2">
                                    {showPassword ? <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> : <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>}
                                </button>
                            </div>
                        </div>
                        <Button type="submit" className="mt-2" disabled={!isFormValid}>
                            {isLoading ? <LoadingSpinner/> : "Login"}
                        </Button>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col justify-center items-center space-y-4">
                <div className="flex space-x-2">
                    <p className="text-sm">Don't have an account?</p>
                    <Link className="underline text-sm" to={"/register"}>
                        Sign Up
                    </Link>
                </div>
            </CardFooter>
        </Card>
        
         <Notification
            message={notification.message}
            type={notification.type}
            isVisible={notification.isVisible}
            onClose={hideNotification}
            duration={1000}
            position="top-right"
        >
        </Notification>
        </div>
    )
}

export default Login;