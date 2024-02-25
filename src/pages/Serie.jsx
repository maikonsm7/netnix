import { useParams, Link } from "react-router-dom"
import { useContext } from 'react'
import { SeriesListContext } from '../hooks/SeriesContext'
import styles from './Serie.module.css'

const Serie = () => {
    const { index } = useParams()
    const { contextSeries } = useContext(SeriesListContext)

    return (
        <div className="mb-4">
            <div className="card mb-4 border-0">
                <div className="row g-0">
                    <div className="col-md-3 text-center">
                        <img src={contextSeries[index].src} className={`img-fluid rounded ${styles.img}`} alt={contextSeries[index].title} />
                    </div>
                    <div className="col">
                        <div className="card-body p-0">
                            <h4 className="card-title">{contextSeries[index].title}</h4>
                            <p className="card-text">Sinopse da série Sinopse da série Sinopse da série Sinopse da série Sinopse da série</p>
                            <p className="card-text"><small className="text-body-secondary">Lançamento 2020</small></p>
                            <Link className="btn btn-success" to="/series">Voltar</Link>
                        </div>
                    </div>
                </div>
            </div>

            <h4>Temporadas</h4>

            <div className="accordion" id="accordionSeries">
                {[...Array(contextSeries[index].qtdSe)].map((item, index) => (
                    <div key={index} className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false" data-bs-target={`#collapse${index}`} aria-controls={`collapse${index}`}>
                                Temporada {index + 1}
                            </button>
                        </h2>
                        <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionSeries">
                            <div className="accordion-body">
                                <Link to={"/series/" + index + "/1/1"}>Episodio 1</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Serie