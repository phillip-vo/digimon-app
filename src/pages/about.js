import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>About Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in
          hendrerit gravida rutrum quisque. Tellus at urna condimentum mattis.
          Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Sed
          adipiscing diam donec adipiscing tristique risus nec feugiat. Massa
          massa ultricies mi quis hendrerit dolor magna. Eu lobortis elementum
          nibh tellus. Sed ullamcorper morbi tincidunt ornare. Scelerisque
          viverra mauris in aliquam. Vulputate ut pharetra sit amet. A arcu
          cursus vitae congue mauris rhoncus aenean vel. Tempus egestas sed sed
          risus pretium quam vulputate dignissim. Purus sit amet luctus
          venenatis. Ornare lectus sit amet est placerat in egestas. Pharetra
          convallis posuere morbi leo urna. Justo eget magna fermentum iaculis
          eu. Eu nisl nunc mi ipsum faucibus.
        </p>
        <StaticImage
          src="../images/digimon-sprites-v1.png"
          alt="digimon sprites"
          width={700}
          placeholder="blurred"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in
          hendrerit gravida rutrum quisque. Tellus at urna condimentum mattis.
          Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Sed
          adipiscing diam donec adipiscing tristique risus nec feugiat. Massa
          massa ultricies mi quis hendrerit dolor magna. Eu lobortis elementum
          nibh tellus. Sed ullamcorper morbi tincidunt ornare. Scelerisque
          viverra mauris in aliquam. Vulputate ut pharetra sit amet. A arcu
          cursus vitae congue mauris rhoncus aenean vel. Tempus egestas sed sed
          risus pretium quam vulputate dignissim. Purus sit amet luctus
          venenatis. Ornare lectus sit amet est placerat in egestas. Pharetra
          convallis posuere morbi leo urna. Justo eget magna fermentum iaculis
          eu. Eu nisl nunc mi ipsum faucibus.
        </p>
      </div>
    </Layout>
  )
}
