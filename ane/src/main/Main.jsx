import React, { Component } from 'react';
import { Container } from 'reactstrap';
import MainStreme from './components/MainStreme'
import SubStreme from './components/SubStreme'

class Main extends Component {
  render() {
    return (
      <div>
        <MainStreme />
        <Container fluid>
          <SubStreme />
        </Container>
      </div>
    );
  }
}

export default Main;