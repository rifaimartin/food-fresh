import mongoose from 'mongoose'
import normalize from 'normalize-mongoose';
const {Schema} = mongoose;

const EmployeModel = new Schema({
    _id: {type: Schema.ObjectId, auto: true},
    fullname: {type: String, required: true},
    lastname: {type: String, required: true},
    address: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true},
    city: {type: String, required: true},
    createdAt: {type: Date},
    updateAt: {type: Date}
});

EmployeModel.plugin(normalize);
const Employe = mongoose.model('employe', EmployeModel);
export default Employe;
