import express from "express";
const CategoryRouter = express.Router(); 
import CategoryController from "../controllers/category.js";
const categoryController  = new CategoryController();
CategoryRouter.get("/", categoryController.getCategories);
CategoryRouter.post("/", categoryController.createCategoryt);
CategoryRouter.get("/:id", categoryController.getCategorieOne);
CategoryRouter.put("/:id", categoryController.updateCategoryById);
CategoryRouter.delete("/:id", categoryController.removeCategroyById);
export default productRouter;