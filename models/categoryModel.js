const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true,
        unique:true

}
})

module.exports=  Category = mongoose.model("Category", categorySchema);