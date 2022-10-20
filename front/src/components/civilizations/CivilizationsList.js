import { Link } from "react-router-dom";
import { useDeleteCivilizationMutation, useGetCivilizationsQuery } from "../../services/civilizationService";

const CivilizationsList = () => {

    const { data, isLoading } = useGetCivilizationsQuery();

    const [deleteCivilization] = useDeleteCivilizationMutation();

    if (isLoading) {
        return <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    
    const HandleDelete = async (id) => {
        await deleteCivilization(id);
    }

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
                            data.map((civilization) => {
                                return (
                                    <tr key={civilization._id}>
                                        <td>{civilization.name}</td>
                                        <td>{civilization.expansion}</td>
                                        <td>{civilization.army_type}</td>
                                        <td>{civilization.team_bonus}</td>
                                        <td className="text-center" width="12%">
                                            <Link className="btn btn-primary me-2 ms-2" to={`/update-civilization/${civilization._id}`}><i class="fa-solid fa-pencil"></i></Link>
                                            <button className="btn btn-danger me-2 ms-2" onClick={() => HandleDelete(civilization._id)}><i class="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CivilizationsList;