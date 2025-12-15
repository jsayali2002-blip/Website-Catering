import "./DishCard.scss";

export default function DishCard({ name, description, price, image }) {
  return (
    <div className="dish-card">
      <img src={image} alt={name} />
      <div className="dish-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="price">RS {price}</p>
      </div>
    </div>
  );
}
