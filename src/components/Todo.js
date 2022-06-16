import { useState } from "react";

// Components
import Button from "./Button";
import Modal from "./Modal";

const Todo = ({ title, onDelete, id }) => {
  return (
    <div className="card">
      <h3> {title} </h3>
      <div className="actions">
        <Button onDelete={onDelete} id={id} />
      </div>
    </div>
  );
};

export default Todo;
