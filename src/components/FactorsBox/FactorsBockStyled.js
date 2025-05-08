import styled from "@emotion/styled";

export const Text2 = styled.p`
  font-size: 16px;
  color: ${({ isHighlighted }) => (isHighlighted ? "#E5E7EB" : " #8a8b98")};
`;

export const Text1 = styled.p`
  font-size: 22px;
  color: #e5e7eb;
`;

export const CircleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  border: 2px solid;
  border-color: ${({ border }) => (border ? `${border}` : `#3BB979`)};
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
`;
