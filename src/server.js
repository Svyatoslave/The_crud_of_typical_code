import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import initialize from "./dbinitilize.js";

const PORT = 8888;
const DB_URL =
  "mongodb+srv://user:1234@cluster0.w6rgm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(router);

async function bootstrap() {
  try {
    const start = Date.now();
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    await initialize();
    console.log((Date.now() - start) / 1000);
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
}

bootstrap();
