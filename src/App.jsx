import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/header/Home";
import Movies from "./components/pages/Movies";
import TvShows from "./components/pages/TvShows";
import People from "./components/pages/People";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tvShows" element={<TvShows />} />
      <Route path="/people" element={<People />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
