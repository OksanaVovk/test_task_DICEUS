import { ButtonBlue } from "../ButtonBlue";
import { Box, Title, List, Item } from "./QuickActionsStyled";
const buttons = [
  "New Submission",
  "Quote Builder",
  "Risks Models",
  "Documents Upload",
];

export const QuickActions = () => {
  return (
    <Box>
      <Title>Quick actions</Title>
      <List>
        {buttons.map((button, index) => (
          <Item key={index}>
            <ButtonBlue text={button} width={240} />
          </Item>
        ))}
      </List>
    </Box>
  );
};
