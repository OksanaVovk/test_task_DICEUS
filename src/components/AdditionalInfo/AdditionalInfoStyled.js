import styled from "@emotion/styled";

export const ModalWindow = styled.div`
  background-color: #252a3d;
  color: #E5E7EB;
  padding: 30px 40px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  min-height: 300px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  display: flex;
  align-items: center;
  justify-content: center;
  
  }
`;

export const ModalButton = styled("button")`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: 2px solid #3b82f6;
  color: #3b82f6;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #3b82f6;
    color: #252a3d;
  }
`;

export const Title = styled("h1")`
  font-size: 24px;
  color: #e5e7eb;
`;
