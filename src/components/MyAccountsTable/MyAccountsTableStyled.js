import styled from "@emotion/styled";
export const Box = styled.div`
  padding: 25px 22px;
  background-color: #1e2233;
  border-radius: 15px;
  border: 1px solid #313b54;
  width: 100%;
`;

export const FlexBoxLarge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
  @media screen and (min-width: 1550px) {
    flex-direction: row;
    gap: 8px;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Title = styled.h1`
  font-size: 22px;
  color: #e5e7eb;
`;
export const SearchBox = styled.div`
  height: 28px;
  width: 250px;
`;
