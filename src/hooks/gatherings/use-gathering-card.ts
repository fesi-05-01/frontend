import { useEffect, useState } from 'react';

interface UseGatheringCardProps {
  initialIsSaved?: boolean;
  participantCount: number;
  capacity: number;
}

export default function useGatheringCard({
  initialIsSaved = false,
  participantCount,
  capacity,
}: UseGatheringCardProps) {
  const [isSaved, setIsSaved] = useState<boolean>(initialIsSaved);
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
    setIsSaved((prev) => !prev);
  };

  return { isSaved, cardState, handleSaveButton };
}
