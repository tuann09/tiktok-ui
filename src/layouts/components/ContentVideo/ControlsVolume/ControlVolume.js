import { useState } from "react";
function ControlVolume() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                position: "relative",
                width: 24,
                height: 24,
                cursor: "pointer",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} // Xóa phần tử DOM
        >
            {/* Icon loa luôn hiện */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M3 9v6h4l5 5V4L7 9H3z" />
            </svg>

            {/* Khi isHovered true thì thêm icon âm lượng (thêm phần tử DOM) */}
            {isHovered && (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                >
                    <path d="M3 9v6h4l5 5V4L7 9H3z" />
                    <path
                        d="M16 7a4 4 0 010 10"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                    />
                </svg>
            )}
        </div>
    );
}

export default ControlVolume;
