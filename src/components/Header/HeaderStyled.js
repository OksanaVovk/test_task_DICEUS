import styled from "@emotion/styled";

export const HeaderLargeBox = styled.div`
  border-bottom: 1px solid #313b54;
  padding: 0 50px;
  @media screen and (min-width: 1500px) {
    padding: 0 100px;
  }
`;

export const HeaderMiddleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  max-width: 1656px;
  @media screen and (min-width: 1500px) {
    height: 94px;
  }
`;

export const HeaderSmallBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderSearchBox = styled.div`
  margin-right: 10px;
  height: 28px;
  width: 280px;
  @media screen and (min-width: 1500px) {
    height: 48px;
    width: 479px;
  }
`;

export const HeaderAvatarBox = styled.div`
  height: 38px;
  width: 38px;
  @media screen and (min-width: 1500px) {
    height: 48px;
    width: 48px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  @media screen and (min-width: 1500px) {
    font-size: 32px;
  }
`;
