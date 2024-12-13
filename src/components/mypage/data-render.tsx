import { useState } from 'react';
import { useAtom } from 'jotai';

import GroupCard from '~/src/components/mypage/group-card';
import TabBottom from '~/src/components/mypage/tab-bottom';
import TabTop from '~/src/components/mypage/tab-top';
import ReviewCardItem from '~/src/components/reviews/review-card-item';
import useGetJoinedGatheringsInfinite from '~/src/services/mypage/use-get-joined-gatherings-infinite';
import useGetReviewInfiniteList from '~/src/services/reviews/use-get-review-infinite-list';
import { userInfoAtom } from '~/src/stores/auth-store';
import { activeTabAtom, reviewSubTabAtom } from '~/src/stores/my-page-atoms';

export default function DataRenderer() {
  const [activeTab] = useAtom(activeTabAtom);
  const [reviewSubTab] = useAtom(reviewSubTabAtom);
  const [user] = useAtom(userInfoAtom);

  const { data: groupData } = useGetJoinedGatheringsInfinite({
    ...(activeTab === 'myReviews' &&
      reviewSubTab === 'writableReviews' && { isReviewed: false }),
    ...(activeTab === 'createdGroups' && { createdBy: user?.id }),
  });
  const flattenedGroupData = groupData?.pages.flatMap((page) => page) || [];

  const { data: reviewData } = useGetReviewInfiniteList();

  // 임시버튼 상태 관리
  const [forceEmpty, setForceEmpty] = useState(false);

  // 데이터 없을 때의 메세지 함수
  const getEmptyMessage = () => {
    if (activeTab === 'myGroups') return '신청한 모임이 아직 없어요';
    if (activeTab === 'myReviews') {
      return reviewSubTab === 'writtenReviews'
        ? '아직 작성한 리뷰가 없어요'
        : '아직 작성 가능한 리뷰가 없어요';
    }
    if (activeTab === 'createdGroups') return '아직 만든 모임이 없어요';
    return null;
  };

  const isEmpty =
    forceEmpty ||
    (activeTab === 'myReviews' && reviewSubTab === 'writtenReviews'
      ? !reviewData?.length
      : !flattenedGroupData.length);

  return (
    <div className="mt-4 flex grow flex-col border-t-2 border-secondary-900 px-4 py-6 tablet:p-6 desktop:mt-[30px]">
      <TabTop />
      {activeTab === 'myReviews' && <TabBottom />}

      {/* 임시 버튼 */}
      <div className="mb-4 flex justify-end">
        <button
          onClick={() => setForceEmpty((prev) => !prev)}
          className="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-secondary-900"
        >
          {forceEmpty ? '데이터 표시' : '데이터 숨기기'}
        </button>
      </div>

      {isEmpty ? (
        <div className="flex grow items-center justify-center">
          <p className="text-sm font-medium text-secondary-500">
            {getEmptyMessage()}
          </p>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-4">
          {activeTab === 'myReviews' && reviewSubTab === 'writtenReviews'
            ? reviewData?.map((data) => (
                <ReviewCardItem key={data.id} {...data} hasNameTag={false} />
              ))
            : flattenedGroupData.map((data) => (
                <GroupCard
                  key={data.id}
                  joinedGathering={data}
                  state="default"
                />
              ))}
        </div>
      )}
    </div>
  );
}
