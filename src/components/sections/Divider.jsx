export default function Divider() {
    return (
        <div className="relative w-full" style={{ height: 60 }}>
            <div style={{
                width: 0, height: 0,
                borderBottom: "60px solid #982716",
                borderRight: "100vw solid transparent",
            }} />
            <svg className="absolute top-0 left-0" width="100%" height="60" viewBox="0 0 1000 60" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="1000" y2="60" stroke="white" strokeWidth="6" />
            </svg>
        </div>
    );
}
