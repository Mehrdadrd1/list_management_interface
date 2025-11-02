import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: 500;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 1rem;
`;

export const Error = styled.div`
  color: #e11d48;
  font-size: 0.85rem;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
`;

export const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid
    ${({ variant }) => (variant === "secondary" ? "#ccc" : "#2563eb")};
  background: ${({ variant }) =>
    variant === "secondary" ? "#fff" : "#2563eb"};
  color: ${({ variant }) => (variant === "secondary" ? "#333" : "white")};
  cursor: pointer;
  font-size: 0.95rem;
  &:hover {
    opacity: 0.9;
  }
`;
