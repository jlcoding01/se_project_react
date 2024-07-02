import "./ItemModal.css";

function ItemModal(props) {
  return (
    <div className={`modal modal_type_${props.name}`}>
      <div className={`modal__container modal__container_type_${props.name}`}>
        <button
          className={`modal__btn-close modal__btn-close_${props.name}`}
          onClick={props.onClose}
        ></button>
        <img src={props.link} alt={props.title} className="modal__image" />
        <p className="modal__img_title">{props.title}</p>
        <p className="modal__img_content">{props.weather}</p>
      </div>
    </div>
  );
}

export default ItemModal;
