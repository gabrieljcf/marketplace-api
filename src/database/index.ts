import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/marketplace-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export { mongoose };
