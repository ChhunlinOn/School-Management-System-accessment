import mongoose from "mongoose";
const studentSchema = new mongoose.Schema(
  {
    IDCard: {type: Number, require:true},
    name: { require: true, type: String },
    email: { require: true, type: String },
    phone: {type: Number, require:true},
    classid:{type: mongoose.Schema.Types.ObjectId, ref: "class", required: true}
  },
  { timestamps: true }
);

export default mongoose.model("students", studentSchema);