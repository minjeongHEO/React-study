import { useMemo, useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar.jsx";
import Counter from "./components/Counter.jsx";
import Profile from "./components/Profile.jsx";

function AppCounter() {
    const [totalCount, setTotalCount] = useState(0);
    const setOnClick = () => {
        setTotalCount(prev => prev + 1);
    };
    return (
        <>
            <div className='container'>
                <div className='banner'>
                    total Count: {totalCount} {totalCount > 10 ? "💥" : "🧊"}
                </div>
                <div className='counters'>
                    <Counter totalCount={totalCount} setOnClick={setOnClick} />
                    <Counter totalCount={totalCount} setOnClick={setOnClick} />
                </div>
            </div>
        </>
    );
}

export default AppCounter;
