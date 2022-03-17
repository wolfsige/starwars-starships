import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Starships from './pages/Starships/Starships';
import StarshipPage from './pages/StarshipPage/StarshipPage';

function App() {
  return (
    <>
    <h1>Star Wars Starships</h1>
    <Routes>
      <Route path="/" element={<Starships />} />
      <Route path="/starship" element={<StarshipPage />}/>
    </Routes>
    </>
  );
}

export default App;
