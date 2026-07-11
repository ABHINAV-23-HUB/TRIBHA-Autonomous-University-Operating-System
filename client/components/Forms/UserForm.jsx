import { useState, useEffect } from "react";

const UserForm = ({ selected, onSubmit }) => {

    const [form, setForm] = useState({

        name: "",

        email: "",

        password: "",

        role: "Student"

    });

    useEffect(() => {

        if (selected) {

            setForm({

                name: selected.name,

                email: selected.email,

                password: "",

                role: selected.role

            });

        }

    }, [selected]);

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    return (

        <form

            onSubmit={(e) => {

                e.preventDefault();

                onSubmit(form);

            }}

            className="bg-white shadow rounded-xl p-6 mb-6"

        >

            <h2 className="text-2xl font-bold mb-5">

                {selected ? "Edit User" : "Add User"}

            </h2>

            <input

                name="name"

                placeholder="Full Name"

                className="border p-3 rounded w-full mb-4"

                value={form.name}

                onChange={handleChange}

            />

            <input

                name="email"

                placeholder="Email"

                className="border p-3 rounded w-full mb-4"

                value={form.email}

                onChange={handleChange}

            />

            {

                !selected && (

                    <input

                        type="password"

                        name="password"

                        placeholder="Password"

                        className="border p-3 rounded w-full mb-4"

                        value={form.password}

                        onChange={handleChange}

                    />

                )

            }

            <select

                name="role"

                className="border p-3 rounded w-full mb-4"

                value={form.role}

                onChange={handleChange}

            >

                <option>Student</option>

                <option>Faculty</option>

                <option>Admin</option>

            </select>

            <button className="bg-blue-600 text-white px-6 py-3 rounded">

                Save User

            </button>

        </form>

    );

};

export default UserForm;