import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({ handleCardPreview, clothingItems, handleAddBtn }) {
  return (
    <div className="clothesSection">
      <div className="clothesSection__text">
        <p className="clothesSection__text_header">Your items</p>
        <button className="clothesSection__text_btn" onClick={handleAddBtn}>
          + Add new
        </button>
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
