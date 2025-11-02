import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Message = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const Button = styled.button<{ variant?: "secondary" | "danger" }>`
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  border: 1px solid
    ${({ variant }) => (variant === "secondary" ? "#ccc" : "#dc2626")};
  background: ${({ variant }) =>
    variant === "secondary" ? "#fff" : "#dc2626"};
  color: ${({ variant }) => (variant === "secondary" ? "#333" : "white")};
  &:hover {
    opacity: 0.9;
    border: 1px solid
      ${({ variant }) => (variant === "secondary" ? "#ccc" : "#dc2626")};
  }
`;
