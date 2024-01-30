import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductWrapper } from "./styled";
import Ratings from "../../components/Rating/Rating";
import { Link } from "react-router-dom";
import { Product } from "../../interfaces/product.interface";

const ProductCard = ({
  id,
  thumbnail,
  description,
  price,
  title,
  rating,
}: Product): JSX.Element => {
  return (
    <ProductWrapper sx={{ maxWidth: 345 }}>
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
          <Button variant="contained" size="small">
            Add to Card
          </Button>
          <Button variant="outlined" size="small">
            One Click Buy
          </Button>
        </CardActions>
      </Link>
    </ProductWrapper>
  );
};

export default ProductCard;
