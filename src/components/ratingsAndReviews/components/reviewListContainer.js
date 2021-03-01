import React from 'react';
import PropTypes from 'prop-types';
import ReviewBox from './reviewBox';

function ReviewListContainer({ reviewList }) {
  return (
    <div className="review-container">
      {reviewList.map((review) => <ReviewBox review={review} />)}
    </div>
  );
}

ReviewListContainer.propTypes = {
  reviewList: PropTypes.instanceOf(Array).isRequired,
};

export default ReviewListContainer;
