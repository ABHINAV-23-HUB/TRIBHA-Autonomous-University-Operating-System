const BuildingTable = ({ buildings, onEdit, onDelete }) => {

    return (

        <table className="w-full bg-white shadow rounded">

            <thead>

                <tr className="bg-slate-200">

                    <th>Name</th>

                    <th>Code</th>

                    <th>Floors</th>

                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {

                    buildings.map((item) => (

                        <tr
                            key={item._id}
                            className="text-center border-b"
                        >

                            <td>{item.buildingName}</td>

                            <td>{item.code}</td>

                            <td>{item.floors}</td>

                            <td>

                                <button
                                    onClick={() => onEdit(item)}
                                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                                >

                                    Edit

                                </button>

                                <button
                                    onClick={() => onDelete(item._id)}
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

export default BuildingTable;