import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/digimon.module.css"

export default function Digimon({ pageContext: digimon }) {
  const digimonData = digimon.digimon
  return (
    <Layout>
      <div className={styles.info}>
        <h1>{digimonData.name}</h1>
        <h2>{digimonData.level}</h2>
      </div>
      <div className={styles.container}>
        <img src={digimonData.img} alt={digimonData.name} width={150} />
      </div>
      <Link to="/digimons" className={styles.back}>
        Back to all Digimons
      </Link>
    </Layout>
  )
}
