import { takeLatest, put, select } from "redux-saga/effects";
import cartDux from "../duxs/cart";

function* addToCart({ payload }) {
  //Should call a network request to the server

  //Selecting current cart products
  let products = yield select(state => state.cart.products);

  //Search for the the product to increase the count of items
  let productIdx = products.findIndex(p => p.productID === payload.productID);

  if (productIdx !== -1) {
    let product = products[productIdx];
    product.qty++;
    products[productIdx] = product;
  } else {
    products.push({
      ...payload,
      qty: 1
    });
  }

  yield put(
    cartDux.actions.setCart({
      products
    })
  );
}

function* removeFromCart({ payload }) {
  //Should call a network request to the server

  let products = yield select(state => state.cart.products);

  //Search for the the product to decrease the count of items
  let productIdx = products.findIndex(p => p.productID === payload.productID);
  let product = products[productIdx];
  product.qty--;

  if (product.qty === 0) {
    products.splice(productIdx, 1);
  } else {
    products[productIdx] = product;
  }

  yield put(
    cartDux.actions.setCart({
      products
    })
  );
}

//Watching cart actions
export default function* cart() {
  yield takeLatest(cartDux.actions.add.type, addToCart);
  yield takeLatest(cartDux.actions.remove.type, removeFromCart);
}
