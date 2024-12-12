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

  const { data: groupData } = useGetJoinedGatheringsInfinite({
    ...(activeTab === 'myReviews' &&
      reviewSubTab === 'writableReviews' && { isReviewed: false }),
    ...(activeTab === 'createdGroups' && { createdBy: 1 }),
  });

  const { data: reviewData } = useGetReviewInfiniteList();
  const flattenedGroupData = groupData?.pages.flatMap((page) => page) || [];

  if (activeTab === 'myReviews') {
    return (
      <div className="mt-4 border-t-2 border-secondary-900 px-4 py-6 tablet:p-6 desktop:mt-[30px]">
        <TabTop />
        <TabBottom />
        {reviewSubTab === 'writtenReviews'
          ? reviewData?.map((data) => (
              <ReviewCardItem key={data.id} {...data} hasNameTag={false} />
            ))
          : flattenedGroupData.map((data) => (
              <GroupCard key={data.id} joinedGathering={data} state="default" />
            ))}
      </div>
    );
  }

  return (
    <div className="mt-4 border-t-2 border-secondary-900 px-4 py-6 tablet:p-6 desktop:mt-[30px]">
      <TabTop />
      {flattenedGroupData.map((data) => (
        <GroupCard key={data.id} joinedGathering={data} state="default" />
      ))}
    </div>
  );
}
