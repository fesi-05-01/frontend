'use client';

import useGetReviewList from '~/src/services/reviews/use-get-review-list';

export default function ReviewList() {
  const { data } = useGetReviewList();

  console.log(data);

  return <div>ReviewList</div>;
}
