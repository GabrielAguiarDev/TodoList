import { useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, name: string) => void;
};

export const ListItem = ({ item, onChange, onDelete, onEdit }: Props) => {
  const [fadeEdit, setFadeEdit] = useState(false);
  const [newText, setNewText] = useState(item.name)

  return (
    <C.Container done={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => onChange(item.id, e.target.checked)}
      />
      {fadeEdit !== true ? (
        <label>{item.name}</label>
      ) : (
        <input 
          type="text"
          value={newText} 
          onChange={e => setNewText(e.target.value)}
        />
      )}
      <div className={!fadeEdit ? "container-icons on" : "container-icons off"}>
        <i className="bx bx-pencil" onClick={() => {
          setFadeEdit(!fadeEdit)
          setNewText(item.name)
        }}></i>
        <i className="bx bxs-trash" onClick={() => onDelete(item.id)}></i>
      </div>
      <div className={fadeEdit ? "container-Edit on" : "container-Edit off"}>
        <i
          className="bx bxs-check-circle"
          onClick={(e) => {
            e.preventDefault()
            onEdit(item.id , newText)
            setFadeEdit(!fadeEdit);
          }}
        ></i>
        <i className="bx bx-x" onClick={() => setFadeEdit(!fadeEdit)}></i>
      </div>
    </C.Container>
  );
};
