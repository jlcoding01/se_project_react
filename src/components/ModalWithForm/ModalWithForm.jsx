import "./ModalWithForm.css";

function ModalWithForm(props) {
  return (
    <div className={`modal modal_type_${props.name}`}>
      <div className="modal__container">
        <button className="modal__btn-close" onClick={props.onClose}></button>
        <p className="modal__title">{props.title}</p>
        <form className="modal__form">{props.children}</form>
        <button className="modal__btn-submit" type="submit">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
