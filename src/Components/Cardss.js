import React from "react";

import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import CardCol from "./CardCol";

export default function Cardss(props) {
  return (
    <Container>
      <Row>
        {props.data.map((fat) => {
          return <CardCol data={fat} key={fat.title} />;
        })}
      </Row>
    </Container>
  );
}
