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
  isActive: {
    type: Boolean,
    default: true,
  },
  isActiveInHomePage: {
    type: Boolean,
    default: false,
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
