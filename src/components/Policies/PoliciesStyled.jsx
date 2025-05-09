import styled from "@emotion/styled";

export const PoliciesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin-bottom: 30px;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  padding: 34px 19px;
  background-color: #1e2233;
  border-radius: 15px;
  border: 1px solid #313b54;
  width: 100%;
  gap: 10px;
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
  width: 311px;
  gap: 5px;
`;

export const Title = styled.h1`
  font-size: 20px;
  @media screen and (min-width: 1500px) {
    font-size: 32px;
  }
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
  width: 24px;
  height: 24px;
`;

export const Text1 = styled.p`
  font-size: 22px;
`;
export const Text2 = styled.p`
  font-size: 16px;
  color: #8a8b98;
`;
