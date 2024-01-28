import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBarDiv = styled.div`
  width: 250px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 12px;
  & h2 {
    margin-bottom: 20px;
  }
`;
export const CategoriesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CategoryItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const CategoryLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  display: flex;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7bcee7;
    color: #fff;
  }
`;

export const CategoryImage = styled.img`
  margin-left: 10px;
  width: 20px; /* Adjust the width as needed */
  height: 20px; /* Adjust the height as needed */
`;
