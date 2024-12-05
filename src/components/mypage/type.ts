import { type ComponentPropsWithoutRef } from 'react';

import { type JoinedGathering } from '~/src/services/gatherings/types';

export interface GroupCardProps extends ComponentPropsWithoutRef<'div'> {
  state: 'default' | 'disabled';
  joinedGathering: JoinedGathering;
}
