import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  styled,
  stepConnectorClasses,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const steps = ["Submitted", "Review", "Quote", "Bind", "Issue", "Renew"];

// Пунктирна лінія між кроками
const DashedConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20,
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderTopStyle: "dashed",
    borderTopWidth: 2,
    borderColor: "#8A8B98",
  },
  [`&.Mui-active .${stepConnectorClasses.line}`]: {
    borderColor: "#3BB979",
  },
  [`&.Mui-completed .${stepConnectorClasses.line}`]: {
    borderColor: "#3BB979",
  },
}));

// Кастомна іконка
const StepIconRoot = styled("div")(({ ownerState }) => ({
  width: 33,
  height: 33,
  borderRadius: "50%",
  border: `2px solid ${
    ownerState.active || ownerState.completed ? "#3BB979" : "#8A8B98"
  }`,
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: ownerState.active || ownerState.completed ? "#3BB979" : "#8A8B98",
}));

const CustomStepIcon = (props) => {
  const { active, completed } = props;

  return (
    <StepIconRoot ownerState={{ active, completed }}>
      <CheckIcon fontSize="small" />
    </StepIconRoot>
  );
};

// Головний компонент
export const StepperButtons = ({ activeStep }) => {
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      connector={<DashedConnector />}
      sx={{
        width: "100%",
        "& .MuiStepLabel-label": {
          mt: 1,
          fontSize: 14,
          color: "#E5E7EB", // <- колір лейблів
        },
      }}
    >
      {steps.map((label, index) => (
        <Step key={label}>
          <StepLabel
            icon={
              <CustomStepIcon
                active={activeStep === index}
                completed={activeStep > index}
              />
            }
          >
            <p style={{ color: "#E5E7EB", fontSize: "22px" }}>{label}</p>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
