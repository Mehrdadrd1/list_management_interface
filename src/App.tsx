import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useLocalStorage } from "./hooks/useLocalStorage";
import type { Item } from "./types";
import {
  Actions,
  Container,
  CreateButton,
  DateText,
  DeleteButton,
  EditButton,
  EmptyState,
  Header,
  Info,
  ItemTitle,
  List,
  ListItem,
  Subtitle,
  Title,
  Wrapper,
} from "./app.styles";
import { ItemForm, Modal, DeleteConfirm } from "./components";

export default function App() {
  const [items, setItems] = useLocalStorage<Item[]>("list_items", []);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Item | null>(null);
  const [deleting, setDeleting] = useState<Item | null>(null);

  const sorted = useMemo(
    () => [...items].sort((a, b) => b.createdAt - a.createdAt),
    [items]
  );

  const openCreate = () => {
    setEditing(null);
    setDeleting(null);
    setModalOpen(true);
  };

  const openEdit = (item: Item) => {
    setEditing(item);
    setDeleting(null);
    setModalOpen(true);
  };

  const openDelete = (item: Item) => {
    setEditing(null);
    setDeleting(item);
    setModalOpen(true);
  };

  const handleCreate = (data: { title: string; subtitle: string }) => {
    const newItem: Item = {
      id: uuidv4(),
      title: data.title,
      subtitle: data.subtitle,
      createdAt: Date.now(),
    };
    setItems([newItem, ...items]);
    setModalOpen(false);
  };

  const handleUpdate = (data: { title: string; subtitle: string }) => {
    if (!editing) return;
    setItems(
      items.map((it) => (it.id === editing.id ? { ...it, ...data } : it))
    );
    setModalOpen(false);
  };

  const handleDelete = () => {
    if (!deleting) return;
    setItems(items.filter((it) => it.id !== deleting.id));
    setDeleting(null);
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>List Management</Title>
          <CreateButton onClick={openCreate}>Create</CreateButton>
        </Header>

        {items.length === 0 ? (
          <EmptyState>
            <p>No items yet.</p>
            <CreateButton onClick={openCreate}>
              Create your first item
            </CreateButton>
          </EmptyState>
        ) : (
          <List>
            {sorted.map((item) => (
              <ListItem key={item.id}>
                <Info>
                  <DateText>
                    {new Date(item.createdAt).toLocaleString()}
                  </DateText>
                  <ItemTitle>{item.title}</ItemTitle>
                  <Subtitle>{item.subtitle}</Subtitle>
                </Info>
                <Actions>
                  <EditButton onClick={() => openEdit(item)}>Edit</EditButton>
                  <DeleteButton onClick={() => openDelete(item)}>
                    Delete
                  </DeleteButton>
                </Actions>
              </ListItem>
            ))}
          </List>
        )}
      </Container>

      <Modal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? "Edit Item" : deleting ? "Delete Item" : "Create Item"}
      >
        {editing ? (
          <ItemForm
            initial={{
              title: editing.title,
              subtitle: editing.subtitle,
            }}
            onCancel={() => setModalOpen(false)}
            onSubmit={handleUpdate}
            submitLabel="Update"
          />
        ) : deleting ? (
          <DeleteConfirm
            itemTitle={deleting.title}
            onCancel={() => setModalOpen(false)}
            onConfirm={handleDelete}
          />
        ) : (
          <ItemForm
            onCancel={() => setModalOpen(false)}
            onSubmit={handleCreate}
            submitLabel="Create"
          />
        )}
      </Modal>
    </Wrapper>
  );
}
