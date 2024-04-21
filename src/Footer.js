export default function Footer() {
  const hours = new Date().getHours();
  const isOpen = hours >= 12 && hours <= 22;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>Come visit us or order online</p>
          <button className="btn">Order now</button>
        </div>
      ) : (
        <p>We're closed now! Come back later between 12:00 & 22:00</p>
      )}
    </footer>
  );
}
