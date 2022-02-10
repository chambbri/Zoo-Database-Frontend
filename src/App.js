import './App.css';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AnimalsPage from './pages/AnimalsPage';
import EmployeesPage from './pages/EmployeesPage';
import HomePage from './pages/HomePage';
import ExhibitPage from './pages/ExhibitPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/exhibits" element={<ExhibitPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
