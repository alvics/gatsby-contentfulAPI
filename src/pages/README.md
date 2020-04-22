## Create Pages

#### Single product page

```javascript
// Create pages manually (single product page) nest in folder eg: URL would be products/silver-gem-diffuser

import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
  return (
    <div>
      <h2>{data.product.title}</h2>
      <h2>{data.product.price}</h2>
    </div>
  )
}

export const query = graphql`
  {
    product: contentfulProduct(slug: { eq: "silver-gem-diffuser" }) {
      price
      title
    }
  }
`

export default ComponentName
```
