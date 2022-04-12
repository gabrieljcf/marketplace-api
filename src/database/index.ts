import mongoose from "mongoose";

mongoose.connect("mongodb+srv://marketplace-api:ZUtx5ZeREVrPFRBc@cluster0.xrpnf.mongodb.net/marketplace?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export { mongoose };
