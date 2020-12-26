import mongoose from 'mongoose';

const RegisterSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    createdAt:{
        type:Date,
        default:new Date()
    }

});



export const PostSchema = mongoose.model('PostSchema',RegisterSchema);


