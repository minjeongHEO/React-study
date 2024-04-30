import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function TodoList({ items, deleteItem, changeCheckBox }) {
    if (!items || items.length === 0) return null;

    return (
        <>
            {items.map(activeItem => (
                <li key={activeItem.id}>
                    <input type='checkbox' id={activeItem.id} value={activeItem.value} onChange={changeCheckBox} />
                    <span>{activeItem.value}</span>
                    <FaTrashAlt onClick={() => deleteItem(activeItem.id)} />
                </li>
            ))}
        </>
    );
}
