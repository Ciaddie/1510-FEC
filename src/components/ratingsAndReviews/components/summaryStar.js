import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Container, Row, Col, Grid,
} from 'react-bootstrap';

function SummaryStar({ name, count }) {
  return (
    <Row>
      <Col xs={4} md={4} className="justify-content-end font-weight-bold">
        {' '}
        { count }
        {' '}
      </Col>
      <Col xs={8} md={8}>
        {' '}
        { name }
        {' '}
      </Col>
    </Row>
  );
}

SummaryStar.propTypes = {
  name: PropTypes.instanceOf(Array).isRequired,
  count: PropTypes.string.isRequired,
};

export default SummaryStar;
