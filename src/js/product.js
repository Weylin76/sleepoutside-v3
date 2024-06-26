import { setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import {getParam} from "./utils.mjs";

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const products = urlParams.get("products")