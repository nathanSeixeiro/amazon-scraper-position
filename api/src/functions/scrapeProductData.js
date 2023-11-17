import axios from "axios";
import cheerio from "cheerio";
import { errors } from "../utils/errors.js";

export async function scrapeProductsData(url) {
  const { data } = await axios.get(url); // get data from the url with axios
  const $ = cheerio.load(data); // load data on cheerio
  const products = [];
  try {
    // get the elements what we want based on yours css selectors
    $(".s-result-item").each((index, element) => {
      const title = $(element).find("span.a-text-normal").text();
      const imgURL = $(element).find("img.s-image").attr("src");
      const asin = $(element).data("asin");
      // create an object with scraped data and add it to the 'products' array
      products.push({ title, imgURL, asin });
    });

    return products[1]; // return the first element
  } catch (error) {
    throw new Error(errors.scrapedError);
  }
}
