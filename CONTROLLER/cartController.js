const cartItems = require("../MODELS/cartSchema")

// add to cart
exports.addtocart = async (req, res) => {
    console.log("Inside add to cart function");
    const { id, title, price, image, quantity } = req.body
    try {
        const item = await cartItems.findOne({ id })
        if (item) {
            item.quantity += 1
            item.grandPrice = item.price * item.quantity
            await item.save()
            res.status(200).json('Item successfully added to your cart')
        } else {
            const newItem = new cartItems({
                id, title, price, image, quantity, grandPrice: price
            })
            await newItem.save()
            res.status(200).json('Item successfully added to your cart')
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// get cart
exports.getcart = async (req, res) => {
    try {
        const allItems = await cartItems.find()
        res.status(200).json(allItems)
    } catch (err) {
        res.status(401).json(err)
    }
}

// remove ite
exports.removeItem = async (req, res) => {
    const { id } = req.params
    try {
        await cartItems.deleteOne({ id })
        res.status(200).json("Item removed")
    } catch (err) {
        res.status(401).json(err)
    }
}

// incrementcartitem
exports.incrementcartitem = async (req, res) => {
    const { id } = req.params
    try {
        const existingItem = await cartItems.findOne({ id })
        existingItem.quantity += 1
        existingItem.grandPrice = existingItem.price * existingItem.quantity
        await existingItem.save()
        res.status(200).json("Item count increment")


    } catch (err) {
        res.status(401).json(err)
    }
}

// decrementcartitem
exports.decrementcart = async (req, res) => {
    const { id } = req.params
    try {
        const existingItem = await cartItems.findOne({ id })
        existingItem.quantity -= 1
        if (existingItem.quantity === 0) {
            res.status(406).json("cannot delete item")
        } else {
            existingItem.grandPrice = existingItem.price * existingItem.quantity
            await existingItem.save()
            res.status(200).json("Item count decremented")

        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// emptycart
exports.emptycart = async (req,res)=>{
    try{
 await cartItems.deleteMany()
 res.status(200).json("Successfuly emptied the cart")
    } catch (err) {
        res.status(401).json(err)
    }
}
