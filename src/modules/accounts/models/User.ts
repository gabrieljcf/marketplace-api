import mongoose from "mongoose";

import { ISaveUserDocument } from "../interfaces/IUser";
import { userSchema } from "../schemas/userSchema";

const User = mongoose.model<ISaveUserDocument>("User", userSchema);

export { User };
