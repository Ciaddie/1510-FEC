/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable vars-on-top */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar, Container, Row, Col, Grid,
} from 'react-bootstrap';
import SummaryStar from './summaryStar';

function SummaryContainer({ meta, generateStarImage }) {
  // console.log(meta);
  const starList = [];

  // Handler to generate stars
  

  // eslint-disable-next-line react/prop-types
  const { ratings, ratingAvg } = meta;
  const keys = Object.keys(ratings);
  for (let i = 0; i < keys.length; i++) {
    starList.push(<SummaryStar key={i} name={generateStarImage(Number(keys[i]))} count={ratings[keys[i]]} />);
  }

  // eslint-disable-next-line no-var
  var starImage = generateStarImage(ratingAvg);
  return (
    <Container className="container border-primary">
      <div className="container border-primary">
        <h3>Summary Container</h3>
        <Row>
          <Col xs={4} md={4}>
            {`${ratingAvg}`}
          </Col>
          <Col xs={7} md={7}>
            {starImage}
          </Col>
        </Row>
          {starList}
      </div>
    </Container>
  );
}

SummaryContainer.propTypes = {
  meta: PropTypes.instanceOf(Object).isRequired,
};

export default SummaryContainer;
