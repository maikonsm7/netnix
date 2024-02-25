import { Link, useParams } from "react-router-dom"
import styles from './Episodio.module.css'

const Episodio = () => {
    const { index } = useParams()

    return (
        <div className={`mb-5 ${styles.panel}`}>
            <Link className="btn btn-success" to={`/series/${index}`}>Voltar</Link>
            <div className={`ratio ratio-16x9 mt-3 mx-auto d-block ${styles.frame}`}>
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Episodio