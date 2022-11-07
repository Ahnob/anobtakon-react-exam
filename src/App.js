import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Bomb from "./components/ErrorComponent";

function App() {
  return (
    <div className="App">
      <Link to="/about" className="Link-style">
        useReducer
      </Link>
      <Link to="/" className="Link-style">
        CustomCounter
      </Link>
      <Link to="/error" className="Link-style">
        ErrorBoundary
      </Link>
      <Link to="*" className="Link-style">
        404 page
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/error" element={<Bomb />} />
      </Routes>
    </div>
  );
}

export default App;
