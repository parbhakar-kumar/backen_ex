import {asyncHandler} from "../utils/acsyncHandler.js";

const registerUser = asyncHandler(async(req,res)=>{
    res.ststus(200).json({
        message:"ok", 
    })
})


export{registerUser}