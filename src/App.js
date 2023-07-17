import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Slider from "./components/Slider";
import MoviePage from "./components/MoviesPage";
import Movies from "./components/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={Movies} />
          <Route path="/movies/:id" element={MoviePage} />
        </Routes>
      </BrowserRouter>
      <Header />
      <Slider />
      <Body />
    </div>
  );
}

export default App;
