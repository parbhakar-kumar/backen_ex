import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
    {
        videoFile:{
            types:String,
            required:true
        },
        thumbnail:{
            types:String,
            required:true
        },
        title:{
            types:String,
            required:true
        },
        description:{
            types:String,
            required:true
        },
        duration:{
            types:Number,
            required:true
        },
        viwes:{
            types:Number,
            default:0
        },
        isPublished:{
            types:Boolean,
            default:true 
        },
        owner:{
            types:Schema.Types.ObjectId,
            ref:"User"
        }

    },
    {
        timestamps:true
    }
)

export const video = mongoose.model("video",videoSchema)