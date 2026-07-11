const UserTable = ({ users, onEdit, onDelete }) => {

    return (

        <table className="w-full bg-white shadow rounded">

            <thead className="bg-slate-200">

                <tr>

                    <th>Name</th>

                    <th>Email</th>

                    <th>Role</th>

                    <th>Status</th>

                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {

                    users.map(user => (

                        <tr

                            key={user._id}

                            className="border-b text-center"

                        >

                            <td>{user.name}</td>

                            <td>{user.email}</td>

                            <td>{user.role}</td>

                            <td>

                                <span className="bg-green-500 text-white px-2 py-1 rounded">

                                    Active

                                </span>

                            </td>

                            <td>

                                <button

                                    onClick={() => onEdit(user)}

                                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"

                                >

                                    Edit

                                </button>

                                <button

                                    onClick={() => onDelete(user._id)}

                                    className="bg-red-600 text-white px-3 py-1 rounded"

                                >

                                    Delete

                                </button>

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

};

export default UserTable;