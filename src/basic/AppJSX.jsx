import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function AppJSX() {
    const [count, setCount] = useState(0);
    const name = "Woody";
    const list = ["우유", "딸기", "바나나"];

    return (
        <>
            <h1 className='orange'>{`Hello! ${name}`}</h1>
            <ul>
                {list.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default AppJSX;
