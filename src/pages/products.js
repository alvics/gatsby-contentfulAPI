// CONTENTFUL API REQUESTS EXAMPLES
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ProductComponent = ({ data }) => {
  // destructor the nodes array and store in products variable
  const {
    allContentfulProduct: { nodes: products },
  } = data
  // check
  console.log(products)
  return (
    <Layout>
      <section className="ProductComponent">
        {products.map(product => {
          return (
            <article className="ProductContainer" key={product.id}>
              <Image
                className="ProductImg"
                fluid={product.image.fluid}
                alt={product.title}
              />
              <h3 className="ProductTitle">{product.title}</h3>
              <p>${product.price}.00</p>
              <br />
              <Link to={`/products/${product.slug}`}>more details </Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}
// QUERY PRODUCTS FORM CONTENTFUL API
export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ProductComponent
