import { Types } from "mongoose";

interface IFiltersUsers {
  nameSearch?: RegExp;
  _id?: Types.ObjectId;
  isActive?: boolean;
  email?: string;
}

export { IFiltersUsers };
