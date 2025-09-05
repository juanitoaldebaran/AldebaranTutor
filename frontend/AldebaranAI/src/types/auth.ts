export interface User {
    id: number;
    userName: string;
    email: string;
    password: string;
    userType: "BASIC" | "PRO" | "PREMIUM"; 
    createdAt: number;
    isActive: boolean;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    userName: string;
    email: string;
    password: string;
}


export interface RegisterRequst {
    userName: string;
    email: string;
    password: string;
    userType: "BASIC" | "PRO" | "PREMIUM";
}

export interface UserResponse {
    userName: string;
    email: string;
    createdAt: number;
}

export interface LoginResponse {
    jwtToken: string;
    expiresIn: number;
    userResponse: UserResponse;
}

export interface AuthContextType {
    user: UserResponse | null;
    login: (loginRequest: LoginRequest) => Promise<LoginResponse>;
    register: (registerRequest: RegisterRequest) => Promise<UserResponse>;
    getJwtToken: () => string | null;
    logout: () => void;
    isAuthenticated: boolean;
}