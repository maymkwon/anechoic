import React from 'react';
import { Jumbotron, Button, Row, Container, Col } from 'reactstrap';

const MainStreme = (props) => {
  return (
    <Jumbotron fluid style={{backgroundColor: 'transparent'}}>
      <Container fluid>
        <Col >
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <Button>Explore</Button>
        </Col>
      </Container>
    </Jumbotron>
  );
};

export default MainStreme;