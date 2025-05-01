import express from "express";
import { createProduct } from "../controller/productController.js";


const router = express.Router()

//create products
router.post("/add",createProduct)

export {router as productRouter}