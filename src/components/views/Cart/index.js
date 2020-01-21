import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import ProductItem from "../Products/item";
import cartDux from "../../../duxs/cart";

const CartList = props => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleIncreasePress = product => e => {
    //Adding a product to the list, it will increase the amount on the cart
    dispatch(cartDux.actions.add(product));
  };

  const handleDecreasePress = product => e => {
    //When the product qty is 0, it will be removed from the cart
    dispatch(cartDux.actions.remove(product));
  };

  return (
    <Grid container spacing={2}>
      {cart.products.map(product => (
        <Grid item xs={4} key={product.productID}>
          <ProductItem product={product}>
            <Button onClick={handleDecreasePress(product)}>-</Button>
            <Button>{product.qty}</Button>
            <Button onClick={handleIncreasePress(product)}>+</Button>
          </ProductItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default CartList;
