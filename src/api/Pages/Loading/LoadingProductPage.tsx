import { Skeleton } from "@mui/material";
import {
  ButtonContainer,
  Discount,
  ImageContainer,
  ProductContainer,
  ProductDescription,
  Ratings,
  Stock,
} from "../ProductPage/styled";

const LoadingProductPage = () => {
  return (
    <>
      <ProductContainer>
        <Skeleton width={500} height={281} animation="wave" />
        <Skeleton width={100} height={20} animation="wave" />
        <ProductDescription>
          <Skeleton width={300} height={20} animation="wave" />
        </ProductDescription>
        <p>
          <Skeleton width={100} height={20} animation="wave" />
        </p>
        <Discount>
          <Skeleton width={100} height={20} animation="wave" />
        </Discount>
        <Ratings>
          <Skeleton width={100} height={40} animation="wave" />
        </Ratings>
        <Stock>
          <Skeleton width={100} height={40} animation="wave" />
        </Stock>
        <ButtonContainer>
          <>
            <Skeleton width={100} height={40} animation="wave" />
            <Skeleton width={100} height={40} animation="wave" />
          </>
          <>
            <Skeleton width={100} height={40} animation="wave" />
            <Skeleton width={100} height={40} animation="wave" />
          </>
        </ButtonContainer>
        <h3>Images:</h3>
        <ImageContainer>
          return <Skeleton width={300} height={200} animation="wave" />;
        </ImageContainer>
      </ProductContainer>
    </>
  );
};

export default LoadingProductPage;
