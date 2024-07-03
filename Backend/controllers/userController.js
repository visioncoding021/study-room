import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandller from "../utilies/errorHamdler.js";
import {User} from "../models/User.js"
import { sendToken } from "../utilies/sendToken.js";
import { sendEmail } from "../utilies/sendEmail.js";
import {Course} from "../models/Course.js"
export const getAllCourses = (req,res,next) =>{
    res.send("working!!!");
  }

export const resister = catchAsyncError(async(req,res,next)=>{
  const {name,email,password} = req.body;
  // const file = req.file;
  if(!name || !email || !password) return next(new ErrorHandller('All fields are required',400));
  let user = await User.findOne({email}); 
  if(user) return next(new ErrorHandller('User already exists',409));
  user = await User.create({
    name,
    email,
    password,
    avatar : {
      public_id : "temp",
      url : "tempurl"
    }
  })
sendToken(res,user,'Registered Successfully',201)
})  

// login 

export const login = catchAsyncError(async(req,res,next)=>{
  const {email,password} = req.body;
  // const file = req.file;
  if( !email || !password) return next(new ErrorHandller('All fields are required',400));
  const user = await User.findOne({email}).select("+password"); 
  if(!user) return next(new ErrorHandller('Password or Email inccorect',401));
 const isMathch = await user.comparePassword(password);
 if(!isMathch) return next(new ErrorHandller('Password or Email inccorect',400))
sendToken(res,user,`Wlcome back ,${user.name}`,200)
})  

// logout -> GET

export const logout = catchAsyncError(async(req,res,next)=>{
    res.status(200).cookie("token",null,{
      expires:new Date(Date.now())
    }).json({
      success:true,
      message : "logout successfully"
    })
})

// Profile 

export const getMyProfile = catchAsyncError(async (req,res,next)=>{
  const  user = await User.findById(req.user._id);
  res.status(200).json({
    success:true,
    user
  })
})
export const changepassword = catchAsyncError(async (req,res,next)=>{
  const {oldPassword,newPassword} = req.body;
  if(!oldPassword || !newPassword) return next(new ErrorHandller('All feilds are required!',400));
  const user = await User.findById(req.user._id).select("+password");
  const isMathch = await user.comparePassword(oldPassword);
  if(isMathch) return next(new ErrorHandller("Incorrect old password!",400));
 user.password = newPassword;
  await user.save();
  res.status(200).json({
    success:true,
    message:"Password Updated"
  })
})
export const updateProfile = catchAsyncError(async (req,res,next)=>{
  const {name,email} = req.body;
const user = await User.findById(req.user._id);
if(name) user.name = name;

if(email) user.email = email;

  await user.save();
  res.status(200).json({
    success:true,
    message:" Updated successfully"
  })
})

export const updateProfilePicture  = catchAsyncError(async (req,res,next)=>{
    res.status(200).json({
      success:true,
      message:"Profile Picture Updated Successfully"
    })
})

export const forgotPassword  = catchAsyncError(async (req,res,next)=>{
  const {email} = req.body;
  const user = await User.findOne({email});
  if(!user) return next(new ErrorHandller("User not found!",404));

  const resetToken = await user.getRestToken();
  const url = `${process.env.FRONTEND_URL}/restpassword/${resetToken}`
  const message = `Click on the link to reset your password ${url} if you are not requested ignore it`;
 await sendEmail(user.email,"study-room reset password",message);

    res.status(200).json({
      success:true,
      message:`reset token has been send to ${user.email}`,
    })
})
export const resetPassword  = catchAsyncError(async (req,res,next)=>{
  const {token} = req.params
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire:{
      $gt:Date.now(),
    }
  })

  if(!user) next(new ErrorHandller('Token is invalid or has been expired',400))
    user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

    res.status(200).json({
      success:true,
      message:"token sent",
      token,
    })
})


export const addToPlaylist  = catchAsyncError(async(req,res,next)=>{
  const user = await User.findById(req.user._id);
  const course = await Course.findById(req.body.id);
  if(!course) return next(new ErrorHandller("Invalid course id",404));
  const itemExist = user.Playlist.find((item)=>{
    if(item.course.toString()===course._id.toString())  return true;
  })
  if(itemExist) return next(new ErrorHandller("Item already exist",409));
    user.Playlist.push({
  course:course.id,
  poster : course.poster.url,
  
});
await user.save();

res.status(200).json({
  success : true,
  message : "Added to playlist successfully!"
})

})

export const removeFromPlaylist = catchAsyncError(async (req,res,next)=>{
  const user = await User.findById(req.user._id);
  const course = await Course.findById(req.query.id);
  if(!course) return next(new ErrorHandller("Invalid course id",404));
    user.playlist = user.playlist.filter(item =>{
    if(item.course.toString()!==course._id.toString()) return item;
  })

  await user.save();
  res.status(200).json({
    success : true,
    message:'Removed From Playlist'
  })
})