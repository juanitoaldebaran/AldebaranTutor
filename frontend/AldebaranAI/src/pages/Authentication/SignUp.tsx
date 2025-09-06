import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { RegisterRequest } from "@/types/auth";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useNotification from "@/hooks/useNotification";
import Notification from "@/components/Common/Notification";
import useAuth from "@/hooks/useAuth";
import LoadingSpinner from "@/components/Common/LoadingSpinner";
import PasswordMatch from "@/components/Common/PasswordMatch";

const SignUp: React.FC = () => {
    const [signUpData, setSignUpData] = useState<RegisterRequest>({
        userName: "",
        email: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { notification, showNotification, hideNotification } = useNotification();
    const [isLoading, setIsLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const fromPath = location.state?.fromPath?.pathname || "/login";
    
    const isFormValid = signUpData.email && signUpData.password && signUpData.userName && confirmPassword;
    const isPasswordMatch = signUpData.password && confirmPassword && signUpData.password === confirmPassword;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignUpData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!signUpData.userName.trim()) {
            showNotification("Please enter a username", "warning");
            return;
        }

        if (!signUpData.email.trim()) {
            showNotification("Please enter an email address", "warning");
            return;
        }

        if (!signUpData.password) {
            showNotification("Please enter a password", "warning");
            return;
        }

        if (!confirmPassword) {
            showNotification("Please confirm your password", "warning");
            return;
        }

        if (signUpData.password !== confirmPassword) {
            showNotification("Passwords don't match", "warning");
            return;
        }

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(signUpData.email)) {
            showNotification("Please enter a valid email address", "warning");
            return;
        }

        setIsLoading(true);
        try {
            console.log("Attempting to register user:", signUpData);
            await register(signUpData);
            showNotification("Account successfully created", "success");
            console.log("User successfully registered");
            setTimeout(() => {
                navigate(fromPath, { replace: true });
            }, 2000);
        } catch (error: any) {
            showNotification("Failed to create an account", "error");
            console.error("Registration error:", error?.message || "Failed to register account");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen w-full bg-black flex justify-center items-center">
            <Card className="w-full max-w-sm bg-white">
                <CardHeader className="text-center">
                    <CardTitle>Sign Up</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Input 
                                    id="userName"
                                    name="userName"
                                    type="text"
                                    value={signUpData.userName}
                                    placeholder="Username"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Input 
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={signUpData.email}
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex relative">
                                    <Input 
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={signUpData.password}
                                        placeholder="Password"
                                        onChange={handleChange}
                                    />
                                    <button 
                                        type="button" 
                                        onClick={() => setShowPassword(!showPassword)} 
                                        className="absolute right-2 top-2"
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                                    </button>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                {confirmPassword && (
                                    <PasswordMatch 
                                        message={isPasswordMatch ? "Password match" : "Password do not match"} 
                                        type={isPasswordMatch ? "success" : "error"}
                                    />
                                )}
                                <div className="flex relative">
                                    <Input 
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        placeholder="Confirm Password"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <button 
                                        type="button" 
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                                        className="absolute right-2 top-2"
                                    >
                                        <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Button 
                            type="submit" 
                            disabled={!isFormValid || !isPasswordMatch || isLoading} 
                            className="mt-6 w-full"
                        >
                            {isLoading ? <LoadingSpinner /> : "Sign Up"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col justify-center items-center space-y-4">
                    <div className="flex space-x-2">
                        <p className="text-sm">Already have an account?</p>
                        <Link className="text-black underline text-sm" to={"/login"}>
                            Login
                        </Link>
                    </div>
                </CardFooter>
            </Card>

            <Notification
                message={notification.message}
                type={notification.type}
                isVisible={notification.isVisible}
                onClose={hideNotification}
                duration={3000}
                position="top-right"
            />
        </div>
    )
}

export default SignUp;