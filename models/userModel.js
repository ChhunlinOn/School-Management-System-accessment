import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
  {
    name: { require: true, type: String },
    email: { require: true, type: String },
    password:{require: true, type: String}
  },
  { timestamps: true }
);

export default mongoose.model("User", usersSchema);