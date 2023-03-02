import { Link } from "react-router-dom";
import Auth from "./Auth";

const Header = () => {
  return (
    <header>
      <h1 >
        <Link class="titulo" to={"/"}>AppEnlaces</Link>
      </h1>
      <nav>
        <Auth />
      </nav>
    </header>
  );
};
export default Header;
