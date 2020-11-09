export const adaptReviewToClient = (review) => {
  return {
    id: review.id,
    avatar: review.user.avatar_url,
    name: review.user.name,
    authorId: review.user.id,
    authorSuper: review.user.is_pro,
    rating: review.rating,
    date: new Date(review.date),
    text: review.comment
  };
};
