import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '~/tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export function getBreakpoints(): Record<string, number> {
  const screens = fullConfig.theme?.screens || {};
  const customScreens = ['mobile', 'tablet', 'desktop']; // 필요한 브레이크포인트만 추출
  const breakpoints: Record<string, number> = { mobile: 0 }; // 기본값 추가 (375px 미만 처리)

  Object.entries(screens).forEach(([key, value]) => {
    if (customScreens.includes(key)) {
      const pxValue = parseInt(value.toString().replace('px', ''), 10);
      if (!isNaN(pxValue)) {
        breakpoints[key] = pxValue;
      }
    }
  });

  return breakpoints;
}
