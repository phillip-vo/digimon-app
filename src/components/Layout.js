import React, { createContext, useState } from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

export const HomePageContext = createContext({
  isHomePage: false,
  setIsHomePage: () => {},
})

export default function Layout({ children, page }) {
  const [isHomePage, setIsHomePage] = useState(false)

  return (
    <HomePageContext.Provider value={{ isHomePage, setIsHomePage }}>
      <div className="layout">
        <Navbar page={page} />
        <div className="content">{children}</div>
      </div>
    </HomePageContext.Provider>
  )
}
