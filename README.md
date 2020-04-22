## Gatsby-js & Contentful Backend

### View [demo](https://gatsby-contentful-template.netlify.app/)

##### Using contentful as a backend, creating content models with fields and adding content and images.

Fetching data from the contentful API using Gatsby js and graphQL.

```javascript
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
```

### Display and render the graphQL query

Using JavaScript to destructor ({}) the data and nodes then using map() to cycle through the array to display the list of products.

```javascript
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
        // map through the array
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
```
