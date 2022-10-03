import React from "react"
import * as styles from "../styles/card.module.css"

export default function Card({ name, img, level }) {
  return (
    <div className={styles.card}>
      <img src={img} alt={name} />
      <div className={styles.info}>
        <h1>{name}</h1>
        <h2>{level}</h2>
      </div>
    </div>
  )
}
