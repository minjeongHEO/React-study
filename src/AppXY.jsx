import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const movePointerXY = (e) => {
        console.log(e);
        setX(e.clientX);
        setY(e.clientY);
    };
    return (
        <div className="container" onPointerMove={movePointerXY}>
            <div
                className="pointer"
                style={{ transform: `translate(${x}px, ${y}px)` }}
            ></div>
        </div>
    );
}
