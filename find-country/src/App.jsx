import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CountryProvider from './context/CountryProvider';
import CountryDetails from './pages/CountryDetails';

function App() {
  return (
    <CountryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/country/:name" element={<CountryDetails />}></Route>
        </Routes>
      </Router>
    </CountryProvider>
  );
}

export default App;
