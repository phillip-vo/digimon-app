const fetch = require("node-fetch")

const getAllDigimonData = async () => {
  const response = await fetch(`https://digimon-api.vercel.app/api/digimon`)
  const digimons = await response.json()
  return digimons
}

exports.createPages = async ({ actions: { createPage } }) => {
  const allDigimon = await getAllDigimonData()

  // Create a page that list all Digimon
  createPage({
    path: `/digimons`,
    component: require.resolve("./src/templates/digimons.js"),
    context: { allDigimon },
  })

  // Create a page for each digimon
  allDigimon.forEach(digimon => {
    createPage({
      path: `/digimons/${digimon.name}`,
      component: require.resolve("./src/templates/digimon.js"),
      context: { digimon },
    })
  })
}
