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
    // console.log(newTodo);
    setList([...list, newTodo]);
    setMessage({
      text: "",
      id: "",
    });
  };

  const handleDelete = (id) => {
    console.log(id);
    let newTodos = list.filter((eachitem) => {
      return eachitem.id != id;
    });
    setList(newTodos);
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
        <button onClick={handleSubmit} type="submit">
          add
        </button>
      </form>
      <hr />
      <ul>
        {list.map((eachitem) => {
          console.log(eachitem);
          const { text, id } = eachitem;
          return (
            <li key={id}>
              <div>{text}</div> <button>edit</button>
              <button onClick={() => handleDelete(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Usestateex;
