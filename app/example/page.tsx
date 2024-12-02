// 'use client';
// import { useState } from 'react';

// import BoxSelect from '~/src/components/common/box-select';
// import Filter from '~/src/components/common/left-filter';
// import MainContainer from '~/src/components/layout/main-container';

// export default function Example() {
//   const [checkedStates, setCheckedStates] = useState([false, false]);
//   const handleChange = (index: number, checked: boolean) => {
//     setCheckedStates((prevStates) =>
//       prevStates.map((state, i) => (i === index ? checked : state)),
//     );
//   };
//   const options = ['아무것도', '하기', '싫다!', '으아아아아아아아아아아아악'];

//   return (
//     <MainContainer>
//       <div className="flex justify-between bg-white p-4">
//         <BoxSelect
//           title="달램핏"
//           description="오피스 스트레칭"
//           checked={checkedStates[0]}
//           onChange={(checked) => handleChange(0, checked)}
//         />
//         <BoxSelect
//           title="달램핏"
//           description="오피스 스트레칭"
//           checked={checkedStates[1]}
//           onChange={(checked) => handleChange(1, checked)}
//         />
//       </div>
//       <div className="flex justify-between bg-white p-4">
//         <Filter version="Left" options={options} />
//         <Filter version="Right" options={options} />
//       </div>
//     </MainContainer>
//   );
// }
