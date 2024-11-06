import mongoose from "mongoose";
const prodcutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: true,
    },
    price: {
      type: Number,
      requried: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //createdAt, UpdatedAt
);

const Product = mongoose.model("Product", prodcutSchema);
//mongoose will convert Product into products
export default Product;
