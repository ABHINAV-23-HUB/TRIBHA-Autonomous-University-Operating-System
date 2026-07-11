import {
    FaHome,
    FaUsers,
    FaBuilding,
    FaDoorOpen,
    FaCalendarAlt,
    FaClipboardList,
    FaChartBar,
    FaUserCircle
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Sidebar = () => {

    const menus = [
        {
            name: "Dashboard",
            icon: <FaHome />,
            path: "/admin"
        },
        {
            name: "Users",
            icon: <FaUsers />,
            path: "/admin/users"
        },
        {
            name: "Buildings",
            icon: <FaBuilding />,
            path: "/admin/buildings"
        },
        {
            name: "Rooms",
            icon: <FaDoorOpen />,
            path: "/admin/rooms"
        },
        {
            name: "Bookings",
            icon: <FaClipboardList />,
            path: "/admin/bookings"
        },
        {
            name: "Events",
            icon: <FaCalendarAlt />,
            path: "/admin/events"
        },
        {
            name: "Reports",
            icon: <FaChartBar />,
            path: "/admin/reports"
        },
        {
            name: "Profile",
            icon: <FaUserCircle />,
            path: "/admin/profile"
        }
    ];

    return (

        <div className="w-64 bg-slate-900 text-white min-h-screen">

            <div className="text-2xl font-bold text-center py-6 border-b">

                Campus EMS

            </div>

            <div className="mt-6">

                {

                    menus.map((menu) => (

                        <Link
                            key={menu.path}
                            to={menu.path}
                            className="flex items-center gap-4 px-6 py-4 hover:bg-blue-600 transition"
                        >
                            {menu.icon}
                            {menu.name}
                        </Link>

                    ))

                }

            </div>

        </div>

    );

};

export default Sidebar;