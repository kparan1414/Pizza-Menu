export default function Pizza({
  name,
  ingredients,
  price,
  photoName,
  soldOut,
}) {
  return (
    <div className="pizza">
      <img width={"200px"} src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>{price}</p>
        <p>{soldOut}</p>
      </div>
    </div>
  );
}
