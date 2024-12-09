import { useEffect, useState } from 'react';

interface UseGatheringCardProps {
  gatheringId: number;
  participantCount: number;
  capacity: number;
}

export default function useGatheringCard({
  gatheringId,
  participantCount,
  capacity,
}: UseGatheringCardProps) {
  const [isSaved, setIsSaved] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    return wishlist.includes(gatheringId);
  });
  const [cardState, setCardState] = useState<
    'ongoing' | 'confirmation' | 'closed'
  >('ongoing');

  useEffect(() => {
    if (participantCount >= capacity) {
      setCardState('closed');
    } else if (participantCount >= 5) {
      setCardState('confirmation');
    } else {
      setCardState('ongoing');
    }
  }, [participantCount, capacity]);

  const handleSaveButton =
    (gatheringId: number) => (event: React.MouseEvent<SVGSVGElement>) => {
      event.stopPropagation();
      setIsSaved((prev) => !prev);
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      if (!isSaved) {
        localStorage.setItem(
          'wishlist',
          JSON.stringify([...wishlist, gatheringId]),
        );
      } else {
        localStorage.setItem(
          'wishlist',
          JSON.stringify(wishlist.filter((id: number) => id !== gatheringId)),
        );
      }
    };

  return { isSaved, cardState, handleSaveButton };
}
