// SINGLE PRODUCT PAGE TEMPLATE
import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

// Destructuring all the properties from the query
const SingleProduct = ({
  data: {
    product: {
      title,
      price,
      image: { fixed },
      description: { description },
    },
  },
}) => {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "80px 0" }}>
        Single Product: {title}
      </h1>

      <section className="SingleProduct">
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          <h1>{title}</h1>
          <h3>${price}.00</h3>
          <p>{description}</p>
          <button className="addToCartBtn">add to cart</button>
          <Link
            style={{ textAlign: "center", marginLeft: "20px" }}
            to="/products"
          >
            back to products
          </Link>
        </article>
      </section>
    </div>
  )
}

export const query = graphql`
  query GetSIngleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      description {
        description
      }
    }
  }
`

export default SingleProduct
