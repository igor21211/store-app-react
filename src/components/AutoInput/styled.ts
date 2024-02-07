import { Autocomplete, Button, styled } from "@mui/material";

export const ButtonInput = styled(Button)`
  background-color: #fff;
  color: #1976d2;
  padding: 14px 20px;
  margin: 8px 0;
  border: 1px solid #333;
  cursor: pointer;
  border-radius: 10px;
  font-size: 16px;

  &:hover {
    background-color: #1976d2;
    border: 1px solid #fff;
    color: #fff;
  }

  &:active {
    background-color: #3e8e41;
  }
`;
export const InputStyled = styled(Autocomplete)`
  margin-right: 10px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #333;
`;
