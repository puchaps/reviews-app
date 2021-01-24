export const nextUserReview = (usersReviews, indexUser, setIndexUser) => {
  if (indexUser >= usersReviews.length - 1) {
    return setIndexUser(indexUser - indexUser);
  };

  return setIndexUser(indexUser + 1)
};

export const previousUserReview = (usersReviews, indexUser, setIndexUser) => {
  if (indexUser <= 0) {
    return setIndexUser(usersReviews.length - 1);
  };

  return setIndexUser(indexUser - 1);
};

export const randomUserPreview = (usersReviews, setIndexUser) => {
  return setIndexUser(Math.ceil(Math.random() * (usersReviews.length - 1)))
};

export const currentUserPreview = (usersReviews, indexUser) => {
  return usersReviews[indexUser];
};

