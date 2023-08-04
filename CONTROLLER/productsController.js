const products = require('../MODELS/productsSchema')

// get all products 
exports.getallproducts = async (req,res)=>{
    try{
        const allproducts = await products.find()
        res.status(200).json(allproducts)
    }catch(error){
        res.status(401).json(error)
    }
}
// view product
exports.viewproduct=async (req,res)=>{
const {id}= req.params

try{
    const product =await products.findOne({id})
    if(product){
        res.status(200).json(product)
    }
    else{
        res.status(404).json("Product not found!!!")
    }
}catch(error){
    res.status(401).json(error)
}
}