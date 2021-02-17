/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { ReviewContext } from "../../context/review.context";

import "./reviews-preview.styles.scss";

import ReviewItem from "../review-item/review-item.component";

const ReviewsPreview = () => {
  const {
    nextUserReviewWrapper,
    currentUserPreviewWrapper,
    previousUserReviewWrapper,
    randomUserPreviewWrapper,
  } = useContext(ReviewContext);

  return (
    <div className="reviews-preview">
      <div className="reviews-preview-title">
        <h1>Our Reviews</h1>
      </div>
      <div className="reviews-preview-item">
        <ReviewItem
          {...currentUserPreviewWrapper()}
          nextUserReview={nextUserReviewWrapper}
          previousUserReview={previousUserReviewWrapper}
          randomUserPreview={randomUserPreviewWrapper}
        />
      </div>
    </div>
  );
};

export default ReviewsPreview;
