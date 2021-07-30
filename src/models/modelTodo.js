import mongoose from "mongoose";

const todo = new mongoose.Schema({
  userId: { type: String, required: true },
  id: { type: String, required: true },
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
});
export default mongoose.model("Todo", todo);
