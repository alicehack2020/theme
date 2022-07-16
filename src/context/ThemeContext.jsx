import React, { createContext, useState } from 'react'
export const ThemeContext=createContext()
const ThemeContextProvider = ({children}) => {
    const [theme,setTheme]=useState("black")
    
    const toggleTheme=()=>{
        setTheme(theme=='black'?'white':'black')
    }
  return (
     <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
     </ThemeContext.Provider>
  )
}

export default ThemeContextProvider