import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import AdminLayout from "../../layouts/AdminLayout";

import UserForm from "../../components/forms/UserForm";
import UserTable from "../../components/tables/UserTable";

import {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "../../services/userService";

const Users = () => {

    const [users, setUsers] = useState([]);

    const [selected, setSelected] = useState(null);

    const loadUsers = async () => {

        const data = await getUsers();

        setUsers(data);

    };

    useEffect(() => {

        loadUsers();

    }, []);

    const handleSubmit = async (form) => {

        try {

            if (selected) {

                await updateUser(selected._id, form);

                toast.success("User Updated");

            }

            else {

                await createUser(form);

                toast.success("User Created");

            }

            setSelected(null);

            loadUsers();

        }

        catch {

            toast.error("Operation Failed");

        }

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete User?")) return;

        await deleteUser(id);

        toast.success("User Deleted");

        loadUsers();

    };

    return (

        <AdminLayout>

            <UserForm

                selected={selected}

                onSubmit={handleSubmit}

            />

            <UserTable

                users={users}

                onEdit={setSelected}

                onDelete={handleDelete}

            />

        </AdminLayout>

    );

};

export default Users;