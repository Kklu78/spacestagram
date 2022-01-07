import React, { useState } from 'react'
export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('')

  
    async function apiSearch(x = new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().slice(0,10), y = 'Last 7 Days') {
        setLoading(true)
        const url = `https://api.nasa.gov/planetary/apod?start_date=${x}&api_key=${process.env.REACT_APP_NASA_API}`
        const response = await fetch(url)
        const data = await response.json()
        setPosts(data)
        setLoading(false)
        setTitle(y)
    }

    return (
		<AppContext.Provider value={{
            apiSearch,
            loading,
            posts,
            title
		}}>{children}</AppContext.Provider>
	)

}


