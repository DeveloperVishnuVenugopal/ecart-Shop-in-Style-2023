
const express = require('express')
const productsController = require('../CONTROLLER/productsController')
const wishlistController = require('../CONTROLLER/wishlistController')
// const wishlistcon = require('../MODELS/wishlistSchma')
const cartController = require('../CONTROLLER/cartController')
const router = new express.Router()

// getallproducts
router.get('/get-products',productsController.getallproducts)

// view product
router.get(`/view-product/:id`,productsController.viewproduct)

// add-to-wishlist
router.post('/add-to-wishlist',wishlistController.addtowishlist)

// getallwishlist
router.get(`/get-wishlist`,wishlistController.getallitems)
// remove
router.delete(`/remove-item/:id`,wishlistController.removeItem)

// add to cart
router.post('/add-to-cart',cartController.addtocart)

// get cart
router.get('/get-cart',cartController.getcart)

// remove item from cart
router.delete('/remove-cart-item/:id',cartController.removeItem)

// incrementcartitem
router.get('/cart-increment/:id',cartController.incrementcartitem)

// decrementcart
router.get(`/cart-decrement/:id`,cartController.decrementcart)

// emptycart
router.delete(`/emptycart`,cartController.emptycart)

module.exports = router



