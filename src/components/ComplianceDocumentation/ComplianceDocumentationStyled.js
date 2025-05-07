import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  height: 100%;
`;

export const SmallBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 12px 24px;
  justify-content: start;
  padding: 40px 25px;
  background-color: #1e2233;
  border-radius: 15px;
  border: 1px solid #313b54;
  width: 100%;
  min-height: 159px;
`;

export const StyledSvg = styled.svg`
  width: 20px;
  height: 20px;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const Title = styled.h1`
  font-size: 20px;
  @media screen and (min-width: 1500px) {
    font-size: 32px;
  }
`;
