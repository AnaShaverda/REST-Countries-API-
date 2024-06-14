import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CountryPage from './ClientApp/Pages/Desktop/Countries/CountryPage';
import Header from './ClientApp/Components/Layout/Header/Header';
import CountryDetails from './ClientApp/Pages/Desktop/Countries/CountryDetails/CountryDetails';

function App() {
  return (
  <BrowserRouter>
       <Routes>
        <Route path="/" element={<Header/>}>
        <Route index element={<CountryPage />} />
        <Route path="country/:countryCode" element={<CountryDetails />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
