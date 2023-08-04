const wishlists = require ('../MODELS/wishlistSchma')

// add to wishlists 
exports.addtowishlist = async (req,res)=>{
    console.log("Inside add to wihlist function");
    const{id,title,price,image}=req.body

    try{
        const existngItem = await wishlists.findOne({id})
        if(existngItem){
            res.status(403).json("Item already available in the wishlist!!!")
        }else{
            const newItem = new wishlists({
                id,title,price,image
            })
            await newItem.save()
            res.status(200).json(newItem)
        }
    }
    catch(err){
        res.status(401).json(err)

    }
}
// get all wishlist
exports.getallitems = async (req,res)=>{
    try{
        const allitems = await wishlists.find()
        res.status(200).json(allitems)

    }catch(err){
        res.status(401).json(err)
    }
}

// remove item

exports.removeItem = async (req,res)=>{
    const {id} = req.params
    try{
        await wishlists.deleteOne({id})
        res.status(200).json("Product removed from your wishlist")

    }catch(err){
        res.status(401).json(err)
    }
}