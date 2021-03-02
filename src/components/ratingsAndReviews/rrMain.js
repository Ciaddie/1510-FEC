import '../localStyles/rr.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Navbar, Container, Row, Col, Grid,
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewListContainer from './components/reviewListContainer';
import SummaryContainer from './components/summaryContainer';
import ReviewFilter from './components/reviewFilter';

function RatingsAndReviews() {
  const [reviewList, setReviewList] = useState([]);

  const findReviews = () => {
    axios.get('http://localhost:3000/ratings/reviews')
      .then((result) => {
        setReviewList(result.data.results);
      })
      .catch((error) => {
        console.log('Error Fetching Reviews');
        console.log(error);
      });
  };

  useEffect(() => {
    findReviews();
  }, []);

  return (
      <Container>
      <Row className="rating-review-container">
          <Col xs={6} md={4}>
            <SummaryContainer />
          </Col>
          <Col xs={6} md={8}>
            <ReviewFilter className="review-filter" />
            <ReviewListContainer className="container" reviewList={reviewList} />
          </Col>
        </Row>
      </Container>
  );
}

export default RatingsAndReviews;
