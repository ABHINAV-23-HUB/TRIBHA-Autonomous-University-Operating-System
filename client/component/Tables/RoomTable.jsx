const RoomTable = ({ rooms, onEdit, onDelete }) => {

    return (

        <table className="w-full bg-white shadow rounded">

            <thead className="bg-slate-200">

                <tr>

                    <th>Name</th>

                    <th>Number</th>

                    <th>Building</th>

                    <th>Capacity</th>

                    <th>Status</th>

                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {

                    rooms.map(room => (

                        <tr
                            key={room._id}
                            className="border-b text-center"
                        >

                            <td>{room.roomName}</td>

                            <td>{room.roomNumber}</td>

                            <td>{room.building?.buildingName}</td>

                            <td>{room.capacity}</td>

                            <td>{room.status}</td>

                            <td>

                                <button
                                    onClick={() => onEdit(room)}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                                >

                                    Edit

                                </button>

                                <button
                                    onClick={() => onDelete(room._id)}
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

export default RoomTable;