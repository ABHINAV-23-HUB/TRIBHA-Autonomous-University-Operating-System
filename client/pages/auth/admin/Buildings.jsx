import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import AdminLayout from "../../layouts/AdminLayout";

import BuildingForm from "../../components/forms/BuildingForm";
import BuildingTable from "../../components/tables/BuildingTable";

import {
    getBuildings,
    createBuilding,
    updateBuilding,
    deleteBuilding
} from "../../services/buildingService";

const Buildings = () => {

    const [buildings, setBuildings] = useState([]);

    const [selected, setSelected] = useState(null);

    const loadBuildings = async () => {

        const data = await getBuildings();

        setBuildings(data);

    };

    useEffect(() => {

        loadBuildings();

    }, []);

    const handleSubmit = async (form) => {

        try {

            if (selected) {

                await updateBuilding(selected._id, form);

                toast.success("Building Updated");

            } else {

                await createBuilding(form);

                toast.success("Building Added");

            }

            setSelected(null);

            loadBuildings();

        } catch (err) {

            toast.error("Operation Failed");

        }

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this building?")) return;

        await deleteBuilding(id);

        toast.success("Deleted");

        loadBuildings();

    };

    return (

        <AdminLayout>

            <BuildingForm

                onSubmit={handleSubmit}

                selected={selected}

            />

            <BuildingTable

                buildings={buildings}

                onEdit={setSelected}

                onDelete={handleDelete}

            />

        </AdminLayout>

    );

};

export default Buildings;