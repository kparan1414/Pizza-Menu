import Pizza from "./Pizza";
export default function Menu({ data }) {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>Some gibberish regarding pizza place motto</p>
      {data.map((pizza) => {
        return (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        );
      })}
    </div>
  );
}
