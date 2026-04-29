import logo from "../../assets/logo.png";
export default function Logo(classname) {
    return (
        <a href="#home">
            <img
                src={logo}
                alt="Divine Gym Logo"
                className={`w-15 h-15 object-contain ${classname}`}
            />
        </a>

    );
}
