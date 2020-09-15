import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = (props) => {
  const data = useStaticQuery(graphql`
      query {
        allFile {
          edges {
            node {
              base
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)

    return (
	<div>
		{data.allFile.edges.map(image => (
		  <Img
			fluid={image.node.childImageSharp.fluid}
			alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
		  />
		))}
	</div>
	)

}

export default Image
