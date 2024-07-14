import express from "express";

import { saleRouter } from "./routes/sale.route";

const app = express();

app.use(express.json());
app.use("/sales", saleRouter);

export { app };
