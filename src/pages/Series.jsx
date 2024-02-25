import SeriesCard from '../components/SerieCard'
import { useContext } from 'react'
import { SeriesListContext } from '../hooks/SeriesContext'

const Series = () => {
    const {contextSeries} = useContext(SeriesListContext)
    return(
        <div>
            <h3>Séries</h3>
            <SeriesCard series={contextSeries}/>
        </div>
    )
}

export default Series