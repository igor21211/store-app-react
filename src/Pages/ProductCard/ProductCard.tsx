import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductWrapper } from "./styled";
import Ratings from "../../components/Rating/Rating";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "../../interfaces/product.interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";
import { MouseEvent, useState } from "react";
import Alert from "../../components/Alert/AlertActions";

const ProductCard = ({
  id,
  thumbnail,
  description,
  price,
  title,
  rating,
}: Product): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const add = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.add(id));
    setMessage("Successfuly");
  };
  const pay = (e: MouseEvent, price: number) => {
    e.preventDefault();
    navigate(`/pay/${price}`);
  };

  return (
    <ProductWrapper sx={{ maxWidth: 345 }}>
      <Alert erorrMsg={message} setErorr={setMessage} />
      <Link style={{ textDecoration: "none" }} to={`/product/${id}`}>
        <CardMedia sx={{ height: 140 }} image={thumbnail} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {`Price: $ ${price}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Ratings rating={rating} />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={(e) => {
              add(e);
            }}
          >
            Add to Card
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={(e) => pay(e, price)}
          >
            One Click Buy
          </Button>
        </CardActions>
      </Link>
    </ProductWrapper>
  );
};

export default ProductCard;
