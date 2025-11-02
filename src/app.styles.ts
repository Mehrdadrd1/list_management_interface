import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #f5f5f5;
  padding: 24px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  width: 100%;
  padding: 24px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
`;

export const CreateButton = styled.button`
  background: #16a34a;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  &:hover {
    background: #15803d;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ListItem = styled.li`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Info = styled.div`
  flex: 1;
`;

export const DateText = styled.div`
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 4px;
`;

export const ItemTitle = styled.div`
  color: #4b5563;
  font-weight: 600;
`;

export const Subtitle = styled.div`
  color: #4b5563;
  font-size: 0.9rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditButton = styled.button`
  border: 1px solid #2564eb;
  color: #2c41cc;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  background: white;
  &:hover {
    background: #bbe0ff;
  }
`;

export const DeleteButton = styled(EditButton)`
  color: #dc2626;
  border-color: #fca5a5;
  &:hover {
    background: #fee2e2;
    border-color: #fca5a5;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 0;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
