import { useNavigate, useParams } from "react-router-dom";
import {
  ButtonContainer,
  Discount,
  ImageContainer,
  ProductContainer,
  ProductDescription,
  ProductImage,
  Stock,
  Image,
  Ratings,
} from "./styled";
import { Button } from "@mui/material";
import Rating from "../../components/Rating/Rating";
import { MouseEvent, useEffect, useState } from "react";
import { Product } from "../../interfaces/product.interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";
import LoadingProductPage from "../Loading/LoadingProductPage";
import Alert from "../../components/Alert/AlertActions";

const ProductPage = (): JSX.Element => {
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImg, setImg] = useState<string | undefined>("");
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const add = (id: number | undefined) => {
    if (id !== undefined) {
      dispatch(cartActions.add(id));
      setMessage("Successfuly");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsloading(true);
        const url = `https://dummyjson.com/products/${param.id}`;
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data);
        setImg(data.thumbnail);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsloading(false);
      }
    };

    fetchData();
  }, [param]);

  const pay = (e: MouseEvent, price: number | undefined) => {
    e.preventDefault();
    navigate(`/pay/${price}`);
  };
  if (isLoading) {
    return <LoadingProductPage />;
  }

  return (
    <>
      <Alert erorrMsg={message} setErorr={setMessage} />
      <ProductContainer>
        <ProductImage src={mainImg} alt="Product Thumbnail" />
        <h2>{product?.title}</h2>
        <ProductDescription>
          <p>{product?.description}</p>
        </ProductDescription>
        <p>
          <strong>Price: $ {product?.price}</strong>
        </p>
        <Discount>
          <strong>Discount: {product?.discountPercentage}% </strong>
        </Discount>
        <Ratings>
          <Rating rating={product?.rating ?? null}></Rating>
        </Ratings>
        <Stock>
          <strong>Stock: {product?.stock} units </strong>
        </Stock>
        <ButtonContainer>
          <>
            <Button
              variant="contained"
              size="small"
              onClick={() => add(product?.id)}
            >
              Add to Card
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={(e) => pay(e, product?.price)}
            >
              One Click Buy
            </Button>{" "}
          </>
        </ButtonContainer>
        <h3>Images:</h3>
        <ImageContainer>
          {product?.images.map((el, index) => (
            <Image
              onClick={() => setImg(el)}
              src={el}
              alt={`Product Image ${index}`}
            />
          ))}
        </ImageContainer>
      </ProductContainer>
    </>
  );
};

export default ProductPage;
