import { mongoose } from "../../../database";

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nameSearch: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export { categorySchema };
