import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 1500px) {
    font-size: 32px;
  }
`;
export const SearchBox = styled.div`
  height: 28px;
  width: 250px;
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #1e2233;
  padding: 25px 30px;
  border-radius: 15px;
  gap: 20px;
  border: 1px solid #313b54;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
