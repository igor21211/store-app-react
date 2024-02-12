import styled from "styled-components";

export const ProductContainer = styled.div`
  max-width: 1400px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow:
    rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

export const ProductImage = styled.img`
  width: 400px;
  height: 300px;
`;

export const ProductDescription = styled.div`
  margin-top: 20px;
`;

export const Discount = styled.p`
  color: #e44d26;
  font-weight: bold;
`;

export const Ratings = styled.p`
  color: #ffc107;
`;

export const Stock = styled.p`
  color: #28a745;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Image = styled.img`
  max-width: 25%;
  height: auto;
  margin-right: 5px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
