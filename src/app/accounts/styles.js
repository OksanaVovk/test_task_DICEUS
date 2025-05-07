import styled from "@emotion/styled";
import Link from "next/link";

export const PageBox = styled.div`
  padding: 20px 50px;

  @media screen and (min-width: 1550px) {
    padding: 20px 100px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 16px;
  color: #e5e7eb;
  margin-bottom: 8px;
`;

export const StyledLink = styled(Link)`
  font-size: 18px;
  color: #3b82f6;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #1e40af;
    text-decoration: underline;
  }
`;
