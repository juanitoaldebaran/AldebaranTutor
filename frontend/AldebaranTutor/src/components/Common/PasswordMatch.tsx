interface PasswordMatchProps {
    type: "success" | "error";
    message: string;
}

const PasswordMatch: React.FC<PasswordMatchProps> = ({type, message}) => {
    const typeClass = {
        "success": "text-green-600",
        "error": "text-red-600"
    }

    return (
        <div className={`${typeClass[type]}`}>
            {message}
        </div>
    )
}

export default PasswordMatch;