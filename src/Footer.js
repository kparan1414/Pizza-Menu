export default function Footer() {
  const hours = new Date().getHours();
  const isOpen = hours >= 12 && hours <= 22;
  console.log(isOpen);

  return <footer>{new Date().toLocaleTimeString()}.Footer Text</footer>;
}
