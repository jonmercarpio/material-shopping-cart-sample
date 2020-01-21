import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../duxs";
import rootSaga from "../sagas";
import logger from "redux-logger";

export default function configureStore() {
  const sagaMiddleMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleMiddleware, logger)),
    runSaga: sagaMiddleMiddleware.run(rootSaga)
  };
}
