import styled from "@emotion/styled";

export const ImageBox = styled.div`
  width: 102px;
  height: 102px;
`;

export const Title = styled.p`
  font-size: 24px;
  @media screen and (min-width: 1550px) {
    font-size: 36px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
`;

export const TextUpper = styled.p`
  font-size: 11px;
  text-transform: uppercase;
  color: #94a3b8;
`;
export const FlexBox1 = styled.div`
  display: flex;
  flex-direction: row;

  gap: 20px;
`;
export const FlexBox2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;
export const FlexBox3 = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const FlexBox4 = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2px;

  &:not(:first-of-type) {
    padding-left: 5px;
    border-left: 1px solid #313b54;
  }
`;
