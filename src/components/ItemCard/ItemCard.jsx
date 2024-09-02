import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

function ItemCard({ item, handleCardPreview }) {
  const currentUser = useContext(CurrentUserContext) || {};

  const isOwn = item.owner === currentUser._id;

  return (
    <li
      className={`itemCard__element ${
        isOwn ? "itemCard__element_visible" : "itemCard__element_hidden"
      }`}
      onClick={() => {
        handleCardPreview(item);
      }}
    >
      <h2 className="itemCard__title">{item.name}</h2>
      <img src={item.imageUrl} alt={item.weather} className="itemCard__image" />
    </li>
  );
}

export default ItemCard;
