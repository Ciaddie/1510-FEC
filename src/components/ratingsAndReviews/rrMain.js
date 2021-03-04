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
import metaTestData from './testData/metadataTest';

function RatingsAndReviews() {
  const [reviewList, setReviewList] = useState([]);
  const [reviewMeta, setReviewMeta] = useState(metaTestData);

  const generateStarImage = (starCount) => {
    let remainder = 0;
    remainder = starCount - remainder;
    const starArr = [];
    for (let j = 0; j < 5; j++) {
      switch (remainder) { // 4.25
        case 0.25:
          starArr.push(<img src="public/icons/star/quarterStar.png" className="star-image" />);
          remainder -= 0.25;
          break;
        case 0.50:
          starArr.push(<img src="public/icons/star/halfStar.png" className="star-image" />);
          remainder -= 0.50;
          break;
        case 0.75:
          starArr.push(<img src="public/icons/star/threeQuarterStar.png" className="star-image" />);
          remainder -= 0.75;
          break;
        case 1:
          starArr.push(<img src="public/icons/star/fullStar.png" className="star-image" />);
          remainder -= 1;
          break;
        case 0:
          starArr.push(<img src="public/icons/star/emptyStar.png" className="star-image" />);
          break;
        default:
          starArr.push(<img src="public/icons/star/fullStar.png" className="star-image" />);
          remainder -= 1;
          break;
      }
    }
    return starArr;
  };

  const findReviews = () => {
    axios.get('http://localhost:3000/ratings/review')
      .then((result) => {
        setReviewList(result.data.results);
      })
      .catch((error) => {
        console.log('Error Fetching Reviews');
        console.log(error);
      });
  };

  const findReviewMeta = () => {
    axios.get('http://localhost:3000/ratings/review/meta')
      .then((result) => {
        console.log(result.data);
        setReviewMeta(result.data);
      })
      .catch((error) => {
        console.log('Error Fetching Review Meta');
        console.log(error);
      });
  };

  useEffect(() => {
    findReviews();
    findReviewMeta();
  }, []);

  return (
    <Container>
      <Row className="rating-review-container">
        <Col xs={6} md={4}>
          <SummaryContainer className="container" generateStarImage={generateStarImage} meta={reviewMeta} />
        </Col>
        <Col xs={6} md={8}>
          <ReviewFilter className="review-filter" />
          <ReviewListContainer className="container" generateStarImage={generateStarImage} reviewList={reviewList} />
        </Col>
      </Row>
    </Container>
  );
}

export default RatingsAndReviews;
