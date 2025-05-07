import styled from "@emotion/styled";

export const FlexBox1 = styled.div`
  margin: 20px 0 30px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1500px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const FlexBox2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  align-items: stretch;
`;
