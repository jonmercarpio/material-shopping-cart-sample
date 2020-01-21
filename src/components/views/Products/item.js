import {
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  card: {
    minHeight: "380px",
    margin: 10
  },
  media: {
    maxWidth: "100%",
    height: "160px"
  }
});

const ProductItem = ({ product, children }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <img src={product.image} className={classes.media} alt={product.name} />
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          {product.name}
        </Typography>
        <Typography>Price: {`$ ${product.unitPrice}`}</Typography>
        <Typography color="secondary">Stock: {product.unitsInStock}</Typography>
      </CardContent>
      <CardActions>{children}</CardActions>
    </Card>
  );
};

export default ProductItem;
