import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/api-products", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export { mongoose };
