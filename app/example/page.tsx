'use client';
import Filter from '../../src/components/common/filter';

export default function example() {
  const options = ['아무것도', '하기', '싫다!'];
  return (
    <div className="flex justify-between p-4">
      <div>
        <Filter type="Left" options={options} />
      </div>
      <div>
        <Filter type="Right" options={options} />
      </div>
    </div>
  );
}
