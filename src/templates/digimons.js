import React, { useState } from "react"
import Card from "../components/Card"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import * as styles from "../styles/digimons.module.css"

export default function Digimons({ pageContext: { allDigimon } }) {
  const digimons = allDigimon
  const [levelSearchTerm, setLevelSearchTerm] = useState("")
  const [nameSearchTerm, setNameSearchTerm] = useState("")

  const resetFilters = () => {
    setLevelSearchTerm("")
    setNameSearchTerm("")
  }

  return (
    <Layout>
      <div className={styles.search_wrapper}>
        <div className={styles.search_container}>
          <div className={styles.search_level}>
            <p>Filter By Level:</p>
            <input
              type="text"
              placeholder="e.g Fresh, In Training, Rookie, Champion, Ultimate, Mega"
              value={levelSearchTerm}
              onChange={e => setLevelSearchTerm(e.target.value)}
            />
          </div>
          <div className={styles.search_name}>
            <p>Filter By Name:</p>
            <input
              type="text"
              placeholder="e.g Agumon"
              value={nameSearchTerm}
              onChange={e => setNameSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <button onClick={resetFilters}>Reset Filters</button>
      </div>
      <div className={styles.container}>
        {digimons
          .filter(data => {
            if (levelSearchTerm === "") {
              return data
            } else if (
              data.level.toLowerCase().includes(levelSearchTerm.toLowerCase())
            ) {
              return data
            }
            return null
          })
          .filter(data => {
            if (nameSearchTerm === "") {
              return data
            } else if (
              data.name.toLowerCase().includes(nameSearchTerm.toLowerCase())
            ) {
              return data
            }
            return null
          })
          .map(digimon => (
            <Link
              className={styles.link_container}
              to={`/digimons/${digimon.name}`}
            >
              <Card
                img={digimon.img}
                name={digimon.name}
                level={digimon.level}
              />
            </Link>
          ))}
      </div>
    </Layout>
  )
}
