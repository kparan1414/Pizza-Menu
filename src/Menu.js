import Pizza from "./Pizza";
export default function Menu({ data }) {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>Some gibberish regarding pizza place motto</p>
      <ul className="pizzas">
        {data.map((pizza) => {
          return <Pizza key={pizza.name} pizzaData={pizza} />;
        })}
      </ul>
    </div>
  );
}
