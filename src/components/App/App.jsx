import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { weatherApi, processWeatherData } from "../../utils/weatherApi.js";
import { APIKey, coordinates } from "../../utils/constants.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import Profile from "../Profile/Profile.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    daytime: "",
    weatherCondition: "",
    weatherId: 0,
  });

  const [activeModal, setActiveModal] = useState("");

  const [cardData, setCardData] = useState({});

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  const handleAddBtn = () => {
    setActiveModal("add-garment");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleCardPreview = (data) => {
    setActiveModal("preview");
    setCardData(data);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened((prev) => !prev);
  };

  const handelMenuAddBtn = () => {
    setActiveModal("add-garment");
    toggleMobileMenu();
  };

  const handleToggleSwitch = () => {
    currentTempUnit === "F" ? setCurrentTempUnit("C") : setCurrentTempUnit("F");
  };

  useEffect(() => {
    weatherApi(coordinates, APIKey)
      .then((data) => {
        const processedData = processWeatherData(data);
        setWeatherData(processedData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };
    const handleClickClose = (evt) => {
      if (
        evt.target !== evt.currentTarget &&
        evt.target.classList.contains("modal_opened")
      ) {
        handleCloseModal();
      }

      if (!activeModal) return;
    };

    document.addEventListener("mousedown", handleClickClose);

    window.addEventListener("keydown", handleEscClose);
    return () => {
      window.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleClickClose);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitch }}
      >
        <div className="page__content">
          <Header
            handleAddBtn={handleAddBtn}
            weatherData={weatherData}
            toggleMobileMenu={toggleMobileMenu}
            isMobileMenuOpened={isMobileMenuOpened}
            handelMenuAddBtn={handelMenuAddBtn}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardPreview={handleCardPreview}
                />
              }
            />
            <Route
              path="/profile"
              element={<Profile handleCardPreview={handleCardPreview} />}
            />
          </Routes>

          <Footer />
          <ModalWithForm
            type="form"
            title="New garment"
            buttonText="Add garment"
            onClose={handleCloseModal}
            isOpen={activeModal === "add-garment"}
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
                  className="modal__input_user-input"
                  id="name"
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
                  className="modal__input_user-input"
                  id="image"
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
                  />
                  <label className="modal__input_label" htmlFor="cold">
                    Cold
                  </label>
                </div>
              </div>
            </fieldset>
          </ModalWithForm>
          <ItemModal
            type="image"
            cardData={cardData}
            handleCloseModal={handleCloseModal}
            activeModal={activeModal}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
