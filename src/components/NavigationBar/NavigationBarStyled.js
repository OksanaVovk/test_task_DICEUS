import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ScrollBox = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  scroll-behavior: smooth;
  max-width: 100%;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 9px;
  }
`;

export const ButtonArrow = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 47px;
  height: 47px;
  border: 1px solid #313b54;
  color: #c5cad3;
  cursor: pointer;

  &:hover,
  &:focus {
  border: 1px solid  #3b82f6;
  color: #3b82f6;
`;

export const Svg = styled.svg`
  width: 19px;
  color: currentColor;
`;

export const ButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ButtonItem = styled.li`
  &:not(:last-child) {
    margin-right: 13px;
  }
`;
