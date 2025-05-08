import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema(
    {
        videoFile:{
            type:String,
            required:true
        },
        thumbnail:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        viwes:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true 
        },
        owner:{
            type:Schema.type.ObjectId,
            ref:"User"
        }

    },
    {
        timestamps:true
    }
)
videoSchema.plugin(mongooseAggregtePaginate)
export const video = mongoose.model("video",videoSchema)