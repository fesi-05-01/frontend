import CircleCheck from '~/src/assets/icons/circle-check';

export default function Confirmation() {
  return (
    <div className="flex items-center gap-1 whitespace-nowrap text-orange-600">
      <CircleCheck variant="secondary" />
      <span className="text-sm font-medium">개설확정</span>
    </div>
  );
}
