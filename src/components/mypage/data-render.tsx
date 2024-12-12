import { AxiosError } from 'axios'; // AxiosError를 import 해야 합니다.
import { useAtom } from 'jotai';

import GroupCard from '~/src/components/mypage/group-card';
import TabBottom from '~/src/components/mypage/tab-bottom';
import TabTop from '~/src/components/mypage/tab-top';
import ReviewCardItem from '~/src/components/reviews/review-card-item';
import useGetJoinedGatheringsInfinite from '~/src/services/mypage/use-get-joined-gatherings-infinite';
import useGetReviewInfiniteList from '~/src/services/reviews/use-get-review-infinite-list';
import { activeTabAtom, reviewSubTabAtom } from '~/src/stores/my-page-atoms';
export default function DataRenderer() {
  const [activeTab] = useAtom(activeTabAtom);
  const [reviewSubTab] = useAtom(reviewSubTabAtom);

  const {
    data: groupData,
    isLoading: isGroupLoading,
    error: groupError,
  } = useGetJoinedGatheringsInfinite({
    teamId: 'fesi0501',
  });
  const {
    data: reviewData,
    isLoading: isReviewLoading,
    error: reviewError,
  } = useGetReviewInfiniteList();
  // 그룹 데이터 로딩 상태 확인
  console.log('Group Data:', groupData);
  console.log('Group Loading:', isGroupLoading);

  // `groupError`가 AxiosError인지 확인하고 response에 접근하기
  if (groupError) {
    if (groupError instanceof AxiosError) {
      console.log('Group Error Response:', groupError.response);
    } else {
      console.log('Group Error:', groupError);
    }
  }

  // 리뷰 데이터 로딩 상태 확인
  console.log('Review Data:', reviewData);
  console.log('Review Loading:', isReviewLoading);

  // `reviewError`가 AxiosError인지 확인하고 response에 접근하기
  if (reviewError) {
    if (reviewError instanceof AxiosError) {
      console.log('Review Error Response:', reviewError.response);
    } else {
      console.log('Review Error:', reviewError);
    }
  }
  console.log('Active Tab:', activeTab);
  console.log('Review Sub Tab:', reviewSubTab);

  return (
    <div className="mt-4 border-t-2 border-secondary-900 px-4 py-6 tablet:p-6 desktop:mt-[30px]">
      <TabTop />
      {activeTab === 'myReviews' && <TabBottom />}
      {activeTab === 'myReviews' && reviewSubTab === 'writtenReviews'
        ? reviewData?.map((data) => (
            <ReviewCardItem key={data.id} {...data} hasNameTag={false} />
          ))
        : groupData?.map((data) => (
            <GroupCard key={data.id} joinedGathering={data} state="default" />
          ))}
    </div>
  );
}
