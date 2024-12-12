import PageTitleWithImage from '~/src/components/common/page-title-with-image';
import MainContainer from '~/src/components/layout/main-container';
import WishlistContainer from '~/src/components/wishlist/wishlist-container';
import WishlistPanel from '~/src/components/wishlist/wishlist-panel';

export default function WishlistPage() {
  return (
    <MainContainer className="flex flex-col">
      <PageTitleWithImage />
      <div className="flex flex-1 flex-col gap-6">
        <WishlistPanel />
        <WishlistContainer />
      </div>
    </MainContainer>
  );
}
