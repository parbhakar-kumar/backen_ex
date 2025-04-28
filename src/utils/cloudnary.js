import { v2 as cloudinary } from "cloudinary";
import { response } from "express";

import fs from "fs";


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDNARY_CLOUD_NAME, 
        api_key: process.env.CLOUDNARY_API_KEY, 
        api_secret: process.env.CLOUDNARY_API_SECRET ,
    });


const uploadOnCloudinary = async (localFilePath)=>{
    try{
       if(!localFilePath) return null 
       cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
       })
       console.log("file is uploaded on cloudnary ",response.url); 
       return response

    }catch(error){
        fs.unlinkSync(localFilePath)
         return null;

         
    }
} 

export{uploadOnCloudinary}