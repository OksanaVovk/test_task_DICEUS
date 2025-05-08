import styled from "@emotion/styled";
export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 1500px) {
    font-size: 32px;
  }
`;

export const StatusBox = styled.p`
  display: inline-flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 15px;
  background-color: #3b82f6;
`;

export const Text1 = styled.p`
  font-size: 22px;
`;

export const Text2 = styled.p`
  font-size: 16px;
  color: ${({ isHighlighted }) => (isHighlighted ? "#E5E7EB" : " #8a8b98")};
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const StyledSvg = styled.svg`
  width: 12px;
  height: 13px;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  flex-direction: row;
  gap:10px;
  font-size: 14px;
  color: #E5E7EB;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  border-radius: 50px;
  background-color: #315A45;
  cursor: pointer;
  
  &:hover,
  &:focus,
  &:active {
    background-color: #234F39;
 
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #252a3d;
  padding: 25px 30px;
  border-radius: 15px;
  gap: 20px;
  border: ${({ isBordered }) => (isBordered ? "2px solid #1E40AF" : "none")};
  @media screen and (min-width: 1500px) {
    break-inside: avoid;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const GridBox = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 1500px) {
    display: block;
    column-count: 2;
    column-gap: 20px;
  }
`;

export const SearchBox = styled.div`
  height: 28px;
  width: 250px;
`;
