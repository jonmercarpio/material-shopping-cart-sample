import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MainRoute } from "./components/routes";
import { ProductsView } from "./components/views";
import configureStore from "./redux/store";
import CartList from "./components/views/Cart";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRoute exact path="/" component={ProductsView} />
        <MainRoute path="/cart" component={CartList} />
        <MainRoute path="/top/:count" component={ProductsView} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
