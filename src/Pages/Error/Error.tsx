"use client";

import {
  DivErrorCode,
  DivErrorMessage,
  DivWrapper,
  HomeBtn,
  MainWrapper,
} from "./styled";

export default function NotFound() {
  return (
    <MainWrapper>
      <DivWrapper>
        <DivErrorCode>404</DivErrorCode>
        <DivErrorMessage>Oops! Page not found</DivErrorMessage>
        <HomeBtn to={"/"}>Home</HomeBtn>
      </DivWrapper>
    </MainWrapper>
  );
}
