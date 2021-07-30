import Router from "express";
import models from "./models/allmodels.js";

const router = new Router();

const actions = (model) => ({
  GET: async () => model.find(),
  POST: async (...args) => model.create(...args),
});

router.all("/:model", async (req, res) => {
  try {
    const model = req.params.model;
    const currentModel = models[model];
    const actionModule = actions(currentModel)[req.method];
    const resultModule = await actionModule(req.body);
    res.json(resultModule);
  } catch (e) {
    res.status(500).json("eror");
  }
});

const actionsById = (model, id) => ({
  GET: async (...args) => model.findById(id),
  PUT: async (...args) =>
    model.findByIdAndUpdate(post._id, post, { new: true }),
  DELETE: async (...args) => {
    await model.findByIdAndDelete(id);
    return true;
  },
});

router.all("/:model/:id", async (req, res) => {
  try {
    const model = req.params.model;
    const id = req.params.id;
    const currentModel = models[model];
    const action = actionsById(currentModel, id)[req.method];
    const result = await action(req.body);
    console.log(id);
    res.json(result);
  } catch (e) {
    res.status(500).json("eror");
  }
});

export default router;
