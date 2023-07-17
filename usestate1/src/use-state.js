import React, { useState } from "react";

const Usestateex = () => {
  // const tempList = [
  //   {
  //     text: "hello",
  //     id: "sfgrgr",
  //   },
  //   {
  //     text: "hello world",
  //     id: "sfgrgr1",
  //   },
  // ];

  const [list, setList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    id: "",
  });

  const changeMessage = (e) => {
    setMessage({ ...message, text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    console.log("previous Todos", newTodo);
    setList([...list, newTodo]);
    setMessage({
      text: "",
      id: "",
    });
  };

  const [editItem, setEditItem] = useState({
    id: "",
    isEditing: false,
  });

  const handleDelete = (id) => {
    console.log(id);
    let newTodos = list.filter((eachitem) => {
      return eachitem.id != id;
    });
    setList(newTodos);
  };

  const handleEdit = (id) => {
    // console.log(id);
    setEditItem({
      ...editItem,
      id: id,
      isEditing: true,
    });
    let editableItem = list.find((eachItem) => eachItem.id === id);
    console.log(editableItem);
    setMessage({
      text: editableItem.text,
      id: editItem.id,
    });
  };

  const handleEditInForm = (e) => {
    e.preventDefault();
    let newTodos = list.map((eachItem) => {
      if (eachItem.id === editItem.id) {
        return {
          text: message.text,
          id: editItem.id,
        };
      } else {
        return eachItem;
      }
    });
    setList(newTodos);
    setMessage({
      text: "",
      id: "",
    });
    setEditItem({
      isEditing: false,
      id: "",
    });
    console.log("new Todo's:", newTodos);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Enter some text"
          value={message.text}
          onChange={changeMessage}
        />
        {editItem.isEditing ? (
          <button onClick={handleEditInForm} type="submit">
            edit
          </button>
        ) : (
          <button onClick={handleSubmit} type="submit">
            add
          </button>
        )}
      </form>
      <hr />
      {list.length === 0 && <h1>There is no items in the Todos</h1>}
      <ul>
        {list.map((eachitem) => {
          const { text, id } = eachitem;
          return (
            <li key={id}>
              <div>{text}</div>{" "}
              <button onClick={() => handleEdit(id)}>edit</button>
              <button onClick={() => handleDelete(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Usestateex;
