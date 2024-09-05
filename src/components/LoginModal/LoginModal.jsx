import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useEffect, useState } from "react";

const LoginModal = ({
  isOpen,
  onCloseModal,
  handleLogin,
  isLoading,
  handleToggleLogin,
}) => {
  const { values, handleChange, setValues } = useForm({});

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (values.email && values.password) {
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
      buttonText={isLoading ? "Saving" : "Log In"}
      redirectText="or Sign Up"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      onClick={handleToggleLogin}
      isFormValid={isFormValid}
    >
      <fieldset className="modal__fieldset">
        <div className="modal__input">
          <label className="modal__input_label" htmlFor="login-email">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="form__input modal__input_user-input"
            id="login-email"
            value={values["email"] || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="modal__input">
          <label className="modal__input_label" htmlFor="login-password">
            Password
          </label>
          <input
            type="text"
            placeholder="Password"
            name="password"
            className="form__input modal__input_user-input"
            id="login-password"
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
