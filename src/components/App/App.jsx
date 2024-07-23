import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { weatherApi, processWeatherData } from "../../utils/weatherApi.js";
import { APIKey, coordinates } from "../../utils/constants.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import { defaultClothingItems } from "../../utils/constants.js";

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

  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

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

  const handleAddItemSumbit = ({ name, weatherType, link }) => {
    clothingItems.forEach((obj) => {
      obj._id += 1;
    });
    const item = {
      _id: 0,
      name: name,
      weather: weatherType,
      link: link,
    };

    setClothingItems([item, ...clothingItems]);
    console.log(clothingItems);
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
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleCardPreview={handleCardPreview}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>

          <Footer />

          <AddItemModal
            onCloseModal={handleCloseModal}
            isOpen={activeModal === "add-garment"}
            onAdditem={handleAddItemSumbit}
          />

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
