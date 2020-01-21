import {
  AppBar,
  Badge,
  Box,
  IconButton,
  makeStyles,
  Toolbar,
  Container
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  toolbarOffset: theme.mixins.toolbar
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const productsInCartCount = useSelector(state => state.cart.products.length);

  const handleCartClick = e => {
    history.push("/cart");
  };

  return (
    <Box component="div" className={classes.root}>
      <AppBar>
        <Toolbar variant="dense">
          <Box component="div" className={classes.title}>
            <Box clone color="#FFF">
              <Link to="/">Products</Link>
            </Box>
            <Box clone color="#FFF" marginLeft="10px">
              <Link to="/top/5">Top-5</Link>
            </Box>
          </Box>
          <IconButton edge="start" color="inherit" onClick={handleCartClick}>
            <Badge badgeContent={productsInCartCount}>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarOffset} />
      <Container>{children}</Container>
    </Box>
  );
};

export default MainLayout;
