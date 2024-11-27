'use client';

import useGetReviewScore from '~/src/services/reviews/use-get-review-score';

export default function ReviewScore() {
  const { data } = useGetReviewScore();

  console.log(data);

  return <div>ReviewScore</div>;
}
