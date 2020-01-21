import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button, Typography, Box } from "@material-ui/core";
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

  const totals = cart.products.reduce(
    (a, e) => ({
      count: a.count + e.qty,
      amount: a.amount + e.unitPrice * e.qty
    }),
    {
      count: 0,
      amount: 0
    }
  );

  return (
    <React.Fragment>
      <Box minHeight="85vh">
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
      </Box>
      <Grid container justify="flex-end">
        <Grid item>
          <Typography color="textSecondary">Items ({totals.count})</Typography>
          <Typography color="textSecondary">Total: ${totals.amount}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CartList;
