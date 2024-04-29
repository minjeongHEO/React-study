import React, { useRef, useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { FaTrashAlt } from "react-icons/fa";
import "./AppTodo.css";

export default function AppTodo() {
    const [todoItem, setTodoItem] = useState({ active: [], completed: [] });
    const [filterType, setFilterType] = useState("All");
    const [form, setForm] = useState({ id: "", value: "" });
    const [input, setInput] = useState("");

    const showByFilter = e => {
        const targetText = e.target.textContent;
        setFilterType(targetText);
    };

    const handleChange = ({ target }) => {
        const { value } = target;
        setInput(value);
    };

    // 랜덤id생성
    const randomId = () => {
        return new Date().getTime().toString();
    };

    // Add
    const addTodoList = () => {
        const id = randomId();
        setTodoItem(prev => ({ ...prev, active: [...prev.active, { id, value: input }] }));
    };

    // 체크박스
    const changeCheckBox = () => {
        // setTodoItem(prev => ({ ...prev, active: [...prev.active, form] }));
    };

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
                    {todoItem.active.map(todoItem => (
                        <li key={todoItem.id}>
                            <input type='checkbox' onChange={changeCheckBox} />
                            {todoItem.value}
                            <FaTrashAlt />
                        </li>
                    ))}
                </ul>

                <input type='text' name='text' onChange={handleChange} value={input}></input>
                <button onClick={addTodoList}>Add</button>
            </main>
        </div>
    );
}
