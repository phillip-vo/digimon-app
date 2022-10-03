import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Navbar() {
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
        <Link activeClassName="active" to="/">
          Home
        </Link>
        <Link activeClassName="active" to="/about">
          About
        </Link>
        <Link activeClassName="active" to="/digimons">
          Digimons
        </Link>
      </div>
    </nav>
  )
}
