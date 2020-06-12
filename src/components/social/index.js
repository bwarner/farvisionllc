import React from "react"
import { css } from "@emotion/core"
import { Row, Col } from "../grid"
import TwitterIcon from "../icons/twitter"
import FacebookIcon from "../icons/facebook"
import InstagramIcon from "../icons/instagram"

export default function SocialBar() {
  return (
    <Row
      columns={3}
      width={1}
      extraCls={css`
        flex-direction: row;
        font-size: 45px;
        justify-content: flex-start;
        & > div {
          flex-basis: 60px;
        }
      `}
    >
      <Col>
        <FacebookIcon />
      </Col>
      <Col>
        <TwitterIcon />
      </Col>
      <Col>
        <InstagramIcon />
      </Col>
    </Row>
  )
}
