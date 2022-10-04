import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const heroImage = data.file.childImageSharp.gatsbyImageData

  return (
    <Layout page="home">
      <GatsbyImage className={styles.hero} image={heroImage} alt="hero image" />
      <section className={styles.info}>
        <p>
          A simple application to fetch Digimons from an API by{" "}
          <a
            className={styles.accent}
            href="https://digimon-api.vercel.app/index.html"
          >
            Shadow Smith
          </a>
        </p>
        <Link className={styles.btn} to="/digimons">
          Get Digimon
        </Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetHero {
    file(relativePath: { eq: "digimon-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
