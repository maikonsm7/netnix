import { createContext, useState } from "react";

export const SeriesListContext = createContext()

export const SeriesContext = ({children}) => {
    const [contextSeries, setContextSeries] = useState([])
    return(
        <SeriesListContext.Provider value={{contextSeries}}>
            {children}
        </SeriesListContext.Provider>
    )
}