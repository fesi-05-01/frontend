import PersonIcon from '~/src/assets/icons/person.svg';

interface MemberCountChipProps {
  current: number;
  capacity: number;
}

export default function MemberCountChip({
  current,
  capacity,
}: MemberCountChipProps) {
  return (
    <span className="inline-flex items-center gap-0.5 text-sm font-medium text-gray-700">
      <PersonIcon />
      <span className="d">
        {current}/{capacity}
      </span>
    </span>
  );
}
