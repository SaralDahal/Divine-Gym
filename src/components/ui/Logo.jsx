import logo from "../../assets/logo.png";
export default function Logo({ className }) {
    return (
        <a href="#home">
            <img
                src={logo}
                alt="Divine Gym Logo"
                className={`w-12 h-12 object-contain ${className}`}
            />
        </a>

    );
}
