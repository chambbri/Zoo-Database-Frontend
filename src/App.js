import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import animals from './pages/animals';
import employees from './pages/employees';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the West Coast Best Coast Zoo</h1>
        <Router>
          <Route path="/animals" element={< animals/>}></Route>
          <Route path="/animals" element={< employees/>}></Route>
        </Router>
        <Link to="/animals">Animals</Link>
        <Link to="/employees">Employees</Link>
      </header>
    </div>
  );
}

export default App;
