import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '~/tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export function getBreakpoints(): Record<string, number> {
  const screens = fullConfig.theme?.screens || {};
  const customScreens = ['mobile', 'tablet', 'desktop'];
  const breakpoints: Record<string, number> = {};

  Object.entries(screens).forEach(([key, value]) => {
    if (customScreens.includes(key)) {
      const pxValue = parseInt(value.toString().replace('px', ''), 10);
      if (!isNaN(pxValue)) {
        breakpoints[key] = pxValue;
      }
    }
  });

  breakpoints['mobile'] = 0;

  return breakpoints;
}
