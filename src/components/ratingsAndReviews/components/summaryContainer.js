/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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

function SummaryContainer({
  meta, generateStarImage, handleStarClick, starFilter, avgRating,
}) {
  // console.log(meta);
  const starList = [];

  // eslint-disable-next-line react/prop-types
  const { ratings } = meta;
  const keys = Object.keys(ratings);
  for (let i = 0; i < 5; i += 1) {
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    starList.push(<div className="hoverStar" key={i} onClick={() => { handleStarClick(i + 1); }}><SummaryStar tempKey={i} name={generateStarImage(Number(i + 1), `star-list${i}`)} count={ratings[keys[i]] ? ratings[keys[i]] : 0} /></div>);
  }

  return (
    <Container key="summary-inside" className="container border-primary">
      <div className="border border-secondary shadow">
        <h3>Summary Container</h3>
        <Row>
          <Col xs={4} md={4} className="font-weight-bold">
            <span key="rating-avg" className="text-center">
              {' '}
              {`${avgRating}`}
              {' '}
            </span>
          </Col>
          <Col xs={8} md={8} className="align-content-start">
            <span key="rating-avg-star" className="text-left">{generateStarImage(avgRating, 'summary-inside-star')}</span>
          </Col>
        </Row>
        <hr />
        {starFilter ? <span className="hoverStar text-center text-bolder" onClick={() => { handleStarClick(''); }}>Remove Filter</span> : null}
        {starList}
      </div>
    </Container>
  );
}

SummaryContainer.propTypes = {
  meta: PropTypes.instanceOf(Object).isRequired,
  generateStarImage: PropTypes.instanceOf(Function).isRequired,
  handleStarClick: PropTypes.instanceOf(Function).isRequired,
};

export default SummaryContainer;
