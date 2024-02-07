import { useDispatch, useSelector } from "react-redux";
import {
  StyledCheckout,
  StyledHeader,
  StyledHr,
  StyledLine,
  StyledText,
  StyledTotalCount,
} from "./styled";
import { AppDispatch, RootState } from "../../store/store";
import { Product } from "../../interfaces/product.interface";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { cartActions } from "../../store/cart.slice";
import axios from "axios";
import CartItem from "../../components/CartItem/CartItem";
const DELIVERY_FREE = 169;
const Card = (): JSX.Element => {
  const [cartProducts, setCardProducts] = useState<Product[]>([]);
  const items = useSelector((s: RootState) => s.cart.items);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const total = items
    .map((i) => {
      const product = cartProducts.find((p) => p.id === i.id);
      if (!product) {
        return 0;
      }
      return i.count * product.price;
    })
    .reduce((acc, i) => (acc += i), 0);

  const getItem = async (id: number) => {
    const { data } = await axios.get<Product>(
      `https://dummyjson.com/products/${id}`,
    );
    return data;
  };

  const loadAllItems = async () => {
    const res = await Promise.all(items.map((i) => getItem(i.id)));
    setCardProducts(res);
  };

  const checkout = (total: number) => {
    dispatch(cartActions.clean());
    navigate(`/pay/${total}`);
  };

  useEffect(() => {
    loadAllItems();
  }, [items]);
  return (
    <>
      <StyledHeader>Cart</StyledHeader>
      {items.map((i) => {
        const product = cartProducts.find((p) => p.id === i.id);
        if (!product) {
          return;
        }
        return <CartItem key={product.id} count={i.count} {...product} />;
      })}
      <StyledLine>
        <StyledText>Pay</StyledText>
        <div>
          {total}&nbsp; <span>₴</span>
        </div>
      </StyledLine>
      <StyledHr />
      <StyledLine>
        <StyledText>Delivery</StyledText>
        <div>
          {DELIVERY_FREE}&nbsp; <span>₴</span>
        </div>
      </StyledLine>
      <StyledHr />
      <StyledLine>
        <StyledText>
          Total <StyledTotalCount>({items.length})</StyledTotalCount>
        </StyledText>
        <div>
          {total + DELIVERY_FREE}&nbsp; <span>₴</span>
        </div>
      </StyledLine>
      <StyledCheckout>
        <Button
          disabled={items.length === 0}
          variant="outlined"
          size="large"
          onClick={() => checkout(total + DELIVERY_FREE)}
        >
          To make a purchase
        </Button>
      </StyledCheckout>
    </>
  );
};

export default Card;
