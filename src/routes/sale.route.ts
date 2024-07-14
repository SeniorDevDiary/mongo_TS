import { Router } from "express";
import { saleController } from "../controllers/sale.controller";

const saleRouter = Router();

saleRouter.get("/aggregate", saleController.get);
saleRouter.post("/create", saleController.create);
saleRouter.put("/addSale", saleController.addSale);
saleRouter.delete("/delete", saleController.delete);

export { saleRouter };
