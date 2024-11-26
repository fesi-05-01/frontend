'use client';
import Filter from '../../src/components/common/filter';

export default function example() {
  const options = ['아무것도', '하기', '싫다!'];
  return (
    <div className="flex justify-between p-4">
      <div>
        <Filter version="Left" options={options} />
      </div>
      <div>
        <Filter version="Right" options={options} />
      </div>
    </div>
  );
}
