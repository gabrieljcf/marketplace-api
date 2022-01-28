import { mongoose } from "../../../database";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
  ],
  images: [
    {
      type: String,
    },
  ],
  nameSearch: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  description: {
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

export { productSchema };
