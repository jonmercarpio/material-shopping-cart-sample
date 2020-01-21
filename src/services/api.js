import axios from "axios";

const client = axios.create({
  baseURL: "https://private-3efa8-products123.apiary-mock.com"
});

export const fetchProducts = () => client.get("products");
