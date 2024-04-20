export default function Pizza({ pizzaData }) {
  return (
    <li className="pizza">
      <img width={"200px"} src={pizzaData.photoName} alt={pizzaData.name} />
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        <p>{pizzaData.price}</p>
        <p>{pizzaData.soldOut}</p>
      </div>
    </li>
  );
}
