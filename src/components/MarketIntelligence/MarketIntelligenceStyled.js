import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 23px 40px 23px;
  background-color: #1e2233;
  border-radius: 15px;
  border: 1px solid #313b54;
  max-width: 285px;
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #e5e7eb;
  margin-bottom: 21px;
  text-align: left;
  width: 240px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  line-height: 14px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 16px;
`;
