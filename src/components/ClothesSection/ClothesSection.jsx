import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ handleCardPreview, clothingItems }) {
  return (
    <div className="clothesSection">
      <div className="clothesSection__text">
        <p className="clothesSection__text_header">Your items</p>
        <button className="clothesSection__text_btn">+ Add new</button>
      </div>
      <div className="clothesSection__cards">
        <ul className="clothesSection__container">
          {clothingItems.map((item) => (
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
