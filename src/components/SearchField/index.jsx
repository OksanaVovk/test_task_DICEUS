import { StyledInput } from "./SearchFieldStyled";
export const SearchField = ({ value, onChange, background }) => {
  return (
    <StyledInput
      placeholder="Search"
      value={value}
      onChange={onChange}
      background={background}
    />
  );
};
