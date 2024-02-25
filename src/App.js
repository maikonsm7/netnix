import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import Series from './pages/Series'
import Filmes from './pages/Filmes'
import Serie from './pages/Serie'
import Episodio from './pages/Episodio'
import { SeriesContext } from './hooks/SeriesContext';

function App() {
  return (
    <div className="container">
      <SeriesContext>
      <BrowserRouter>
      <NavBar />
      <div style={{marginTop: '100px'}}>
      <Routes>
        <Route path={'/series'} element={<Series />}/>
        <Route path={'/filmes'} element={<Filmes />}/>
        <Route path={'/series/:index'} element={<Serie />}/>
        <Route path={'/series/:index/:temporada/:episodio'} element={<Episodio />}/>
        </Routes>
      </div>
      </BrowserRouter>
      </SeriesContext>
    </div>
  );
}

export default App;
