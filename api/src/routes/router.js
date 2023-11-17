import { Router } from "express";

import { errors } from "./../utils/errors.js";
import { searchAndGetPosition } from "../functions/searchAndGetPosition.js";

export const router = Router();

router.get("/api/scrape", async (req, res) => {
  // get params
  const { keyword, asin } = req.query;
  // maximum number of pages
  const maxPages = 5;

  try {
    const product = await searchAndGetPosition(keyword, asin, maxPages);
    res.json(product);
    // console.log(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: errors.serverError }); // error message
  }
});
