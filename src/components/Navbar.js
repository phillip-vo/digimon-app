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
        <Link
          style={page === "home" ? { color: "#F5F5F5" } : { color: "#2C2D3C" }}
          activeClassName="active"
          to="/"
        >
          Home
        </Link>
        <Link
          style={page === "home" ? { color: "#F5F5F5" } : { color: "#2C2D3C" }}
          activeClassName="active"
          to="/about"
        >
          About
        </Link>
        <Link
          style={page === "home" ? { color: "#F5F5F5" } : { color: "#2C2D3C" }}
          activeClassName="active"
          to="/digimons"
        >
          Digimons
        </Link>
      </div>
    </nav>
  )
}
