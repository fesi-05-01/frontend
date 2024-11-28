import { useState } from 'react';

export default function useCard(initialState: boolean = false) {
  const [isActive, setIsActive] = useState<boolean>(initialState);

  const handleSaveButton = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    setIsActive(!isActive);
  };

  return { isActive, handleSaveButton };
}
