import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import AdminLayout from "../../layouts/AdminLayout";
import RoomForm from "../../components/forms/RoomForm";
import RoomTable from "../../components/tables/RoomTable";

import {
    getRooms,
    createRoom,
    updateRoom,
    deleteRoom
} from "../../services/roomService";

const Rooms = () => {

    const [rooms, setRooms] = useState([]);

    const [selected, setSelected] = useState(null);

    const loadRooms = async () => {

        const data = await getRooms();

        setRooms(data);

    };

    useEffect(() => {

        loadRooms();

    }, []);

    const handleSubmit = async (form) => {

        try {

            if (selected) {

                await updateRoom(selected._id, form);

                toast.success("Room Updated");

            } else {

                await createRoom(form);

                toast.success("Room Added");

            }

            setSelected(null);

            loadRooms();

        } catch {

            toast.error("Operation Failed");

        }

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this room?")) return;

        await deleteRoom(id);

        toast.success("Room Deleted");

        loadRooms();

    };

    return (

        <AdminLayout>

            <RoomForm
                selected={selected}
                onSubmit={handleSubmit}
            />

            <RoomTable
                rooms={rooms}
                onEdit={setSelected}
                onDelete={handleDelete}
            />

        </AdminLayout>

    );

};

export default Rooms;