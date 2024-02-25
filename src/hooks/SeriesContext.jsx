import { createContext } from "react";

export const SeriesListContext = createContext()

export const SeriesContext = ({children}) => {
    const contextSeries = [
        {id: 1, title: 'Game Of Thrones', qtdSe: 10, src: 'https://sm.ign.com/ign_pt/screenshot/default/blob_c7sh.jpg'},
        {id: 2, title: 'One Pierce', qtdSe: 15, src: 'https://onepieceex.net/wp-content/uploads/2023/02/One-Piece-Vol-105.jpg.webp'},
        {id: 3, title: 'Rivedile', qtdSe: 23, src: 'https://upload.wikimedia.org/wikipedia/pt/5/50/Riverdale_Temporada_1_Poster.jpg'}
    ]
    return(
        <SeriesListContext.Provider value={{contextSeries}}>
            {children}
        </SeriesListContext.Provider>
    )
}