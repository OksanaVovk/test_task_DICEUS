import styled from "@emotion/styled";
export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 1500px) {
    font-size: 32px;
  }
`;

export const Text1 = styled.p`
  font-size: 22px;
  text-transform: uppercase;
`;
export const TextBox = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 40px;
  background: #252a38;
  padding: 2px
  font-size: 22px;
  border-radius: 10px;
 flex-shrink: 0;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const Text2 = styled.p`
  font-size: 16px;
  color: #e5e7eb;
`;

export const ColumnBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const ColumnBox1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 30px;
  background-color: #252a3d;
  border-radius: 15px;
  gap: 30px;
  min-width: 200px;
`;

export const FlexBox2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 25px;
  @media screen and (min-width: 1500px) {
    flex-direction: column;
    align-items: stretch;
    max-width: 400px;
    margin-bottom: 0;
    padding-right: 20px;
    border-right: 2px dashed #8a8b98;
  }
`;

export const FlexBox1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 25px 30px;
  background-color: #1e2233;
  border-radius: 15px;
  border: 1px solid #313b54;
  width: 100%;
  gap: 30px;

  @media screen and (min-width: 1500px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start;
    gap: 20px;

`;

export const Box = styled.div`
  margin-bottom: 25px;
  width: 100%;
`;
