import mongoose from "mongoose";

const photo = new mongoose.Schema({
  albumId: { type: String, required: true },
  id: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
});
export default mongoose.model("Photo", photo);
