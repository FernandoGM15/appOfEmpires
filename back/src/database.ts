import {connect} from "mongoose";

const connection = async ()=>{
    await connect("mongodb://localhost/appOfEmpires");
    console.log("Database is connected");
}

export default connection;
