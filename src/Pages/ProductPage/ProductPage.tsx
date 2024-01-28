import { useParams } from "react-router-dom";
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
import { Button, Skeleton } from "@mui/material";
import Rating from "../../components/Rating/Rating";
import { useEffect, useState } from "react";
import { Product } from "../../interfaces/product.interface";

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImg, setImg] = useState<string | undefined>("");
  const [isLoading, setIsloading] = useState<boolean>(false);
  const param = useParams();

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

  return (
    <>
      <ProductContainer>
        {isLoading ? (
          <Skeleton width={500} height={281} animation="wave" />
        ) : (
          <ProductImage src={mainImg} alt="Product Thumbnail" />
        )}{" "}
        {isLoading ? (
          <Skeleton width={100} height={20} animation="wave" />
        ) : (
          <h2>{product?.title}</h2>
        )}
        <ProductDescription>
          {isLoading ? (
            <Skeleton width={300} height={20} animation="wave" />
          ) : (
            <p>{product?.description}</p>
          )}
        </ProductDescription>
        <p>
          {isLoading ? (
            <Skeleton width={100} height={20} animation="wave" />
          ) : (
            <strong>Price: $ {product?.price}</strong>
          )}
        </p>
        <Discount>
          {isLoading ? (
            <Skeleton width={100} height={20} animation="wave" />
          ) : (
            <strong>Discount: {product?.discountPercentage}% </strong>
          )}
        </Discount>
        <Ratings>
          {isLoading ? (
            <Skeleton width={100} height={40} animation="wave" />
          ) : (
            <Rating rating={product?.rating}></Rating>
          )}
        </Ratings>
        <Stock>
          {isLoading ? (
            <Skeleton width={100} height={40} animation="wave" />
          ) : (
            <strong>Stock: {product?.stock} units </strong>
          )}
        </Stock>
        <ButtonContainer>
          {isLoading ? (
            <>
              <Skeleton width={100} height={40} animation="wave" />
              <Skeleton width={100} height={40} animation="wave" />
            </>
          ) : (
            <>
              <Button variant="contained" size="small">
                Add to Card
              </Button>
              <Button variant="outlined" size="small">
                One Click Buy
              </Button>{" "}
            </>
          )}
        </ButtonContainer>
        <h3>Images:</h3>
        <ImageContainer>
          {product?.images.map((el, index) => {
            if (isLoading) {
              return <Skeleton width={300} height={200} animation="wave" />;
            }
            if (!isLoading) {
              return (
                <Image
                  onClick={() => setImg(el)}
                  src={el}
                  alt={`Product Image ${index}`}
                />
              );
            }
          })}
        </ImageContainer>
      </ProductContainer>
    </>
  );
};

export default ProductPage;
