export default function Button({ children, className = "" }) {
    return (
        <button className={`font-bold transition-all ${className}`}>
            {children}
        </button>
    );
}
