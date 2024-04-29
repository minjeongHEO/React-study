import React, { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import "./AppTodo.css";

export default function AppTodo() {
    return (
        <div className='container'>
            <nav>
                <CgDarkMode />
                <span>All</span>
                <span>Active</span>
                <span>Completed</span>
            </nav>
            <main>
                <ul>
                    <li>할일 목록들</li>
                    <li>할일 목록들</li>
                    <li>할일 목록들</li>
                </ul>
                <div>
                    <input type='email' id='email' name='email'></input>
                    <button>Add</button>
                </div>
            </main>
        </div>
    );
}
