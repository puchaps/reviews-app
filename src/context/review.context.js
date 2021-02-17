/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import reviewsDB from "../data/reviews.data";

import {
  nextUserReview,
  previousUserReview,
  currentUserPreview,
  randomUserPreview,
} from "./utils/review.utils";

export const ReviewContext = React.createContext();

const ReviewProvider = ({ children }) => {
  const [usersReviews, setUsersReviews] = useState(reviewsDB);
  const [indexUser, setIndexUser] = useState(0);

  const nextUserReviewWrapper = () =>
    nextUserReview(usersReviews, indexUser, setIndexUser);
  const previousUserReviewWrapper = () =>
    previousUserReview(usersReviews, indexUser, setIndexUser);
  const currentUserPreviewWrapper = () =>
    currentUserPreview(usersReviews, indexUser, setIndexUser);
  const randomUserPreviewWrapper = () =>
    randomUserPreview(usersReviews, setIndexUser);

  return (
    <ReviewContext.Provider
      value={{
        nextUserReviewWrapper,
        previousUserReviewWrapper,
        currentUserPreviewWrapper,
        randomUserPreviewWrapper,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;
