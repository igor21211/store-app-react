import styled from "styled-components";

export const StyledImage = styled.div`
  width: 82px;
  height: 82px;
  background-size: cover;
  filter: drop-shadow(0px 8px 25px rgba(224, 219, 196, 0.9));
  border-radius: 20px;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledName = styled.div`
  color: var(--text-color);
  font-family: var(--font);
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
`;

export const StyledHeader = styled.h1`
  color: var(--text-color);
  font-family: var(--font);
  font-size: 36.413px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin: 0;
  margin-bottom: 40px;
`;

export const StyledLine = styled.div`
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  padding: 17px 0;
`;

export const StyledHr = styled.hr`
  max-width: 1200px;
  margin: auto;
  border: 1px solid #f1f2f3;
`;

export const StyledText = styled.div`
  color: var(--text-color);
  font-family: var(--font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledTotalCount = styled.span`
  color: #bebebe;
  font-family: var(--font);
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const StyledCheckout = styled.div`
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;
