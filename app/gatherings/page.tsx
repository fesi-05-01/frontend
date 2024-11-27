import CardLarge from '~/src/components/card/card-large';
import MainContainer from '~/src/components/layout/main-container';
import { type Gathering } from '~/src/services/gatherings/types';

const tmpVar: Gathering = {
  id: 1,
  image: '/IMG_1190.jpg',
  name: '달램핏 마인드풀니스',
  location: '을지로 3가',
  date: '1월 7일',
  time: '17:00',
};

export default function GatheringsPage() {
  return (
    <MainContainer>
      GatheringsPage
      <CardLarge state="default" gathering={tmpVar} />
      <CardLarge state="disabled" gathering={tmpVar} />
    </MainContainer>
  );
}
