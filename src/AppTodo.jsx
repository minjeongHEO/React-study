import React, { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import "./AppTodo.css";

export default function AppTodo() {
    const [todoItem, setTodoItem] = useState({ active: [], completed: [] });
    const [filterType, setFilterType] = useState("All");
    const [form, setForm] = useState("");

    const showByFilter = e => {
        const targetText = e.target.textContent;
        setFilterType(targetText);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setTodoItem(prev => ({ ...prev, active: [...prev.active, form] }));
    };

    function handleChange({ target }) {
        setForm(target.value);
    }
    return (
        <div className='container'>
            <nav>
                <CgDarkMode />
                <span onClick={showByFilter}>All</span>
                <span onClick={showByFilter}>Active</span>
                <span onClick={showByFilter}>Completed</span>
            </nav>
            <main>
                <ul>
                    {todoItem.active.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
                <form onSubmit={handleSubmit}>
                    <input type='text' id='text' name='text' onChange={handleChange} value={form}></input>
                    <button>Add</button>
                </form>
            </main>
        </div>
    );
}
