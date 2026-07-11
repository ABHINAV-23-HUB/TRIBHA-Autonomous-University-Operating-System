import { useState, useEffect } from "react";

const BuildingForm = ({ onSubmit, selected }) => {

    const [form, setForm] = useState({
        buildingName: "",
        code: "",
        floors: 1,
        description: ""
    });

    useEffect(() => {

        if (selected) {

            setForm(selected);

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
            className="bg-white rounded-xl shadow p-6 mb-6"
        >

            <h2 className="text-xl font-bold mb-5">

                {selected ? "Update Building" : "Add Building"}

            </h2>

            <input
                name="buildingName"
                placeholder="Building Name"
                className="border p-3 w-full mb-4 rounded"
                value={form.buildingName}
                onChange={handleChange}
            />

            <input
                name="code"
                placeholder="Code"
                className="border p-3 w-full mb-4 rounded"
                value={form.code}
                onChange={handleChange}
            />

            <input
                type="number"
                name="floors"
                placeholder="Floors"
                className="border p-3 w-full mb-4 rounded"
                value={form.floors}
                onChange={handleChange}
            />

            <textarea
                name="description"
                placeholder="Description"
                className="border p-3 w-full mb-4 rounded"
                value={form.description}
                onChange={handleChange}
            />

            <button className="bg-blue-600 text-white px-6 py-3 rounded">

                Save

            </button>

        </form>

    );

};

export default BuildingForm;