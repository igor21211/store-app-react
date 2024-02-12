import { Link } from "react-router-dom";
import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const SuccessMessage = styled.h1`
  font-size: 36px;
  color: #28a745;
  margin-bottom: 20px;
`;

export const ThankYouMessage = styled.p`
  font-size: 18px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-size: 16px;
`;
