export type ItemFormProps = {
  initial?: { title: string; subtitle: string };
  onCancel: () => void;
  onSubmit: (data: { title: string; subtitle: string }) => void;
  submitLabel?: string;
};
