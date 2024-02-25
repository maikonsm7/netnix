import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import Series from './pages/Series'
import Filmes from './pages/Filmes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Series />}/>
        <Route path={'/filmes'} element={<Filmes />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
