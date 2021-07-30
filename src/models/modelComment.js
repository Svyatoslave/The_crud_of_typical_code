import mongoose from "mongoose";

const comment = new mongoose.Schema({
  postId: { type: String, required: true },
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
});
export default mongoose.model("Comment", comment);
