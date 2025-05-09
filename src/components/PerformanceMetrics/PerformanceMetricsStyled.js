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

export const ItemDiv = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3b82f6;
`;

export const Title = styled.h1`
  font-size: 20px;
  @media screen and (min-width: 1500px) {
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

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 27px 20px 27px;
  background-color: #1e2233;
  border-radius: 15px;
  border: 1px solid #313b54;
  width: 100%;
  height: 190px;
  gap: 10px;
  @media screen and (min-width: 1500px) {
    min-height: 239px;
  }
`;

export const ItemBox1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 27px 20px 27px;
  background-color: #1e2233;
  border-radius: 15px;
  border: 1px solid #313b54;
  gap: 10px;
  height: 190px;
  min-height: 0;
  @media screen and (min-width: 1500px) {
    height: 190px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

export const PerformanceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin-bottom: 30px;
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 350px 350px 350px 471px;
  gap: 15px;
  width: max-content;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #3b82f6 transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3b82f6;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
  @media screen and (min-width: 1500px) {
    grid-template-columns: auto auto auto auto;
    overflow-x: unset;
  }
`;
