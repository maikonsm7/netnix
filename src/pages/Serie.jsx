import { useParams, Link } from "react-router-dom"
import { useContext } from 'react'
import { SeriesListContext } from '../hooks/SeriesContext'

const Serie = () => {
    const {index} = useParams()
    const {contextSeries} = useContext(SeriesListContext)
    
    return(
        <div>
            <div>
                    <img src={contextSeries[index].src} alt={contextSeries[index].title}/>
                    <h4>{contextSeries[index].title}</h4>
                    <p>{contextSeries[index].qtdSe} Episódios</p>
                    {[...Array(contextSeries[index].qtdSe)].map((item, index) => (
                        <div key={index}>
                        <p>Temporada {index}</p>
                        <p><Link to={"/series/"+index+"/1/1"}>Episodio 1</Link></p>
                        </div>
                        ))}
            </div>
            <Link to="/series">Voltar</Link>
        </div>
    )
}

export default Serie