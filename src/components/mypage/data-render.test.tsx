// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { render, screen } from '@testing-library/react';
// import { Provider as JotaiProvider } from 'jotai';

// import DataRenderer from '~/src/components/mypage/data-render';
// import { accessTokenAtom, userInfoAtom } from '~/src/stores/auth-store';
// import { activeTabAtom, reviewSubTabAtom } from '~/src/stores/my-page-atoms';

// describe('DataRenderer 컴포넌트 테스트', () => {
//   const renderWithProviders = ({
//     activeTab = 'myReviews',
//     reviewSubTab = 'writableReviews',
//     user = { id: 1, name: '테스트 유저' },
//     accessToken = 'test-token',
//   } = {}) => {
//     const queryClient = new QueryClient();

//     return render(
//       <QueryClientProvider client={queryClient}>
//         <JotaiProvider
//           initialValues={[
//             [activeTabAtom, activeTab],
//             [reviewSubTabAtom, reviewSubTab],
//             [userInfoAtom, user],
//             [accessTokenAtom, accessToken],
//           ]}
//         >
//           <DataRenderer />
//         </JotaiProvider>
//       </QueryClientProvider>,
//     );
//   };

//   it('작성 가능한 리뷰가 없을 경우 빈 상태 메시지를 렌더링해야 한다.', async () => {
//     renderWithProviders({
//       activeTab: 'myReviews',
//       reviewSubTab: 'writableReviews',
//     });

//     const emptyMessage =
//       await screen.findByText('아직 작성 가능한 리뷰가 없어요');
//     expect(emptyMessage).toBeInTheDocument();
//   });

//   it('작성한 리뷰가 없을 경우 빈 상태 메시지를 렌더링해야 한다.', async () => {
//     renderWithProviders({
//       activeTab: 'myReviews',
//       reviewSubTab: 'writtenReviews',
//     });

//     const emptyMessage = await screen.findByText('아직 작성한 리뷰가 없어요');
//     expect(emptyMessage).toBeInTheDocument();
//   });

//   it('신청한 모임이 없을 경우 빈 상태 메시지를 렌더링해야 한다.', async () => {
//     renderWithProviders({
//       activeTab: 'myGroups',
//     });

//     const emptyMessage = await screen.findByText('신청한 모임이 아직 없어요');
//     expect(emptyMessage).toBeInTheDocument();
//   });

//   it('만든 모임이 없을 경우 빈 상태 메시지를 렌더링해야 한다.', async () => {
//     renderWithProviders({
//       activeTab: 'createdGroups',
//     });

//     const emptyMessage = await screen.findByText('아직 만든 모임이 없어요');
//     expect(emptyMessage).toBeInTheDocument();
//   });

//   it('작성 가능한 리뷰가 있을 경우 ReviewCardItem을 렌더링해야 한다.', async () => {
//     renderWithProviders({
//       activeTab: 'myReviews',
//       reviewSubTab: 'writableReviews',
//     });

//     const reviewCard = await screen.findAllByText('리뷰 카드 텍스트');
//     expect(reviewCard.length).toBeGreaterThan(0); // 리뷰 카드가 하나 이상 렌더링되는지 확인
//   });

//   it('만든 모임이 있을 경우 GroupCard를 렌더링해야 한다.', async () => {
//     renderWithProviders({
//       activeTab: 'createdGroups',
//     });

//     const groupCard = await screen.findAllByText('모임 카드 텍스트');
//     expect(groupCard.length).toBeGreaterThan(0); // 모임 카드가 하나 이상 렌더링되는지 확인
//   });
// });
