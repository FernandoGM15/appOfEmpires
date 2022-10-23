import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

const UserModel = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
}, {
    timestamps: true
});

interface IUser extends Document {
    name: string,
    email: string,
    password: string,
    encryptPassword(password:string):Promise<string>,
    validatePassword(password:string):Promise<string> 
}

UserModel.methods.encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

UserModel.methods.validatePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
}

export default model<IUser>("User", UserModel);