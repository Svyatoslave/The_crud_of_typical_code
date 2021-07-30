import mongoose from "mongoose";

const album = new mongoose.Schema({
  userId: { type: String, required: true },
  id: { type: String, required: true },
  title: { type: String, required: true },
});
export default mongoose.model("Album", album);
