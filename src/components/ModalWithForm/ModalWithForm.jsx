import "./ModalWithForm.css";

function ModalWithForm(props) {
  return (
    <div
      className={`modal modal_type_${props.type} ${
        props.isOpen && "modal_opened"
      } `}
    >
      <div className={`modal__container modal__container_${props.type}`}>
        <button className="modal__btn-close" onClick={props.onClose} />
        <p className="modal__title">{props.title}</p>
        <form className="modal__form" onSubmit={props.onSubmit} noValidate>
          {props.children}
          <div className="modal__form_btn">
            <button
              className="modal__btn-submit"
              type="submit"
              disabled={!props.isFormValid}
            >
              {props.buttonText}
            </button>
            <button
              className="modal__btn-toggle"
              type="button"
              onClick={props.onClick}
            >
              {props.redirectText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
