import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

function ItemCard({ item, handleCardPreview, handleLike }) {
  const currentUser = useContext(CurrentUserContext) || {};

  const isOwn = item.owner === currentUser._id;
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const id = item._id;

  return (
    <li
      className={`itemCard__element ${
        isOwn ? "itemCard__element_visible" : "itemCard__element_hidden"
      }`}
    >
      <div className="itemCard__title-and-btn">
        <h2 className="itemCard__title">{item.name}</h2>
        <button
          type="button"
          className={isLiked ? "itemCard__btn-like" : "itemCard__btn-dislike"}
          onClick={() => {
            handleLike({ id, isLiked });
          }}
        ></button>
      </div>

      <img
        src={item.imageUrl}
        alt={item.weather}
        className="itemCard__image"
        onClick={() => {
          handleCardPreview(item);
        }}
      />
    </li>
  );
}

export default ItemCard;
