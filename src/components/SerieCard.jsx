import styles from './SerieCard.module.css'
import { useNavigate } from 'react-router-dom'

const SerieCard = ({series}) => {
    const navigate = useNavigate()

    const click = (index) => {
        navigate(`/series/${index}`)
    }
    return(
        <div>
            {series.map( (serie, index) => (
                <div key={serie.id} className={styles.card} onClick={() => click(index)}>
                    <img src={serie.src} alt={serie.title}/>
                    <h4>{serie.title}</h4>
                    <p>{serie.qtdSe} Temporadas</p>
                </div>
            ))}
        </div>
    )
}

export default SerieCard