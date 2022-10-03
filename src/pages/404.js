import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/404.module.css"

export default function NotFound() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>404</h1>
        <p>Sorry, that page doesn't exist</p>
        <StaticImage
          src="../images/digimon-404.png"
          alt="not found image"
          placeholder="blurred"
        />
      </div>
    </Layout>
  )
}
