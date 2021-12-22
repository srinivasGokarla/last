const {Schema, model} = require("mongoose");

const productSchema = new Schema({
  
  title : {type:String, required: true},
  price: {type:Number, required: true},
  profile_pic:[{type:String, required: true}]
},{
    versionKey: false,
    timestamps:true
})
module.exports = model("product", productSchema);