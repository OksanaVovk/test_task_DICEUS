import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin-bottom: 30px;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 20px;
  @media screen and (min-width: 1500px) {
    font-size: 32px;
  }
`;

export const SmallBox = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 25px;
  background-color: #1e2233;
  border-radius: 15px;
  border: 1px solid #313b54;
  width: 100%;
  min-height: 159px;
`;
