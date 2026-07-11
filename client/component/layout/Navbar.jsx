import { useAuth } from "../../context/AuthContext";

const Navbar = () => {

    const { user, logout } = useAuth();

    return (

        <div className="bg-white shadow px-8 py-4 flex justify-between items-center">

            <h1 className="text-2xl font-bold">

                Admin Dashboard

            </h1>

            <div className="flex items-center gap-5">

                <span>

                    {user?.name}

                </span>

                <button

                    onClick={logout}

                    className="bg-red-500 text-white px-4 py-2 rounded"

                >

                    Logout

                </button>

            </div>

        </div>

    );

};

export default Navbar;