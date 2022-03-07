const mongoose = require("mongoose");

const uesrSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true

    },
    email: String,

});
 const userModel = mongoose.model("users",uesrSchema);


module.exports = userModel;