import './App.css';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AnimalsPage from './pages/AnimalsPage';
import EmployeesPage from './pages/EmployeesPage';
import HomePage from './pages/HomePage';
import ExhibitPage from './pages/ExhibitPage';
import ServicesPage from './pages/ServicesPage';
import A_E_ServicesPage from './pages/A_E_ServicesPage';
import EditExhibitPage from './pages/EditExhibitPage';
import Navbar from './components/NavBar/Navbar';
import { useState } from 'react';

function App() {
  const [exhibitToEdit, setExhibitToEdit] = useState();
  return (
    <div>
      <Navbar />
      <header className="App-header App">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/exhibits" element={<ExhibitPage setExhibitToEdit={setExhibitToEdit}/>} />
          <Route path="/edit-exhibit" element={<EditExhibitPage exhibitToEdit={exhibitToEdit}/>}/>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/animal-employee-services" element={<A_E_ServicesPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
