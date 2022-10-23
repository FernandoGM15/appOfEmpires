import { Schema, model, Document, Types } from "mongoose";

const CivilizationModel = new Schema({
    name: String,
    expansion:String,
    army_type: String,
    team_bonus: String,
    created_at: {
        type:Date,
        default: Date.now(),
    },
    image: String,
    user:{
        type:Types.ObjectId,
        required: true,
        ref: 'User'
    },
});

interface ICivilization extends Document{
    name: string
    expansion:string
    army_type: string
    team_bonus: string
    image: string,
    created_at: Date,
    user: Types.ObjectId
}

export default model<ICivilization>("Civilization", CivilizationModel);