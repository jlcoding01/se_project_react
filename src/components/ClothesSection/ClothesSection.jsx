import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants.js";

function ClothesSection({ handleCardPreview }) {
  return (
    <div className="clothesSection">
      <div className="clothesSection__text">
        <p className="clothesSection__text_header">Your items</p>
        <button className="clothesSection__text_btn">+ Add new</button>
      </div>
      <div className="clothesSection__cards">
        <ul className="clothesSection__container">
          {defaultClothingItems
            // .filter((data) => {
            //   return data.weather == weatherData.type;
            // })
            .map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                handleCardPreview={handleCardPreview}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ClothesSection;
