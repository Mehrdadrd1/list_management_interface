import type { DeleteConfirmProps } from "../../types";
import { Actions, Button, Message, Wrapper } from "./styles";

export default function DeleteConfirm({
  itemTitle,
  onCancel,
  onConfirm,
}: DeleteConfirmProps) {
  return (
    <Wrapper>
      <Message>
        Are you sure you want to delete <strong>"{itemTitle}"</strong>?
      </Message>

      <Actions>
        <Button type="button" onClick={onCancel} variant="secondary">
          Cancel
        </Button>
        <Button type="button" onClick={onConfirm} variant="danger">
          Delete
        </Button>
      </Actions>
    </Wrapper>
  );
}
