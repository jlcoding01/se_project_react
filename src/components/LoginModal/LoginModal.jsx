import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";

const LoginModal = ({ isOpen, onCloseModal, handleLogin }) => {
  const { values, handleChange, setValues } = useForm({});

  const handleReset = () => {
    setValues({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
    console.log(values);
  };

  useEffect(() => {
    handleReset();
  }, [isOpen]);

  return (
    <ModalWithForm
      type="form"
      title="Log In"
      buttonText="Log In"
      redirectText="or Sign Up"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <fieldset className="modal__fieldset">
        <div className="modal__input">
          <label className="modal__input_label" htmlFor="email">
            Email
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
            Password
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
      </fieldset>
    </ModalWithForm>
  );
};

export default LoginModal;
