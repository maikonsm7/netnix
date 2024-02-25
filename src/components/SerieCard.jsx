import { useNavigate } from 'react-router-dom'
import styles from './SerieCard.module.css'

const SerieCard = ({ series }) => {
    const navigate = useNavigate()

    const click = (index) => {
        navigate(`/series/${index}`)
    }
    return (
        <div className="row row-cols-2 row-cols-md-4">
            {series.map((serie, index) => (
                <div className="col p-2">
                    <div key={serie.id} className={`card ${styles.customCard}`} onClick={() => click(index)}>
                    <div className={`rounded-top mx-auto d-block mt-2 ${styles.img}`} style={{ backgroundImage: `url(${serie.src})`}}></div>
                        {/* <img src={serie.src} className="card-img-top rounded-top mx-auto d-block mt-2" alt={serie.title} /> */}
                        <div className="card-body">
                            <span className="card-text fw-bold">{serie.title}</span> <br/>
                            <span className="text-muted">{serie.qtdSe} Temporadas</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SerieCard