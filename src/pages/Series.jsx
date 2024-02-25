import styles from './Series.module.css'
import SeriesCard from '../components/SerieCard'

const Series = () => {
    const series = [
        {id: 1, title: 'Serie 1'},
        {id: 2, title: 'Serie 2'},
        {id: 3, title: 'Serie 3'}
    ]
    return(
        <div>
            <h3>Series</h3>
            <SeriesCard series={series}/>
        </div>
    )
}

export default Series