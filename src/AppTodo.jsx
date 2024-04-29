import React, { useRef, useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { FaTrashAlt } from "react-icons/fa";
import "./AppTodo.css";

export default function AppTodo() {
    const [todoItem, setTodoItem] = useState({ active: [], completed: [] });
    const [filterType, setFilterType] = useState("All");
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
        setInput("");
    };

    const toCompleted = (targetId, targetValue) => {
        setTodoItem(prev => ({
            active: prev.active.filter(({ id }) => id !== targetId),
            completed: [...prev.completed, { id: targetId, value: targetValue }],
        }));
    };
    const toActive = (targetId, targetValue) => {
        setTodoItem(prev => ({
            active: [...prev.active, { id: targetId, value: targetValue }],
            completed: prev.completed.filter(({ id }) => id !== targetId),
        }));
    };

    // 체크박스
    const changeCheckBox = ({ target }) => {
        const targetId = target.id;
        const targetValue = target.value;
        if (target.checked) toCompleted(targetId, targetValue);
        if (!target.checked) toActive(targetId, targetValue);
    };

    const deleteItem = targetId => {
        if (todoItem.active.some(({ id }) => id === targetId)) {
            setTodoItem(prev => ({ ...prev, active: prev.active.filter(({ id }) => id !== targetId) }));
            return;
        }

        setTodoItem(prev => ({ ...prev, completed: prev.completed.filter(({ id }) => id !== targetId) }));
    };

    const activeEnter = ({ key }) => {
        if (key === "Enter") addTodoList();
    };

    return (
        <div className='container'>
            <nav>
                <CgDarkMode />
                <span onClick={showByFilter} className={filterType === "All" ? "selected" : undefined}>
                    All
                </span>
                <span onClick={showByFilter} className={filterType === "Active" ? "selected" : undefined}>
                    Active
                </span>
                <span onClick={showByFilter} className={filterType === "Completed" ? "selected" : undefined}>
                    Completed
                </span>
            </nav>
            <main>
                <ul>
                    {(filterType === "All" || filterType === "Active") &&
                        todoItem.active.map(activeItem => (
                            <li key={activeItem.id}>
                                <input type='checkbox' id={activeItem.id} value={activeItem.value} onChange={changeCheckBox} />
                                <span>{activeItem.value}</span>
                                <FaTrashAlt onClick={() => deleteItem(activeItem.id)} />
                            </li>
                        ))}
                    {(filterType === "All" || filterType === "Completed") &&
                        todoItem.completed.map(completedItem => (
                            <li key={completedItem.id}>
                                <input type='checkbox' id={completedItem.id} value={completedItem.value} onChange={changeCheckBox} checked />
                                <span className='strike-through'>{completedItem.value}</span>
                                <FaTrashAlt onClick={() => deleteItem(completedItem.id)} />
                            </li>
                        ))}
                </ul>

                <input type='text' name='text' onChange={handleChange} value={input} onKeyDown={e => activeEnter(e)}></input>
                <button onClick={addTodoList}>Add</button>
            </main>
        </div>
    );
}
