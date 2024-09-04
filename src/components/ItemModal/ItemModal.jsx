import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemModal.css";

function ItemModal({
  type,
  cardData,
  handleCloseModal,
  activeModal,
  handleOpenConfirmationModal,
}) {
  const { _id } = useContext(CurrentUserContext) || {};

  const isOwn = cardData.owner === _id;

  return (
    <div
      className={`modal modal_type_${type} ${
        activeModal === "preview" && "modal_opened"
      }`}
    >
      <div className={`modal__container_type_${type}`}>
        <button
          className={`modal__btn-close_${type}`}
          onClick={handleCloseModal}
        ></button>
        <img
          src={cardData.imageUrl}
          alt={cardData.name}
          className="modal__image"
        />
        <p className="modal__img_title">{cardData.name}</p>
        <p className="modal__img_content">Weather: {cardData.weather}</p>
        <button
          className={`modal__btn-delete ${
            isOwn ? "modal__btn-delete_visible" : "modal__btn-delete_hidden"
          }`}
          onClick={handleOpenConfirmationModal}
        >
          Delete item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
