import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Navbar({ page }) {
  return (
    <nav>
      <StaticImage
        src="../images/digimon-logo-v2-dark.png"
        alt="digimon logo"
        placeholder="blurred"
        layout="fixed"
        width={400}
        className="logo"
      />
      <div className="links">
        <Link className={page === "home" ? "light" : "dark"} to="/">
          Home
        </Link>
        <Link className={page === "home" ? "light" : "dark"} to="/about">
          About
        </Link>
        <Link className={page === "home" ? "light" : "dark"} to="/digimons">
          Digimons
        </Link>
      </div>
    </nav>
  )
}
