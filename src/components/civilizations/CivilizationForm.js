import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCivilizationsQuery, useStoreCivilizationMutation, useShowCivilizationQuery, useUpdateCivilizationMutation } from "../../services/civilizationService";

const CivilizationForm = () => {

    const params = useParams();

    const [addCivilization] = useStoreCivilizationMutation();

    const {data, isLoading} = useShowCivilizationQuery(params.id);
    
    const [updateCivilization] = useUpdateCivilizationMutation();

    const navigate = useNavigate();

    const initialState = {
        "name": "",
        "expansion": "",
        "army_type": "",
        "team_bonus": ""
    }

    const [civilization, setCivilization] = useState(initialState);

    useEffect(()=>{
        if(data){
            setCivilization(data);
        }
    },[isLoading])

    const handleChange = (e) => {
        setCivilization({
            ...civilization,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(params.id){
            await updateCivilization(civilization).unwrap();
        }
        else{
            await addCivilization(civilization).unwrap();
        }
        navigate("/civilizations");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" onChange={handleChange} id="name" value={civilization.name} />
                </div>
                <div className="col-3">
                    <label className="form-label">Expansion</label>
                    <input className="form-control" onChange={handleChange} id="expansion" value={civilization.expansion} />
                </div>
                <div className="col-3">
                    <label className="form-label">Army Type</label>
                    <input className="form-control" onChange={handleChange} id="army_type" value={civilization.army_type} />
                </div>
                <div className="col-3">
                    <label className="form-label">Team Bonus</label>
                    <input className="form-control" onChange={handleChange} id="team_bonus" value={civilization.team_bonus} />
                </div>
            </div>
            <div className="row mt-3 d-flex justify-content-end">
                <div className="col-auto">
                    <button className="btn btn-success" onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default CivilizationForm;