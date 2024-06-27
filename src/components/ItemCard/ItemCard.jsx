import "./ItemCard.css";

function ItemCard(props) {
  return (
    <div className="itemCard">
      <p className="itemCard__content">
        {/* Today is 75° F / You may want to wear: */}
        {props.children}
      </p>
      <ul className="itemCard__container">
        <template className="itemCard-tamplate">
          <li className="itemCard__element">
            <p className="itemCard__title">{props.name}</p>
            <img
              src={props.link}
              alt="itemCard__image"
              className="itemCard__image"
            />
          </li>
        </template>
        <li className="itemCard__element">
          <p className="itemCard__title">T-Shirt</p>
          <img
            src="https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591"
            alt="itemCard__image"
            className="itemCard__image"
          />
        </li>
      </ul>
    </div>
  );
}

export default ItemCard;
