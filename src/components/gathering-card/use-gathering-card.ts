import { useEffect, useState } from 'react';

interface UseGatheringCardProps {
  initialState?: boolean;
  participantCount: number;
  capacity: number;
}

export default function useGatheringCard({
  initialState = false,
  participantCount,
  capacity,
}: UseGatheringCardProps) {
  const [isActive, setIsActive] = useState<boolean>(initialState);
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

  const handleSaveButton = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    setIsActive((prev) => !prev);
  };

  return { isActive, cardState, handleSaveButton };
}
