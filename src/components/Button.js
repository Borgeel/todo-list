import { useState } from "react";

// Components
import Modal from "./Modal";

const Button = ({ onDelete, id }) => {
  const [modalIsShown, setModalIsShown] = useState(false);

  // Toggle Modal
  const toggleModal = () => {
    setModalIsShown(!modalIsShown);
  };

  return (
    <div className="actions">
      <button className="btn" onClick={toggleModal}>
        Delete
      </button>
      {modalIsShown && (
        <Modal toggleModal={toggleModal} onDelete={onDelete} id={id} />
      )}
    </div>
  );
};

export default Button;
