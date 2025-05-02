import express from "express";
import { createProduct, deleteProduct,getAllProducts ,getProductByID} from "../controller/productController.js";


const router = express.Router()

//create products
router.post("/add",createProduct)
router.delete("/:id",deleteProduct)
router.get("/",getAllProducts)
router.get("/:id",getProductByID)

export {router as productRouter}