import React, { createContext, useState } from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout({ children, page }) {
  return (
    <div className="layout">
      <Navbar page={page} />
      <div className="content">{children}</div>
    </div>
  )
}
