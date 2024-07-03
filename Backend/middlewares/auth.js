import jwt from "jsonwebtoken";
import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandller from "../utilies/errorHamdler.js";
import { User } from "../models/User.js";



export const isAuthenticate = catchAsyncError(async (req,res,next)=>{
    const {token} = req.cookies;
    if(!token) return next(new ErrorHandller('First login',401));

    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);
    next();
})