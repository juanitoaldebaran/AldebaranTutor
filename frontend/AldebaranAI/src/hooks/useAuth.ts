import authService from "@/services/authService";
import { useEffect, useState } from "react"
import type { AuthContextType, LoginRequest, LoginResponse, RegisterRequest, UserResponse } from "@/types/auth";

const useAuth = (): AuthContextType => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<UserResponse | null>(null);

    useEffect(() => {
        const jwtToken = authService.getJwtToken();
        const storedUser = localStorage.getItem("user");

        if (storedUser && jwtToken) {
            try {
                const parsedUser = JSON.parse(storedUser) as UserResponse;
                setIsAuthenticated(true);
                setUser(parsedUser);
            } catch (error) {
                console.error("Error parsing stored user", error);
                localStorage.removeItem("user");
                localStorage.removeItem("jwtToken");
                setIsAuthenticated(false);
                setUser(null);
            }
        } else {
            localStorage.removeItem("user");
            localStorage.removeItem("jwtToken");
            setIsAuthenticated(false);
            setUser(null);
        }
    }, []);

    const login =  async (loginRequest: LoginRequest): Promise<LoginResponse> => {
        try {
            const response: LoginResponse = await authService.loginUser(loginRequest);

            if (response.jwtToken) {
                localStorage.setItem("jwtToken", response.jwtToken);
            }

            if (response.userResponse) {
                setIsAuthenticated(true);
                setUser(response.userResponse);
                localStorage.setItem("user", JSON.stringify(response.userResponse));
            }

            return response;
        } catch (error: any) {
            setIsAuthenticated(false);
            setUser(null);
            throw error;
        }
    }
    
    const register = async (registerRequest: RegisterRequest): Promise<UserResponse> => {
        try {
            const response: UserResponse = await authService.registerUser(registerRequest);
            return response;
        } catch (error: any) {
            setIsAuthenticated(false);
            setUser(null);
            throw error;
        }
    }

    const logout = () => {
        console.log("Logging out user");
        authService.logout();
        localStorage.removeItem("user");
        localStorage.removeItem("jwtToken");
        setIsAuthenticated(false);
        setUser(null);
    }

    const getJwtToken = (): string | null => {
        return authService.getJwtToken();
    }

    return {
        login,
        register,
        logout,
        getJwtToken,
        isAuthenticated,
        user
    }
};

export default useAuth;