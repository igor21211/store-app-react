import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  StyledActions,
  StyledDescription,
  StyledImage,
  StyledItem,
  StyledMinus,
  StyledName,
  StyledNumber,
  StyledPlus,
  StyledPrice,
  StyledRemove,
} from "./styled";
import { CartItemProps } from "./CartItem.props";
import { cartActions } from "../../store/cart.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

const CartItem = (props: CartItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const increase = () => {
    dispatch(cartActions.add(props.id));
  };

  const decrease = () => {
    dispatch(cartActions.remove(props.id));
  };

  const remove = () => {
    dispatch(cartActions.delete(props.id));
  };
  return (
    <StyledItem>
      <StyledImage style={{ backgroundImage: `url(${props.thumbnail})` }} />
      <StyledDescription>
        <StyledName>{props.title}</StyledName>
        <StyledPrice>{props.price}&nbsp;₴</StyledPrice>
      </StyledDescription>
      <StyledActions>
        <StyledMinus onClick={decrease}>
          <RemoveIcon />
        </StyledMinus>
        <StyledNumber>{props.count}</StyledNumber>
        <StyledPlus onClick={increase}>
          <AddIcon />
        </StyledPlus>
        <StyledRemove onClick={remove}>
          <DeleteForeverIcon />
        </StyledRemove>
      </StyledActions>
    </StyledItem>
  );
};

export default CartItem;
