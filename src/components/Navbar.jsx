import "../css/Mnavbar.css";
import CartWidget from "./CartWidget";
const Navbar = () => {
  return (
    <nav classname="nav-container">
      <a classname="anchor-nav" href="">
        <img src="../qf.jpg" alt="logo" classname="logo" />
      </a>
      <a classname="anchor-nav" href="">
        Frutas
      </a>
      <a classname="anchor-nav" href="">
        Verduras
      </a>
      <a classname="anchor-nav" href="">
        Pedidos
      </a>
      <a classname="anchor-nav" href="">
        ¿Quienes somos?
      </a>
      <CartWidget counter={5} />
    </nav>
  );
};
export default Navbar;
