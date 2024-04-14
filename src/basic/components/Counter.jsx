import React, { useState } from "react";

export default function Counter({ totalCount, setOnClick }) {
    const [count, setCount] = useState(0);

    return (
        <div className='counter'>
            <p className='number'>
                {count} <span className='total'>/{totalCount}</span>
            </p>
            <button
                className='button'
                onClick={() => {
                    setCount(prev => prev + 1);
                    setOnClick();
                }}
            >
                Add +
            </button>
        </div>
    );
}
