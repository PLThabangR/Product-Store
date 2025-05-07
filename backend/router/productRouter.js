import express from "express";
import { createProduct, deleteProduct,getAllProducts ,getProductByID,updateProductByID} from "../controller/productController.js";

//Create router object
const router = express.Router()

//create products
router.post("/",createProduct)
router.delete("/:id",deleteProduct)
router.get("/",getAllProducts)
router.get("/:id",getProductByID)
router.put("/:id",updateProductByID)

export {router as productRouter}