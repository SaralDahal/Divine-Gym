import { NAV_ITEMS } from "../constants/navItems";
import Button from "../ui/Button";

export default function MobileMenu({ open }) {
    if (!open) return null;

    return (
        <div className="lg:hidden border-t border-gray-800 px-6 pt-3 pb-5 space-y-3 bg-black/95">
            {NAV_ITEMS.map(item => (
                <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-white py-2"
                >
                    {item}
                </a>
            ))}

            <Button className="w-full bg-gradient-to-r from-red-700 to-red-500 py-3">
                Join Now
            </Button>
        </div>
    );
}
