import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import postRoutes from './src/Routes/posts.js';
const app = express();
const port = 8080;
app.use(bodyParser.json());

app.use('/posts' , postRoutes);

const CONNECTION_URL = 'mongodb+srv://sathish:sathish@123@cluster0.s36tj.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>app.listen(port ,()=>{
    console.log(`Backend is working on port ${port}`);
    })
).catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);
