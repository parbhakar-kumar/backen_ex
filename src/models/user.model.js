import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const usermodel=new Schema(
    {
        usersName:{
            required:true,
            types:String,
            uniqe:true,
            lowercacs:true,
            trim:true,
            index:true,

        },
        email:{
            required:true,
            types:String,
            uniqe:true,
            lowercacs:true,
            trim:true,
            index:trues

        },
        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        avater:{
            required:true,
            types:String,

        },
        coverImge:{
            types:String,

        },
        watchHistory:{
            types:String,

        },
        password:{
            types:String,
            required:[true,'password is required']

        },
        refreshToken:{
            types:String,


        }
    },
    {
        timestamps: true,
    }
)
userSchema.pre("save",async function(next){
    if(this.ismMdified("password"));
    this.password=bcrypt.hash(this.password,10)
    next()
})
userSchema.methods.ispasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}
userSchema.methods.generatAccessToken = function(){
  return  jwt.sign(
        {
            _id:this._id,
            email:this.email,
            usersName:this.usersName,
            fullName:this.fullName 
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generatRefreshToken=function(){
   return jwt.sign(
    {
        _id:this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
   )
}
export const User = mongoose.model(User,userSchema)