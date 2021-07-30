import axios from "axios";
import models from "./models/allmodels.js";

const getUrl = (str) => `https://jsonplaceholder.typicode.com/${str}`;

export default async () => {
  const promis = Object.entries(models).map(async ([path, model]) => {
    const { data } = await axios.get(getUrl(path));

    const promises = data.reduce(
      (acc, item) => [...acc, model.create(item)],
      []
    );

    return Promise.all(promises);
  });

  return Promise.all(promis);
};
