import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

const AddItemModal = ({ isOpen, onAdditem, onCloseModal, isLoading }) => {
  const { values, handleChange, setValues } = useForm({});

  const handleReset = () => {
    setValues({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdditem(values);
  };

  useEffect(() => {
    handleReset();
  }, [isOpen]);

  return (
    <ModalWithForm
      type="form"
      title="New garment"
      buttonText={isLoading ? "Saving" : "Add garment"}
      onClose={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <fieldset className="modal__fieldset">
        <div className="modal__input">
          <label className="modal__input_label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="form__input modal__input_user-input"
            id="name"
            value={values["name"] || ""}
            onChange={handleChange}
            minLength={2}
            maxLength={10}
            required
          />
        </div>
        <div className="modal__input">
          <label className="modal__input_label" htmlFor="image">
            Image
          </label>
          <input
            type="url"
            placeholder="Image URL"
            name="link"
            className="form__input modal__input_user-input"
            id="image"
            value={values["link"] || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="modal__input">
          <legend className="modal__input_legend">
            Select the weather type:
          </legend>
          <div className="modal__input_select">
            <input
              type="radio"
              id="hot"
              name="weatherType"
              className="modal__input_radio"
              value="hot"
              checked={values["weatherType"] === "hot"}
              onChange={handleChange}
            />
            <label className="modal__input_label" htmlFor="hot">
              Hot
            </label>
          </div>
          <div className="modal__input_select">
            <input
              type="radio"
              id="warm"
              name="weatherType"
              className="modal__input_radio"
              value="warm"
              checked={values["weatherType"] === "warm"}
              onChange={handleChange}
            />
            <label className="modal__input_label" htmlFor="warm">
              Warm
            </label>
          </div>
          <div className="modal__input_select">
            <input
              type="radio"
              id="cold"
              name="weatherType"
              className="modal__input_radio"
              value="cold"
              checked={values["weatherType"] === "cold"}
              onChange={handleChange}
            />
            <label className="modal__input_label" htmlFor="cold">
              Cold
            </label>
          </div>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
