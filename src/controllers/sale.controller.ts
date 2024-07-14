import { Request, Response } from "express";
import { SaleModel } from "../models/sale.model";

// https://www.mongodb.com/docs/manual/aggregation/

export const saleController = {
  get: async (req: Request, res: Response) => {
    try {
      const result = await SaleModel.aggregate([
        {
          $group: {
            _id: "$product",
            totalSales: { $sum: "$amount" },
            averageSales: { $avg: "$amount" },
          },
        },
        {
          $sort: { totalSales: -1 },
        },
      ]);

      res.json(result);
    } catch (error: any) {
      console.log("err", error);
      res.status(500).send(error.message);
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const result = await new SaleModel({
        product: "Product_" + Date.now(),
        amount: +Date.now().toString().substring(10),
      }).save();

      res.json(result);
    } catch (error: any) {
      console.log("err", error);
      res.status(500).send(error.message);
    }
  },
  addSale: async (req: Request, res: Response) => {
    try {
      const sale = await SaleModel.findOne({}).sort({
        _id: Date.now() % 2 === 1 ? "desc" : "asc",
      });
      if (!sale) throw new Error("sale not found");

      const result = await new SaleModel({
        product: sale.product,
        amount: +Date.now().toString().substring(10),
      }).save();

      res.json(result);
    } catch (error: any) {
      console.log("err", error);
      res.status(500).send(error.message);
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const result = await SaleModel.deleteMany({});

      res.json(result.deletedCount);
    } catch (error: any) {
      console.log("err", error);
      res.status(500).send(error.message);
    }
  },
};
