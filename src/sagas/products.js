import { call, put, takeLatest } from "redux-saga/effects";
import productsDux from "../duxs/products";
import * as api from "../services/api";

function* getProducts() {
  try {
    //Setting values for initial request
    yield put(
      productsDux.actions.setProducts({
        loading: true,
        error: null
      })
    );

    //Getting products from api
    const request = yield call(api.fetchProducts);

    //Puting up
    yield put(
      productsDux.actions.setProducts({
        data: request.data.products,
        loading: false,
        error: false
      })
    );
  } catch (error) {
    yield put(productsDux.actions.setError("Failed to fetch products"));
  }
}

//Watching products actions
export default function* products() {
  yield takeLatest(productsDux.actions.fetch.type, getProducts);
}
