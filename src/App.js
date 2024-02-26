import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import Series from './pages/Series'
import Filmes from './pages/Filmes'
import Serie from './pages/Serie'
import Episodio from './pages/Episodio'
import { SeriesContext } from './hooks/SeriesContext';
import AdmSeries from './pages/AdmSeries';
import AdmFilmes from './pages/AdmFilmes';
import { useContext, useEffect } from 'react'
import { SeriesListContext } from './hooks/SeriesContext'
import {useFetch} from './hooks/useFetch'

const url = "http://192.168.100.11:3001/serie/page/1"

function App() {
  const [contextSeries, setContextSeries] = useContext(SeriesListContext)
  // custon hook
  const {data} = useFetch(url)

  useEffect(()=>{
    setContextSeries(data)
  },[data])

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
        <Route path={'/admin/series'} element={<AdmSeries />}/>
        <Route path={'/admin/filmes'} element={<AdmFilmes />}/>
        </Routes>
      </div>
      </BrowserRouter>
      </SeriesContext>
    </div>
  );
}

export default App;
