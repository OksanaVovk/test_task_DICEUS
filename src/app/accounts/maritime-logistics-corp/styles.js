import styled from "@emotion/styled";

export const FlexBox1 = styled.div`
  margin: 20px 0 30px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1550px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`;
