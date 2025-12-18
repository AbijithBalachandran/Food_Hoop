
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors'
import cookieParser from 'cookie-parser';


const app = express();

// Handling middlwares ===========

app.use(cors({
  origin: process.env.FRONT_END_URL,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'))

// connecting database ==========

mongoose.connect("mongodb://127.0.0.1:27017/foodhop_user_management")
.then(()=>console.log('Mongodb connected'))
.catch((err)=>console.log('Error from mongodb connection',err));

// Routers =====================

import user_router from './routes/user.router';
import vendor_router from './routes/vendor.router';
import admin_router from './routes/admin.router';
import delivery_router from './routes/delivery.router';
import authRouter from './routes/auth.router';

app.use('/',user_router);
app.use('/vendor',vendor_router);
app.use('/admin',admin_router);
app.use('/delivery',delivery_router);
app.use('/auth',authRouter);
// starting server  =============


app.listen(5000,()=>{
    console.log(process.env.VITE_BACKEND_URL)
});

