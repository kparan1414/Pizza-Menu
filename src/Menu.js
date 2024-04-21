import Pizza from "./Pizza";
export default function Menu({ data }) {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {data.length ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic & all delicious.
          </p>
          <ul className="pizzas">
            {data.map((pizza) => {
              return <Pizza key={pizza.name} pizzaData={pizza} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're working on our menu</p>
      )}
    </div>
  );
}
