import { useAtom } from 'jotai';

import { reviewSubTabAtom } from '~/src/stores/my-page-atoms';

export default function TabBottom() {
  const [reviewSubTab, setReviewSubTab] = useAtom(reviewSubTabAtom);

  const tabs = [
    { id: 'writableReviews', label: '작성 가능한 리뷰' },
    { id: 'writtenReviews', label: '작성한 리뷰' },
  ];

  return (
    <div className="mt-4 flex gap-2">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setReviewSubTab(id as typeof reviewSubTab)}
          className={`rounded-[12px] px-4 py-2 text-sm font-medium ${
            reviewSubTab === id
              ? 'bg-secondary-900 text-white'
              : 'bg-secondary-200 text-secondary-900'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
