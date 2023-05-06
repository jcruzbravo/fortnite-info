import express from "express";
import axios from "axios";
import { endpoints } from "./endpoints.js";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());

app.get("/api/news", async (req, res) => {
  const response = await axios.get(endpoints.NEWS, {
    headers: {
      Authorization: process.env.API_KEY_FORTNITE_IO,
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
  });
  const data = response.data;
  const news = data.news;
  res.send(news);
});

app.get("/api/daily_shop", async (req, res) => {
  const response = await axios.get(endpoints.DAILY_SHOP, {
    headers: {
      Authorization: process.env.API_KEY_FORTNITE_IO,
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
  });
  const data = response.data;
  const shop = data.shop;
  res.send(shop);
});

app.get("/api/full_shop", async (req, res) => {
  const response = await axios.get(endpoints.FULL_SHOP, {
    headers: {
      Authorization: process.env.API_KEY_FORTNITE_IO,
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
  });
  const data = response.data;
  const shop = data;
  res.send(shop);
});

app.get("/api/challenges", async (req, res) => {
  const response = await axios.get(endpoints.CHALLENGES, {
    headers: {
      Authorization: process.env.API_KEY_FORTNITE_IO,
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
    data: {},
  });
  const data = response.data;
  const bundles = data.bundles;
  res.send(bundles);
});

app.get("/api/stats_player", async (req, res) => {
  let message;
  try {
    const name = req.query.name;
    const response = await axios.get(`${endpoints.STATS_PLAYER}?name=${name}`, {
      headers: {
        Authorization: process.env.API_KEY_FORTNITE,
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      data: {},
    });
    const data = response.data;
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    if (error.response.data.status === 404) {
      message = "The requested account does not exist";
    }
    if (error.response.data.status === 403) {
      message = "The requested account's stats are not public";
    }
    if (error.response.data.status === 400) {
      message = "Missing name";
    }

    res.status(500).send({ message: message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
