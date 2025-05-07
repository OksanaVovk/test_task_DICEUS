import { LinkNav, StyledSvg } from "./LinkToStyled";
export const LinkTo = ({ text }) => {
  return (
    <LinkNav href="/accounts/additional-info">
      <p> {text}</p>
      <StyledSvg>
        <use href="/icons.svg#icon-arrow-right" />
      </StyledSvg>
    </LinkNav>
  );
};
