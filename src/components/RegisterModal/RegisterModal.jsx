import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";

const RegisterModal = ({
  isOpen,
  onCloseModal,
  handleRegistration,
  isLoading,
  handleToggleLogin,
}) => {
  const { values, handleChange, setValues } = useForm({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (values.email && values.password && values.name && values.avatar) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [values]);

  const handleReset = () => {
    setValues({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(values);
    console.log(values);
  };

  useEffect(() => {
    handleReset();
  }, [isOpen]);

  return (
    <ModalWithForm
      type="form"
      title="Sign Up"
      buttonText={isLoading ? "Saving" : "Sign Up"}
      redirectText="or Log In"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      onClick={handleToggleLogin}
      isFormValid={isFormValid}
    >
      <fieldset className="modal__fieldset">
        <div className="modal__input">
          <label className="modal__input_label" htmlFor="email">
            Email*
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="form__input modal__input_user-input"
            id="email"
            value={values["email"] || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="modal__input">
          <label className="modal__input_label" htmlFor="password">
            Password*
          </label>
          <input
            type="text"
            placeholder="Password"
            name="password"
            className="form__input modal__input_user-input"
            id="password"
            value={values["password"] || ""}
            onChange={handleChange}
            required
          />
        </div>
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
            maxLength={10}
            required
          />
        </div>
        <div className="modal__input">
          <label className="modal__input_label" htmlFor="avatar">
            Avatar URL*
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

export default RegisterModal;
