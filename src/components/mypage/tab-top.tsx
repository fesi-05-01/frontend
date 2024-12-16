import { useAtom } from 'jotai';

import { activeTabAtom } from '~/src/stores/my-page-atoms';

export default function TabTop() {
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);

  const tabs = [
    { id: 'myGroups', label: '나의 모임' },
    { id: 'myReviews', label: '나의 리뷰' },
    { id: 'createdGroups', label: '내가 만든 모임' },
  ];

  return (
    <div className="flex gap-3 text-lg font-semibold">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id as typeof activeTab)}
          className={`relative pb-1 ${
            activeTab === id ? 'text-secondary-900' : 'text-secondary-400'
          }`}
        >
          {label}
          {activeTab === id && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-[1px] bg-gray-900" />
          )}
        </button>
      ))}
    </div>
  );
}
