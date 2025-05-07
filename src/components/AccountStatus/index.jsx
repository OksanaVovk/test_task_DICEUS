import { StepperButtons } from "../Stepper";
import { Box, Title, SmallBox } from "./AccountsStatusStyled";

export const AccountsStatus = () => {
  return (
    <Box>
      <Title>Account Status</Title>
      <SmallBox>
        <StepperButtons activeStep={4} />
      </SmallBox>
    </Box>
  );
};
