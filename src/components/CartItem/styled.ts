import styled from "styled-components";

export const StyledItem = styled.div`
  display: flex;
  gap: 20px;
  max-width: 900px;
  margin-bottom: 27px;
`;

export const StyledImage = styled.div`
  width: 82px;
  height: 82px;
  background-size: cover;
  filter: drop-shadow(0px 8px 25px rgba(224, 219, 196, 0.9));
  border-radius: 20px;
`;

export const StyledActions = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: flex-start;
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

export const StyledPrice = styled.div`
  color: var(--primary-color);
  font-family: var(--font);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 29px;
  height: 29px;
  cursor: pointer;
`;

export const StyledPlus = styled(StyledButton)`
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
`;

export const StyledMinus = styled(StyledButton)`
  background: none;
  border: 1px solid var(--primary-color);
`;

export const StyledRemove = styled(StyledButton)`
  background: none;
  border: none;
`;

export const StyledNumber = styled.div`
  color: var(--text-color);
  font-family: var(--font);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StyledIcon = styled.img`
  width: 100%;
  height: 100%;
`;
