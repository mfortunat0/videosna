import style from "./App.module.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { FaWhatsapp } from "react-icons/fa6";

function App() {
  return (
    <main className={style.AppMainContainer}>
      <a href="https://wa.me/+5512991458637" target="_blank">
        <button className={style.FloatButton}>
          <FaWhatsapp />
        </button>
      </a>
      <nav>
        <ul>
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <a href="#servicos">
            <li>Serviços</li>
          </a>
          <a href="#sobre">
            <li>Sobre</li>
          </a>
          <a href="#contato">
            <li>Contatos</li>
          </a>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
