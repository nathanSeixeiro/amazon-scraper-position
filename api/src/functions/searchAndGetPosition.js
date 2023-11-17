import axios from "axios";
import cheerio from "cheerio";

import { errors } from "../utils/errors.js";
import { scrapeProductsData } from "./scrapeProductData.js";

export async function searchAndGetPosition(keyword, targetAsin, maxPages) {
  let positions = [];

  console.log(`Searching for ASIN: ${targetAsin} in Amazon results...`);
  // Loop through each page of search results (pagination)
  for (let page = 1; page < maxPages; page++) {
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(
      keyword
    )}&page=${page}`;

    try {
      const { data } = await axios.get(url); // Make a GET request to the Amazon search results page
      const $ = cheerio.load(data); // Load the HTML content of the page into Cheerio for parsing

      $(".s-result-item").each((i, element) => {
        const ASIN = $(element).data("asin"); // Extract the ASIN of the current product
        if (ASIN && ASIN === targetAsin) {
          // Calculate the position of the current product in the overall search results
          const position = i + 1 + (page - 1) * 16;
          positions.push(position); // Store the position
        }
      });
    } catch (error) {
      console.log(error);
      throw new Error(errors.errorAtFetchResults);
    }
  }

  const productDataUrl = `https://www.amazon.com/s?k=${encodeURIComponent(
    targetAsin
  )}`;
  const productsData = await scrapeProductsData(productDataUrl);
  console.log(`Returning results:`, { positions, ...productsData });
  return { positions: positions, ...productsData };
}
