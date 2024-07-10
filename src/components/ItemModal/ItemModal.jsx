import "./ItemModal.css";

function ItemModal({ type, cardData, handleCloseModal, activeModal }) {
  return (
    <div
      className={`modal modal_type_${type} ${
        activeModal === "preview" && "modal_opened"
      }`}
    >
      <div className={`modal__container modal__container_type_${type}`}>
        <button
          className={`modal__btn-close modal__btn-close_${type}`}
          onClick={handleCloseModal}
        ></button>
        <img src={cardData.link} alt={cardData.name} className="modal__image" />
        <p className="modal__img_title">{cardData.name}</p>
        <p className="modal__img_content">Weather: {cardData.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
