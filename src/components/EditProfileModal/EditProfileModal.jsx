import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({
  isOpen,
  onCloseModal,
  handleChangeProfileData,
}) => {
  const { name, avatar } = useContext(CurrentUserContext) || {};
  const { values, handleChange, setValues } = useForm({});

  const handleReset = () => {
    setValues({ name, avatar });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChangeProfileData(values);
  };

  useEffect(() => {
    handleReset();
  }, [isOpen]);

  return (
    <ModalWithForm
      type="form"
      title="Change profile data"
      buttonText="Save changes"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <fieldset className="modal__fieldset">
        <div className="modal__input">
          <label className="modal__input_label" htmlFor="name">
            Name*
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
            maxLength={30}
            required
          />
        </div>
        <div className="modal__input">
          <label className="modal__input_label" htmlFor="avatar">
            Avatar*
          </label>
          <input
            type="url"
            placeholder="Avatar URL"
            name="avatar"
            className="form__input modal__input_user-input"
            id="avatar"
            value={values["avatar"] || ""}
            onChange={handleChange}
            required
          />
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default EditProfileModal;