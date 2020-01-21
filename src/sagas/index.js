import { all, fork } from "redux-saga/effects";
import products from "./products";
import cart from "./cart";

//Main watcher
export default function* root() {
  yield all([fork(products), fork(cart)]);
}
