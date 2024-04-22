const { StatusCodes } = require("http-status-codes")
const User = require('../model/user')

const studentAuth = async (req,res,next) => {
    try{
        //from auth middleware
        let id = req.user.id

        let extUser = await User.findById(id)
           if(!extUser)
              return res.status(StatusCodes.NOT_FOUND).json({ status: false, msg: `Requested user id not found`})

        //check the role
        if(extUser.role !== "student")
              return res.status(StatusCodes.UNAUTHORIZED).json({ status: false, msg: `UnAuthorized. Permission Denied for other users`})

       //if he is an student
       next()
    } catch(err){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message})
    }

    }

    module.exports = studentAuth