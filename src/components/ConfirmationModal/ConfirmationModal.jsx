import "./ConfirmationModal.css";

function ConfirmationModal({
  activeModal,
  handleCloseModal,
  handleCardDelete,
}) {
  return (
    <div
      className={`modal modal_type_confirmation ${
        activeModal === "confirmation" && "modal_opened"
      }`}
    >
      <div className="modal__container modal__container_type_confirmation">
        <button className="modal__btn-close" onClick={handleCloseModal} />
        <p className="modal__confirmation_header">
          Are you sure you want to delete this item? <br />
          This action is irreversible.
        </p>
        <button
          className="modal__confirmation_btn-confirm"
          onClick={handleCardDelete}
        >
          Yes, delete item
        </button>
        <button
          className="modal__confirmation_btn-cancel"
          onClick={handleCloseModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
