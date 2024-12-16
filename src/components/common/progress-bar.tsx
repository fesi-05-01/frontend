'use client';

import { useEffect, useState } from 'react';

import { cn } from '~/src/utils/class-name';

interface ProgressBarProps {
  current: number; // 현재 등록한 인원
  capacity: number; // 최대 수용 인원
  className?: string; // 바깥 컴포넌트
  barClassName?: string; // 주황색 바 색깔 변경 시
}

export default function ProgressBar({
  current,
  capacity,
  className,
  barClassName,
}: ProgressBarProps) {
  const targetProgress = !isNaN(current / capacity)
    ? Math.min((current / capacity) * 100, 100)
    : 0;

  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    // 시작값을 0으로 설정
    setProgressPercentage(0);

    // 점진적으로 목표값까지 증가
    const timer = setTimeout(() => {
      setProgressPercentage(targetProgress);
    }, 300);

    return () => clearTimeout(timer);
  }, [targetProgress]);

  return (
    <div
      role="progressbar"
      aria-valuenow={progressPercentage}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(`relative h-1 w-full rounded-md bg-orange-50`, className)}
    >
      <div
        role="presentation"
        className={cn(
          `h-1 rounded-md bg-orange-600 transition-all duration-1000 ease-out`,
          barClassName,
        )}
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}
