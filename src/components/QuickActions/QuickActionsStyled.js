import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 23px 16px 23px;
  background-color: #1e2233;
  border-radius: 15px;
  border: 1px solid #313b54;
  max-width: 285px;
  min-height: 264px;
  @media screen and (min-width: 1500px) {
    min-width: 260px;
  }
`;

export const Title = styled.h1`
  font-size: 22px;
  color: #e5e7eb;
  margin-bottom: 28px;
  text-align: left;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Item = styled.li`
  min-width: 210px;
  max-width: 240px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
