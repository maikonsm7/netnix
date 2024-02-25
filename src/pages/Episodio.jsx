import { Link, useParams } from "react-router-dom"

const Episodio = () => {
    const { index } = useParams()

    return(
        <div>
            <p>Reproduzir...</p>
            <Link className="btn btn-success" to={`/series/${index}`}>Voltar</Link>
        </div>
    )
}

export default Episodio