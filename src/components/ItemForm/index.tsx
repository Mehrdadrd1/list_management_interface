import { useEffect, useState } from "react";

import type { ItemFormProps } from "../../types";
import { Actions, Button, Error, Form, Input, Label } from "./styles";

export default function ItemForm({
  initial,
  onCancel,
  onSubmit,
  submitLabel = "Save",
}: ItemFormProps) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [subtitle, setSubtitle] = useState(initial?.subtitle ?? "");
  const [error, setError] = useState("");

  useEffect(() => {
    setTitle(initial?.title ?? "");
    setSubtitle(initial?.subtitle ?? "");
  }, [initial]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    onSubmit({ title: title.trim(), subtitle: subtitle.trim() });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Title
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        {error && <Error>{error}</Error>}
      </Label>

      <Label>
        Subtitle
        <Input
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          placeholder="Enter subtitle"
        />
      </Label>

      <Actions>
        <Button type="button" onClick={onCancel} variant="secondary">
          Cancel
        </Button>
        <Button type="submit">{submitLabel}</Button>
      </Actions>
    </Form>
  );
}
