import type { LoginRequest, LoginResponse, RegisterRequest, UserResponse } from "@/types/auth";
import api from "@/config/api";

async function registerUser(registerRequest: RegisterRequest): Promise<UserResponse> {
    try {
        console.log("Registering user:", registerRequest);
        const response = await api.post("/register", registerRequest);
        console.log("User successfully registered:", response.data);
        return response.data;
    } catch (error: any) {
        console.error("Registration failed:", error?.response?.data);
        throw new Error(error?.response?.data?.message || "Failed to register user");
    }
}

async function loginUser(loginRequest: LoginRequest): Promise<LoginResponse> {
    try {
        console.log("Logging in user:", loginRequest.email);
        const response = await api.post("/login", loginRequest);
        console.log("Raw login response:", response.data);

        let loginResponse: LoginResponse;

        if (response.data.jwtToken || response.data.token) {
            loginResponse = {
                jwtToken: response.data.jwtToken || response.data.token,
                expiresIn: response.data.expiresIn || 3600,
                userResponse: response.data.userResponse || response.data.user
            };
        } else {
            loginResponse = response.data;
        }

        console.log("Processed login response:", loginResponse);
        console.log("Login has been successful");
        
        return loginResponse;
    } catch (error: any) {
        console.error("Login failed:", error?.response?.data);
        throw new Error(error?.response?.data?.message || "Failed to login user");
    }
}

function getJwtToken(): string | null {
    try {
        const jwtToken = localStorage.getItem("jwtToken");
        return jwtToken;
    } catch (error: any) {
        console.error("Error getting JWT token:", error);
        return null;
    }
}

function logout(): void {
    try {
        localStorage.removeItem("user");
        localStorage.removeItem("jwtToken");
        console.log("User logged out from the server");
    } catch (error: any) {
        console.error("Logout error:", error);
    }
}

function isAuthenticated(): boolean {
    try {
        const jwtToken = getJwtToken();
        return jwtToken != null;
    } catch (error: any) {
        console.error("Error checking authentication:", error);
        return false;
    }
}

export default {
    registerUser,
    loginUser,
    getJwtToken,
    logout,
    isAuthenticated
}