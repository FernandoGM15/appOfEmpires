import { Link } from "react-router-dom";

const UniqueUnitList = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-auto">
                    <Link className="btn btn-success" to="/create-civilization">Add new civilization</Link>
                </div>
            </div>
            <div className="row mt-3">
                <table className="table table-bordered text-light bg-dark">
                    <thead className="text-center">
                        <tr>
                            <th>Name</th>
                            <th>Expansion</th>
                            <th>Army type</th>
                            <th>Team Bonus</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // data.map((civilization) => {
                            //     return (
                            //         <tr key={civilization.id}>
                            //             <td>{civilization.name}</td>
                            //             <td>{civilization.expansion}</td>
                            //             <td>{civilization.army_type}</td>
                            //             <td>{civilization.team_bonus}</td>
                            //             <td width="15%">
                            //                 <Link className="btn btn-primary me-2 ms-2" to={`/update-civilization/${civilization.id}`}>Update</Link>
                            //                 <button className="btn btn-danger me-2 ms-2" onClick={() => HandleDelete(civilization.id)}>Delete</button>
                            //             </td>
                            //         </tr>
                            //     )
                            // })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UniqueUnitList;