import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const AddItemModal = ({ isOpen, onAdditem, onCloseModal }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [weatherType, setWeatherType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value);
  };

  const handleReset = () => {
    setName("");
    setLink("");
    setWeatherType("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdditem({ name, weatherType, link });
    onCloseModal();
  };

  useEffect(() => {
    handleReset();
  }, [isOpen]);

  return (
    <ModalWithForm
      type="form"
      title="New garment"
      buttonText="Add garment"
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
            value={name}
            onChange={handleNameChange}
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
            name="url"
            className="form__input modal__input_user-input"
            id="image"
            value={link}
            onChange={handleLinkChange}
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
              name="weather"
              className="modal__input_radio"
              value="hot"
              checked={weatherType === "hot"}
              onChange={handleWeatherTypeChange}
            />
            <label className="modal__input_label" htmlFor="hot">
              Hot
            </label>
          </div>
          <div className="modal__input_select">
            <input
              type="radio"
              id="warm"
              name="weather"
              className="modal__input_radio"
              value="warm"
              checked={weatherType === "warm"}
              onChange={handleWeatherTypeChange}
            />
            <label className="modal__input_label" htmlFor="warm">
              Warm
            </label>
          </div>
          <div className="modal__input_select">
            <input
              type="radio"
              id="cold"
              name="weather"
              className="modal__input_radio"
              value="cold"
              checked={weatherType === "cold"}
              onChange={handleWeatherTypeChange}
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
