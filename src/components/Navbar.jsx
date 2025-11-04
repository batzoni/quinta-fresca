import "../css/Mnavbar.css";
import CartWidget from "./CartWidget";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <a className="anchor-nav" href="">
        <img src="../qf.jpg" alt="logo" className="logo" />
      </a>
      <a className="anchor-nav" href="">
        Frutas
      </a>
      <a className="anchor-nav" href="">
        Verduras
      </a>
      <a className="anchor-nav" href="">
        Pedidos
      </a>
      <a className="anchor-nav" href="">
        ¿Quienes somos?
      </a>
      <CartWidget counter={5} />
    </nav>
  );
};
export default Navbar;
