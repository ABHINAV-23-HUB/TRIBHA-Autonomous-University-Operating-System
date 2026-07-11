import { useState, useEffect } from "react";
import { getBuildings } from "../../services/buildingService";

const RoomForm = ({ selected, onSubmit }) => {

    const [buildings, setBuildings] = useState([]);

    const [form, setForm] = useState({

        roomName: "",

        roomNumber: "",

        building: "",

        floor: 1,

        capacity: 50,

        roomType: "Classroom",

        status: "Available",

        facilities: ""

    });

    useEffect(() => {

        loadBuildings();

    }, []);

    useEffect(() => {

        if (selected) {

            setForm({

                ...selected,

                building: selected.building?._id || "",

                facilities: selected.facilities.join(",")

            });

        }

    }, [selected]);

    const loadBuildings = async () => {

        const data = await getBuildings();

        setBuildings(data);

    };

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const submit = (e) => {

        e.preventDefault();

        onSubmit({

            ...form,

            facilities: form.facilities
                .split(",")
                .map(item => item.trim())
        });

    };

    return (

        <form
            onSubmit={submit}
            className="bg-white rounded-xl shadow p-6 mb-6 grid grid-cols-2 gap-4"
        >

            <input
                name="roomName"
                placeholder="Room Name"
                value={form.roomName}
                onChange={handleChange}
                className="border p-3 rounded"
            />

            <input
                name="roomNumber"
                placeholder="Room Number"
                value={form.roomNumber}
                onChange={handleChange}
                className="border p-3 rounded"
            />

            <select
                name="building"
                value={form.building}
                onChange={handleChange}
                className="border p-3 rounded"
            >

                <option value="">Select Building</option>

                {

                    buildings.map(item => (

                        <option
                            key={item._id}
                            value={item._id}
                        >

                            {item.buildingName}

                        </option>

                    ))

                }

            </select>

            <input
                type="number"
                name="floor"
                value={form.floor}
                onChange={handleChange}
                className="border p-3 rounded"
            />

            <input
                type="number"
                name="capacity"
                value={form.capacity}
                onChange={handleChange}
                className="border p-3 rounded"
            />

            <select
                name="roomType"
                value={form.roomType}
                onChange={handleChange}
                className="border p-3 rounded"
            >

                <option>Classroom</option>

                <option>Seminar Hall</option>

                <option>Conference Room</option>

                <option>Lab</option>

                <option>Auditorium</option>

            </select>

            <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="border p-3 rounded"
            >

                <option>Available</option>

                <option>Maintenance</option>

            </select>

            <input
                name="facilities"
                placeholder="Projector, AC, WiFi"
                value={form.facilities}
                onChange={handleChange}
                className="border p-3 rounded"
            />

            <button className="col-span-2 bg-blue-600 text-white p-3 rounded">

                Save Room

            </button>

        </form>

    );

};

export default RoomForm;