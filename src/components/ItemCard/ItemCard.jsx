import "./ItemCard.css";

function ItemCard({ item, handleCardPreview }) {
  return (
    <li
      className="itemCard__element"
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
