import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const movePointerXY = (e) => {
        // setPosition({ x: e.clientX, y: e.clientY });
        //만약 수평으로만 이동이 가능하다면?
        //1. y축은 유지하고 x만 업데이트
        //2. 이전 좌표값을 받아서 사용
        //     (이때 객체를 return할 때는 객체를 소괄호()로 묶어줘야한다.
        //      코드블럭인지 객체를 나타내는건지 구분이 안가므로)

        setPosition((prev) => ({ x: e.clientX, y: prev.y }));
        // spread연산자를 사용할 수도있다.
        // prev값 중에 'x'만 원하는 값으로 덮어씌우면된다.
        setPosition((prev) => ({ ...prev, x: e.clientX }));
    };
    return (
        <div className="container" onPointerMove={movePointerXY}>
            <div
                className="pointer"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            ></div>
        </div>
    );
}
