import Backdrop from "./Backdrop";

const Modal = ({ toggleModal, onDelete, id }) => {
  return (
    <div>
      <div className="modal">
        Are you sure
        <button className="btn btn--alt" onClick={() => onDelete(id)}>
          Cancel
        </button>
        <button className="btn" onClick={toggleModal}>
          Confirm
        </button>
      </div>
      <Backdrop />
    </div>
  );
};

export default Modal;
