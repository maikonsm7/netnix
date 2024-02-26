import { useContext } from 'react'
import { SeriesListContext } from '../hooks/SeriesContext'

const AdmSeries = () => {
    const {contextSeries} = useContext(SeriesListContext)
    return (
        <div>
            <h4>Manter Séries</h4>
            <div className='d-flex justify-content-md-end'>
            <button className="btn btn-primary" type="button">Adicionar Série</button>
            </div>
            <table className="table table-striped mt-2">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {contextSeries && contextSeries.map(serie => (
                        <tr key={serie.id}>
                        <td>{serie.title}</td>
                        <td>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn btn-danger btn-sm" type="button">Deletar</button>
                                <button className="btn btn-secondary btn-sm" type="button">Editar</button>
                                <button className="btn btn-secondary btn-sm" type="button">Temporadas</button>
                                <button className="btn btn-secondary btn-sm" type="button">Episódios</button>
                            </div>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default AdmSeries