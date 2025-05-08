import styled from "@emotion/styled";
export const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 25px;
`;

export const Text1 = styled.p`
  font-size: 22px;
  color: #e5e7eb;
`;

export const Text2 = styled.p`
  font-size: 16px;
  color: ${({ isHighlighted }) => (isHighlighted ? "#E5E7EB" : " #8a8b98")};
`;

export const RowBox1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 25px 30px;
  background-color: #252a3d;
  border-radius: 15px;
  min-height: 135px;
  min-width: 300px;
  gap: 5px;
`;

export const FlexBox1 = styled.div`
  display: grid;
  width: 100%;
  gap: 20px;
  margin-bottom: 25px;

  /* Макет: 2 блоки вгорі, 1 внизу по центру */
  grid-template-areas:
    "left right"
    "center center";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  justify-items: center; /* Центрує вміст усередині комірок */

  @media screen and (min-width: 1500px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
`;

export const StyledSvg = styled.svg`
  width: 26px;
  height: 26px;
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px 30px;
  background-color: #252a3d;
  border-radius: 15px;
  gap: 30px;
`;

export const RowBox2 = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  }
`;

export const FlexBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: 20px;
  margin-bottom: 25px;
  @media screen and (min-width: 1500px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    gap: 40px;
  }
`;
