import styled from "@emotion/styled";

export const ListBox = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 3px;
  }
`;

export const ItemBox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3b82f6;
`;

export const Title = styled.h1`
  font-size: 20px;
  @media screen and (min-width: 1550px) {
    font-size: 32px;
  }
`;

export const Text1 = styled.p`
  font-size: 22px;
`;

export const Text2 = styled.p`
  font-size: 42px;
  line-height: 25px;
`;
export const Text3 = styled.span`
  font-size: 22px;
  color: #8a8c98;
`;

export const Text4 = styled.p`
  font-size: 16px;
`;

export const FlexBox3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 27px 20px 27px;
  background-color: #1e2233;
  border-radius: 15px;
  border: 1px solid #313b54;
  min-height: 239px;

  width: 100%;
  gap: 10px;
`;

export const FlexBox4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
`;

export const FlexBox2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

export const FlexBox1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  width: 100%;

  @media screen and (min-width: 1550px) {
    grid-template-columns: auto auto auto 471px;
  }
`;
