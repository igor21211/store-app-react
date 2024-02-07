import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0c4160;
  padding: 30px 10px;
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
  padding: 30px 10px;
`;

export const Card = styled.div`
  max-width: 500px;
  margin: auto;
  color: black;
  border-radius: 20px;
  background-color: #fff;
  padding: 20px;
`;

export const Heading = styled.p`
  font-size: 30px;
  font-weight: 800;
  text-align: center;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  width: 100%;
  color: white;
  background-color: #223c60;
  border: 2px solid transparent;
  height: 60px;
  padding-left: 20px;
  vertical-align: middle;

  &:focus {
    background-color: #0c4160;
    border: 2px solid #2d4dda;
    box-shadow: none;
  }
`;

export const Label = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

export const Button = styled.button`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    #77a1d3 0%,
    #79cbca 51%,
    #77a1d3 100%
  );
  border: none;
  transition: 0.5s;
  background-size: 200% auto;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

export const ArrowIcon = styled.span`
  font-size: 1.2em;
  transition: transform 0.2s ease-in;
`;
