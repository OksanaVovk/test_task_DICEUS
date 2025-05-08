import styled from "@emotion/styled";
export const FlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledSvg = styled.svg`
  width: 15px;
  height: 17px;
`;

export const IconBox = styled("div")(({ color }) => ({
  width: 24,
  height: 24,
  borderRadius: "50%",
  backgroundColor: color || "#3B82F6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Text = styled.p`
  font-size: 10px;
  color: #8b94a7;
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
 flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  gap: 5px;
`;

export const LossRatioBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 23px;
  border-radius: 15px;
`;
