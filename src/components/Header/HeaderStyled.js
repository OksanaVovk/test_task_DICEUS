import styled from "@emotion/styled";

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  border-bottom: 1px solid #313b54;
  padding: 0 50px;

  @media screen and (min-width: 1280px) {
    height: 94px;
    padding: 0 132px;
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
  height: 38px;
  width: 300px;
  @media screen and (min-width: 1024px) {
    height: 48px;
    width: 479px;
  }
`;

export const HeaderAvatarBox = styled.div`
  height: 38px;
  width: 38px;
  @media screen and (min-width: 1024px) {
    height: 48px;
    width: 48px;
  }
`;
