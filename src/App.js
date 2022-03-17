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
import EditEmployeePage from './pages/EditEmployeePage';
import EditAnimalPage from './pages/EditAnimalPage';
import EditServicePage from './pages/EditServicePage';
import EditAEServicePage from './pages/EditAEServicePage';
import Navbar from './components/NavBar/Navbar';
import { useState } from 'react';

function App() {
  const [exhibitToEdit, setExhibitToEdit] = useState();
  const [employeeToEdit, setEmployeeToEdit] = useState();
  const [animalToEdit, setAnimalToEdit] = useState();
  const [serviceToEdit, setServiceToEdit] = useState();
  const [a_e_serviceToEdit, setAEServiceToEdit] = useState();
  return (
    <div>
      <Navbar />
      <header className="App-header App">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/animals" element={<AnimalsPage setAnimalToEdit={setAnimalToEdit}/>} />
          <Route path="/edit-animal" element={<EditAnimalPage animalToEdit={animalToEdit}/>}/>
          <Route path="/employees" element={<EmployeesPage setEmployeeToEdit={setEmployeeToEdit} />} />
          <Route path="/edit-employee" element={<EditEmployeePage employeeToEdit={employeeToEdit}/>}/>
          <Route path="/exhibits" element={<ExhibitPage setExhibitToEdit={setExhibitToEdit}/>} />
          <Route path="/edit-exhibit" element={<EditExhibitPage exhibitToEdit={exhibitToEdit}/>}/>
          <Route path="/services" element={<ServicesPage setServiceToEdit={setServiceToEdit}/>} />
          <Route path="/edit-service" element={<EditServicePage serviceToEdit={serviceToEdit}/>} />
          <Route path="/animal-employee-services" element={<A_E_ServicesPage setAEServiceToEdit={setAEServiceToEdit}/>} />
          <Route path="/edit-animal-employee-service" element={<EditAEServicePage a_e_serviceToEdit={a_e_serviceToEdit}/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
