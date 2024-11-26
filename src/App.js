import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Countries from './Countries';
import CountryDetails from './CountryDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:id" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
