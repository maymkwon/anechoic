import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'
import CardViewer from './CardViewer'
class CardList extends Component {
  render() {
    const data = [1, 2, 3, 4]
    return (
      <Row>
        <Col sm="12">
          <h3>업데이트예정 Music</h3>
        </Col>
        {
          data.map((data, index) => {
            return (
              <Col sm="3">
                <CardViewer />
              </Col>
            )
          })
        }
      </Row>
    );
  }
}

export default CardList;