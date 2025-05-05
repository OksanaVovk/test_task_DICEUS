import styled from "@emotion/styled";

export const FlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > p {
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

export const Text1 = styled.p`
  font-size: 10px;
`;

export const LossRatioBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 23px;
  border-radius: 15px;
`;

export const TriageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 23px;
  border-radius: 15px;
  border: 1px solid #3b82f6;
  color: #3b82f6;
`;

export const Text2 = styled.p`
  text-transform: uppercase;
  font-size: 9px;
`;
