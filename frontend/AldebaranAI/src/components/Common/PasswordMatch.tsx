interface PasswordMatchProps {
    type: "success" | "error";
    message: string;
}

const PasswordMatch: React.FC<PasswordMatchProps> = ({type, message}) => {
    const baseClass = "mt-1";
    const typeClass = {
        "success": "text-green-600",
        "error": "text-red-600"
    }

    return (
        <div className={`${baseClass} ${typeClass[type]}`}>
            {message}
        </div>
    )
}

export default PasswordMatch;