import { createContext, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [subcard, setSubcard] = useState([]);
  const [edit, setEdit] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Function to add a new sub-card
  const addCard = () => {
    setSubcard([...subcard, { id: Date.now(), text: `Sub-Card ${subcard.length + 1}` }]);
  };

  // Function to delete a sub-card
  const deleteCard = (id) => {
    setSubcard(subcard.filter((card) => card.id !== id));
  };

  // Function to enable editing mode
  const startEditing = (id, text) => {
    setEditingIndex(id);
    setEdit(text);
  };

  // Function to save edited text
  const saveEdit = (id) => {
    setSubcard(subcard.map((card) => (card.id === id ? { ...card, text: edit } : card)));
    setEditingIndex(null);
  };

  return (
    <CardContext.Provider value={{ subcard, edit, editingIndex, setEdit, addCard, deleteCard, startEditing, saveEdit }}>
      {children}
    </CardContext.Provider>
  );
};
