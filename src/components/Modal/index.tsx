import type { ModalProps } from "../../types";

import { CloseButton, Header, ModalBox, Overlay, Title } from "./styles";

export default function Modal({ open, title, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </Header>
        {children}
      </ModalBox>
    </Overlay>
  );
}
