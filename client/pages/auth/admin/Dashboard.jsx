import { useEffect, useState } from "react";

import AdminLayout from "../../layouts/AdminLayout";

import StatCard from "../../components/cards/StatCard";

import api from "../../utils/axios";

const Dashboard = () => {

    const [data, setData] = useState({});

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const res = await api.get("/dashboard/admin");

            setData(res.data.dashboard);

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <AdminLayout>

            <div className="grid grid-cols-3 gap-6">

                <StatCard
                    title="Users"
                    value={data.totalUsers || 0}
                />

                <StatCard
                    title="Buildings"
                    value={data.totalBuildings || 0}
                />

                <StatCard
                    title="Rooms"
                    value={data.totalRooms || 0}
                />

                <StatCard
                    title="Bookings"
                    value={data.totalBookings || 0}
                />

                <StatCard
                    title="Events"
                    value={data.totalEvents || 0}
                />

                <StatCard
                    title="Registrations"
                    value={data.totalRegistrations || 0}
                />

            </div>

        </AdminLayout>

    );

};

export default Dashboard;