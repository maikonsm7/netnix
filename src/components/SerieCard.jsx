import styles from './SerieCard.module.css'

const SerieCard = ({series}) => {
    return(
        <div style={styles}>
            {series.map( serie => (
                <p key={serie.id}>{serie.title}</p>
            ))}
        </div>
    )
}

export default SerieCard