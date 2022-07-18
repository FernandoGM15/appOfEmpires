import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import CivilizationsList from "./components/civilizations/CivilizationsList";
import CivilizationForm from "./components/civilizations/CivilizationForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/civilizations' element={<CivilizationsList />} />
          <Route path='/create-civilization' element={<CivilizationForm />} />
          <Route path='/update-civilization/:id' element={<CivilizationForm />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
