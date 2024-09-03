import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import * as auth from "../../utils/auth.js";
import {
  getData,
  addData,
  deleteData,
  addCardLike,
  removeCardLike,
} from "../../utils/api.js";

function App() {
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();

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

  const [isLoading, setIsLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    avatar: "",
    _id: "",
  });

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

  const handleOpenRigisterModal = () => {
    setActiveModal("signup");
  };

  const handleOpenLoginModal = () => {
    setActiveModal("login");
  };

  const handleOpenEditProfileModal = () => {
    setActiveModal("edit");
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
    // const jwt = localStorage.getItem("jwt");

    addData(name, weatherType, link, jwt)
      .then((item) => {
        console.log(item);
        setClothingItems([item, ...clothingItems]);
        setIsLoading(true);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleCardDelete = () => {
    // const jwt = localStorage.getItem("jwt");

    deleteData(cardData._id, jwt)
      .then(() => {
        const result = clothingItems.filter(
          (item) => item._id !== cardData._id
        );
        setClothingItems(result);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleRegistration = ({ name, email, password, avatar }) => {
    if (!name || !email || !password || !avatar) {
      return;
    }
    auth
      .register(name, email, password, avatar)
      .then(() => {
        setCurrentUser({ name, email, password, avatar });
        setIsLoggedIn(true);
        navigate("/");
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth.authorize(email, password).then((res) => {
      console.log(res);
      if (res.jwt) {
        localStorage.setItem("jwt", res.jwt);
        setCurrentUser(res.user);
        setIsLoggedIn(true);
        navigate("/");
        handleCloseModal();
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate("/");
  };

  const handleChangeProfileData = ({ name, avatar }) => {
    if (!name || !avatar) {
      return;
    }
    auth
      .updateUserInfo(name, avatar, jwt)
      .then((res) => {
        setCurrentUser(res);
        handleCloseModal();
      })
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    !isLiked
      ? addCardLike(id, jwt)
          .then((updateCard) => {
            setClothingItems((cards) => {
              return cards.map((item) => (item._id === id ? updateCard : item));
            });
          })
          .catch(console.error)
      : removeCardLike(id, jwt)
          .then((updateCard) => {
            setClothingItems((cards) => {
              return cards.map((item) => (item._id === id ? updateCard : item));
            });
          })
          .catch(console.error);
  };

  useEffect(() => {
    // const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      return;
    }

    auth
      .getUserInfo(jwt)
      .then(({ name, email, avatar, _id }) => {
        setIsLoggedIn(true);
        setCurrentUser({ name, email, avatar, _id });
        navigate("/");
      })
      .catch(console.error);
  }, []);

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
    if (!activeModal) return;

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
    };

    document.addEventListener("mousedown", handleClickClose);

    window.addEventListener("keydown", handleEscClose);
    return () => {
      window.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleClickClose);
    };
  }, [activeModal]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
              isLoggedIn={isLoggedIn}
              handleOpenRigisterModal={handleOpenRigisterModal}
              handleOpenLoginModal={handleOpenLoginModal}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardPreview={handleCardPreview}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleCardPreview={handleCardPreview}
                      clothingItems={clothingItems}
                      handleAddBtn={handleAddBtn}
                      handleOpenEditProfileModal={handleOpenEditProfileModal}
                      onCardLike={handleCardLike}
                      handleLogout={handleLogout}
                    />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <Footer />

            <AddItemModal
              onCloseModal={handleCloseModal}
              isOpen={activeModal === "add-garment"}
              onAdditem={handleAddItemSumbit}
              isLoading={isLoading}
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

            <RegisterModal
              onCloseModal={handleCloseModal}
              isOpen={activeModal === "signup"}
              handleRegistration={handleRegistration}
            />

            <LoginModal
              onCloseModal={handleCloseModal}
              isOpen={activeModal === "login"}
              handleLogin={handleLogin}
            />

            <EditProfileModal
              onCloseModal={handleCloseModal}
              isOpen={activeModal === "edit"}
              handleChangeProfileData={handleChangeProfileData}
            />
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
