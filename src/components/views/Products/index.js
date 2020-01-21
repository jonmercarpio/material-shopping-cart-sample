import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import cartDux from "../../../duxs/cart";
import productsDux from "../../../duxs/products";
import ProductItem from "./item";

const Products = props => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const { count = -1 } = useParams();
  const productCounts = products.data.length;

  useEffect(() => {
    //Fetching products list if is empty
    if (productCounts === 0) {
      dispatch(productsDux.actions.fetch());
    }
  }, [dispatch, productCounts]);

  //Getting top 5
  //We can use reselect to handle cache
  const data = count ? products.data.slice(0, count) : products.data;

  const handleAddToCartClick = product => e => {
    dispatch(cartDux.actions.add(product));
  };

  if (products.loading) {
    return <Typography>Getting products...</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {data.map(product => (
        <Grid item xs={4} key={product.productID}>
          <ProductItem product={product}>
            <Button
              disabled={product.unitsInStock === 0}
              onClick={handleAddToCartClick(product)}
            >
              Add to cart
            </Button>
          </ProductItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
