import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import SocialBar from "../components/social"
import SEO from "../components/seo"
import { Row, Col } from "../components/grid"

function useSubject() {
  const query = graphql`
    query {
      file(relativePath: { eq: "subject.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 528, maxHeight: 686) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `
  const data = useStaticQuery(query)
  return data
}
const IndexPage = () => {
  const {
    file: {
      sharp: { fluid },
    },
  } = useSubject()

  return (
    <>
      <SEO title="Home" />
      <Row columns={2} width={2}>
        <Col>
          <Img fluid={fluid} alt="Subject" />
        </Col>
        <Col>
          <div
            css={css`
              display: flex;
              justify-content: center;
              flex-flow: column nowrap;
              height: 75vw;
              padding-right: 110px;
            `}
          >
            <p
              css={css`
                font-size: 32px;
                margin-bottom: 20px;
              `}
            >
              Hello, I'm Kenny Kimmel, a 22 years old graphic designer and
              photographer, based in New York.
            </p>
            <p
              css={css`
                margin-bottom: 40px;
                line-height: 1.6em;
                color: #656b6f;
                font-size: 18px;
              `}
            >
              I'm freshly graduated from British Higher School of Design, in
              London. I'm currently looking for a job in NYC. I always try to
              bring something different, unique on projects I work on, enhance
              navigation experience using UI animations and motion design
              applied to development. I keep attention to details.
            </p>
            <SocialBar />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default IndexPage
