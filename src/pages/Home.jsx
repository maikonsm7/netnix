import styles from './Home.module.css'
import Series from '../components/SerieCard'

const Home = () => {
    const series = [
        {id: 1, title: 'Serie 1'},
        {id: 2, title: 'Serie 2'},
        {id: 3, title: 'Serie 3'}
    ]
    return(
        <div>
            <h3>Home</h3>
            <Series series={series}/>
        </div>
    )
}

export default Home