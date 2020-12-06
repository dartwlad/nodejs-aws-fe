import Badge from "@material-ui/core/Badge";
import CartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { selectCartItems, setDefaultCart } from "store/cartSlice";
import { Link } from 'react-router-dom';
import API_PATHS from "../../../constants/apiPaths";
import axios from 'axios';

export default function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`${API_PATHS.cart}/profile/cart`)
        .then(({ data: { data: { cart } } }) => {
          dispatch(setDefaultCart(cart))
        });
  }, [dispatch]);
  const cartItems = useSelector(selectCartItems);
  const badgeContent = cartItems.length || undefined;

  return (
    <IconButton 
      aria-label="show 4 new mails" 
      color="inherit" 
      component={Link} 
      to="/cart"
    >
      <Badge badgeContent={badgeContent} color="secondary">
        <CartIcon/>
      </Badge>
    </IconButton>
  );
}
