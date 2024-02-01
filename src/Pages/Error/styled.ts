import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const MainWrapper = styled("div")`
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const DivWrapper = styled("div")`
  text-align: center;
`;

export const DivErrorCode = styled("div")`
  font-size: 120px;
  color: #e74c3c;
  margin-bottom: 20px;
`;

export const DivErrorMessage = styled("div")`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const HomeBtn = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  background-color: #3498db;
  border-radius: 5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
`;
