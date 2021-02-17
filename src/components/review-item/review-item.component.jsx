import React from "react";

import "./review-item.styles.scss";

import CustomArrow from "../custom-arrow/custom-arrow.component";
import CustomButton from "../custom-button/custom-button.component";

const ReviewItem = ({
  name,
  job,
  image,
  text,
  nextUserReview,
  previousUserReview,
  randomUserPreview,
}) => (
  <div className="review-item">
    <div className="review-item-image">
      <img src={image} alt="user" />
      <div className="review-item-quotation-mark">&#10078;</div>
    </div>
    <div className="review-item-name-job">
      <span className="name">{name}</span>
      <span className="job">{job}</span>
    </div>
    <div className="review-item-descr">{text}</div>
    <div className="review-item-arrow">
      <CustomArrow onClick={previousUserReview}>&#9668;</CustomArrow>
      <CustomArrow onClick={nextUserReview}>&#9658;</CustomArrow>
    </div>
    <div className="review-item-random">
      <CustomButton onClick={randomUserPreview}>Random Review</CustomButton>
    </div>
  </div>
);

export default ReviewItem;
