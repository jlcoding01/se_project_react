import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ClothesSection.css";

function ClothesSection({
  handleCardPreview,
  clothingItems,
  handleAddBtn,
  handleLike,
}) {
  const currentUser = useContext(CurrentUserContext);
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
          {clothingItems
            .filter((item) => item.owner === currentUser._id)
            .map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                handleCardPreview={handleCardPreview}
                handleLike={handleLike}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ClothesSection;
