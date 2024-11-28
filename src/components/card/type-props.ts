import { type ComponentPropsWithoutRef } from 'react';

import { type Gathering } from '~/src/services/gatherings/types';

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  state: 'default' | 'disabled';
  gathering: Gathering;
}
