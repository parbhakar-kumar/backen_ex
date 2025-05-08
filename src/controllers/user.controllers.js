import {asyncHandler} from "../utils/asyncHandler.js";
import{ApiError}from "../utils/ApiError.js"
import { User } from "../models/user.model.js";
import{uploadOnCloudinary} from "../utils/cloudnary.js";
import{ApiResponse} from "../utils/ApiResponse.js"
const registerUser = asyncHandler(async(req,res)=>{
  //get user details from frintend
//   validation  - not emport 
//check if user aleeady exists:usersName , email
//check for images , check for avatar 
//upload them to cloudinary, avatar
//create password and refresh token field response
//remove passwoed and refresh token fied from response
//check for user creation 
//return res

const{fulName,email, usersName, password}=req.body
console.log("email: ",email)

if(
  [fulName, email, usersName, password].some((field)=>field?.trim()==="")
  

){
  throw new ApiError(400,"all filds are required ")
}

const existedUser= await User.findOne ({
  $or:[{usersName},{email}]
})
if(existedUser){
  throw new ApiError(409,"User with email or usersName alreadey exists")
}

const avatarLocalPath = req.files?.avatar[0]?.path;
//const coverImageLocalPath = req.files?.coverImage[0]?.path;
let coverImageLocalPath;
if(req.files && Array.isArray(req.files.coverImage)&&req.files.coverImage.length>0){
  coverImageLocalPath=req.files.coverImage[0].path
}


if(!avatarLocalPath){
  throw new ApiError(400,"Avatar file is required ")
}

const avatar=await uploadOnCloudinary(avatarLocalPath)
const coverImage=await uploadOnCloudinary(coverImageLocalPath);

if(!avatar){
  throw new ApiError(400,"avther file is required")
}   

const user = await User.create({
  fulName,
  avatar:avatar.url,
  coverImage:coverImage?.url||"",
  email,
  password,
  usersName: usersName ? usersName.toLowerCase() : ""
})

const createdUser=await User.findById(user._id).select(
  "-passwoed -refreshToken"
)
if(!createdUser){
  throw new ApiError(500,"somthing went wrong while registering the user")
}

return res.status(201).json(
  new ApiResponse(200,createdUser,"user registered successfully")
)


})


export{registerUser,}