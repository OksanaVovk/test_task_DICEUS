import styled from "@emotion/styled";

export const FlexBoxRow = styled.div`
  display: inline-flex;
  gap: 7px;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  padding: 2px 5px;
  justify-content: space-between;
  & > p {
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

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
