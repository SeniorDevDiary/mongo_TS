import { Schema, model, Document } from "mongoose";

interface Sale extends Document {
  product: string;
  amount: number;
  date: Date;
}

const saleSchema = new Schema<Sale>({
  product: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

export const SaleModel = model<Sale>("Sale", saleSchema);
