import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const NavLink = styled(Link)`
  color: ${({ page }) => (page ? "#F5F5F5" : "#2C2D3C")};
`

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
        <NavLink page={page} to="/">
          Home
        </NavLink>
        <NavLink page={page} to="/about">
          About
        </NavLink>
        <NavLink page={page} to="/digimons">
          Digimons
        </NavLink>
      </div>
    </nav>
  )
}
