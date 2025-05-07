import styled from "@emotion/styled";

export const HomePageBox = styled.div`
  padding: 20px 50px;

  @media screen and (min-width: 1500px) {
    padding: 20px 100px;
  }
`;

export const Box1 = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media screen and (min-width: 1500px) {
    display: flex;
    flex-direction: row;
    gap: 17px;
    align-items: stretch;
  }
`;

export const Box2 = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  gap: 17px;
  align-items: stretch;
`;

export const Box3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
