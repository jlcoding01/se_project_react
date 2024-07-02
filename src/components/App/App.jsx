import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { weatherApi, processWeatherData } from "../../utils/weatherApi.js";
import { APIKey, coordinates } from "../../utils/constants.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });

  useEffect(() => {
    weatherApi(coordinates, APIKey)
      .then((data) => {
        const processedData = processWeatherData(data);
        console.log(processedData);
        setWeatherData(processedData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header weatherData={weatherData} />
        <Main weatherData={weatherData} />
        <Footer />
        <ModalWithForm name="form" title="New garment" buttonText="Add Garment">
          <fieldset className="modal__fieldset">
            <div className="modal__input">
              <label className="modal__input_label">Name</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="modal__input_user-input"
                required
              />
            </div>
            <div className="modal__input">
              <label className="modal__input_label">Image</label>
              <input
                type="url"
                placeholder="Image URL"
                name="url"
                className="modal__input_user-input"
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
                <label className="modal__input_label">Hot</label>
              </div>
              <div className="modal__input_select">
                <input
                  type="radio"
                  id="warm"
                  name="weather"
                  className="modal__input_radio"
                  value="warm"
                />
                <label className="modal__input_label">Warm</label>
              </div>
              <div className="modal__input_select">
                <input
                  type="radio"
                  id="cold"
                  name="weather"
                  className="modal__input_radio"
                  value="cold"
                />
                <label className="modal__input_label">Cold</label>
              </div>
            </div>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          link="https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591"
          title="Cap"
          name="image"
          weather="hot"
        ></ItemModal>
      </div>
    </div>
  );
}

export default App;
