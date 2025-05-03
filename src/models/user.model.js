import mongoose from "mongoose";

const usermodel=new mongoose(
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
    }
)

export const User = mongoose.model(User,userSchema)