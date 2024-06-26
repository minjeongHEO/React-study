import React, { useState } from "react";

export default function AppForm() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    const [form, setForm] = useState({ name: "", email: "" });
    const handleSubmit = e => {
        e.preventDefault();
    };
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setForm({ ...form, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>이름:</label>
            <input
                type='text'
                id='name'
                name='name'
                value={form.name}
                onChange={handleChange}
                // onChange={e => {
                //     setName(e.target.value);
                // }}
            ></input>
            <label htmlFor='email'>이메일:</label>
            <input type='email' id='email' name='email' value={form.email} onChange={handleChange}></input>
            <button>Submit</button>
        </form>
    );
}
