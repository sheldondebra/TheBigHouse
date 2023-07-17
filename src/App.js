import "./App.css";
import MoviePage from "./components/MoviesPage";
import Movies from "./components/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
