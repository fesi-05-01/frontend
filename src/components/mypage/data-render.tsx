import { useMemo } from 'react';
import { useAtom } from 'jotai';

import GroupCard from '~/src/components/mypage/group-card';
import TabBottom from '~/src/components/mypage/tab-bottom';
import TabTop from '~/src/components/mypage/tab-top';
import ReviewCardItem from '~/src/components/reviews/review-card-item';
import useGetJoinedGatheringsInfinite from '~/src/services/mypage/use-get-joined-gatherings-infinite';
import useGetReviewInfiniteList from '~/src/services/reviews/use-get-review-infinite-list';
import { accessTokenAtom, userInfoAtom } from '~/src/stores/auth-store';
import { activeTabAtom, reviewSubTabAtom } from '~/src/stores/my-page-atoms';

export default function DataRenderer() {
  const [activeTab] = useAtom(activeTabAtom);
  const [reviewSubTab] = useAtom(reviewSubTabAtom);
  const [user] = useAtom(userInfoAtom);
  const [accessToken] = useAtom(accessTokenAtom);

  const { data: groupData } = useGetJoinedGatheringsInfinite(
    {
      ...(activeTab === 'myReviews' &&
        reviewSubTab === 'writableReviews' && {
          reviewed: false,
          completed: true,
        }),
    },
    accessToken!,
  );

  const flattenedGroupData = useMemo(
    () =>
      (groupData?.pages.flatMap((page) => page) || []).filter((item) => {
        const currentTime = new Date();
        return new Date(item.dateTime) > currentTime;
      }),
    [groupData],
  );

  const filteredGroupData = useMemo(
    () =>
      activeTab === 'createdGroups'
        ? flattenedGroupData.filter((item) => item.createdBy === user?.id)
        : flattenedGroupData,
    [flattenedGroupData, activeTab, user],
  );

  const { data: reviewData } = useGetReviewInfiniteList();

  const getEmptyMessage = useMemo(() => {
    if (activeTab === 'myGroups') return '신청한 모임이 아직 없어요';
    if (activeTab === 'myReviews') {
      return reviewSubTab === 'writtenReviews'
        ? '아직 작성한 리뷰가 없어요'
        : '아직 작성 가능한 리뷰가 없어요';
    }
    if (activeTab === 'createdGroups') return '아직 만든 모임이 없어요';
    return null;
  }, [activeTab, reviewSubTab]);

  const isEmpty = useMemo(
    () =>
      activeTab === 'myReviews' && reviewSubTab === 'writtenReviews'
        ? !reviewData?.length
        : !filteredGroupData.length,
    [activeTab, reviewSubTab, reviewData, filteredGroupData],
  );

  return (
    <div className="mt-4 flex grow flex-col border-t-2 border-secondary-900 px-4 py-6 tablet:p-6 desktop:mt-[30px]">
      <TabTop />
      {activeTab === 'myReviews' && <TabBottom />}

      {isEmpty ? (
        <div className="flex grow items-center justify-center">
          <p className="text-sm font-medium text-secondary-500">
            {getEmptyMessage}
          </p>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-4">
          {activeTab === 'myReviews' && reviewSubTab === 'writtenReviews'
            ? reviewData?.map((data) => (
                <ReviewCardItem
                  key={data.id}
                  {...data}
                  hasNameTag={false}
                  hasImage={true}
                  hasTypeDescription={true}
                />
              ))
            : filteredGroupData.map((data) => (
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
