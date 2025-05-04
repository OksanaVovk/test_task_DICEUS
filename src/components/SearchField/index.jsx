import { StyledInput } from "./SearchFieldStyled";
export const SearchField = ({ value, onChange }) => {
  return <StyledInput placeholder="Search" value={value} onChange={onChange} />;
};
