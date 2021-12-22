const express = require("express")
const upload = require("../middlewares/upload")

const Product = require("../models/product.model")




const router = express.Router()


router.get("/new",  async function (req,res)  {

    return res.render("products/new")
})

router.get("/",  async function (req,res)  {

    const products = await Product.find().lean().exec()

    return res.render("products/all",{products})
})


router.get("/:id",  async function (req,res)  {

    const products = await Product.findById(req.params.id).lean().exec()
    
    return res.render("products/single",{products})
})


router.post("/single", upload.single("profile_pic"), async(req,res) => {
    try {
        const product = await Product.create({
            title: req.body.title,
           price: req.body.price,
            profile_pic: req.profile_pic,
        })
         return res.render("products/single",{product})
         //return res.redirect(`/products/${product._id}`)
    } catch (e) {
        return res.status(500).json({status: "failed", message: e.message})
    }
})

router.post("/multiple", upload.any("profile_pic"), async(req,res) => {

    const filePaths = req.files.map((file) => file.path)
    try {
        const product = await Product.create({
            title: req.body.title,
            price: req.body.price,
             profile_pic: filePaths,
        })
         return res.status(201).json({product})
    } catch (e) {
        return res.status(500).json({status: "failed", message: e.message})
    }
})

module.exports = router