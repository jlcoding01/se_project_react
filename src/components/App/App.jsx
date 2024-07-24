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
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal.jsx";
import { getData, addData, deleteData } from "../../utils/api.js";

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

  const [clothingItems, setClothingItems] = useState([]);

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

  const handleOpenConfirmationModal = () => {
    setActiveModal("confirmation");
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
    // clothingItems.forEach((obj) => {
    //   obj._id += 1;
    // });
    // const item = {
    //   _id: 0,
    //   name: name,
    //   weather: weatherType,
    //   imageUrl: link,
    // };
    addData({ name, weatherType, link }).then((item) => {
      console.log(item);
      setClothingItems([item, ...clothingItems]);
    });
  };

  const handleCardDelete = () => {
    deleteData(cardData._id).then(() => {
      const result = clothingItems.filter((item) => item._id !== cardData._id);
      setClothingItems(result);
    });

    handleCloseModal();
  };

  useEffect(() => {
    getData()
      .then((data) => {
        setClothingItems(data.reverse());
      })
      .catch(console.error);
  }, []);

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
                  handleAddBtn={handleAddBtn}
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
            handleOpenConfirmationModal={handleOpenConfirmationModal}
          />

          <ConfirmationModal
            activeModal={activeModal}
            handleCloseModal={handleCloseModal}
            handleCardDelete={handleCardDelete}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
