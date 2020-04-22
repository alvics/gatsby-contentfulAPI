import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>
console.log(ComponentName)

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        price
        slug
        image {
          fluid {
            src
          }
        }
      }
    }
  }
`

export default ComponentName
