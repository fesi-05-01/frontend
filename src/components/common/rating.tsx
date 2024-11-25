import HeartIcon from '~/src/assets/icons/heart';

interface Props {
  value: number;
}

const MAX_VALUE = 5;

export default function Rating({ value }: Props) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: MAX_VALUE }, (_, index) => (
        <HeartIcon key={index} isActive={index < value} />
      ))}
    </div>
  );
}
