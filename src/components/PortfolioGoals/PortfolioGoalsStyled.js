import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 23px 110px 23px;
  background-color: #1e2233;
  border-radius: 15px;
  border: 1px solid #313b54;
  max-width: 285px;
  min-width: 260px;
`;

export const Title = styled.h1`
  font-size: 22px;
  color: #e5e7eb;
  margin-bottom: 28px;
  text-align: left;
  max-width: 240px;
`;

export const Text = styled.p`
  font-size: 12px;
  color: #e5e7eb;
  margin-bottom: 10px;
  text-align: left;
  max-width: 240px;
  text-transform: uppercase;
`;

export const ImageBox = styled.div`
  width: 100%;
  margin-bottom: 35px;
  @media screen and (min-width: 1500px) {
  min-width: 210px;
    max-width: 238px;
 
`;

export const GridBox = styled.div`
  display: grid;
  row-gap: 40px;
`;
