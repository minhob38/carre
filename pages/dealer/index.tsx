/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Header from '@components/common/Header';
import Scroll from '@components/common/Scroll';
import Content from '@components/common/Content';
import Image from '@components/common/Image';
import DealerButton from '@components/result/DealerButton';
import DealerCard from '@components/dealer/DealerCard';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, DEALER_BUTTON_HEIGHT } from '@constants/size';
import { IS_HIDDEN } from '@constants/variables';
import { useTypedSelector } from '@hooks/useStore';
import casperImage from '@assets/images/casper.svg';
import rightArrorImage from '@assets/images/icons/small-black-right-arrow.svg';

import dealer1Image from '@assets/images/temps/dealer-1.png';
import dealer2Image from '@assets/images/temps/dealer-2.png';
import dealer3Image from '@assets/images/temps/dealer-3.png';

const Title = styled.div`
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 22px 0 11px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto 28px auto;
`;

const CarContainer = styled.div`
  display: flex;
`;

const RankCarNameContainer = styled.div``;

const Rank = styled.div`
  font: ${fonts.TITLE_T2};
  color: ${colors.PRIMARY_500};
`;
const CarName = styled.div`
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_500};
`;

const DealerCardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

const dealers = [
  {
    description: '24시간 상담가능 포천 유일 여성 딜러',
    src: dealer1Image,
    chips: ['친절해요', '전문성이 강해요'],
  },
  {
    description: '가족같은 편안함으로 14년 경력의 전문가',
    src: dealer2Image,
    chips: ['세심한 배려', '쉽게 설명해줘요'],
  },
  {
    description: '24시간 상담가능 포천 유일 여성 딜러',
    src: dealer3Image,
    chips: ['친절해요', '응답이 빨라요'],
  },
  {
    description: '24시간 상담가능 포천 유일 여성 딜러',
    src: dealer1Image,
    chips: ['친절해요', '전문성이 강해요'],
  },
  {
    description: '가족같은 편안함으로 14년 경력의 전문가',
    src: dealer2Image,
    chips: ['세심한 배려', '쉽게 설명해줘요'],
  },
  {
    description: '24시간 상담가능 포천 유일 여성 딜러',
    src: dealer3Image,
    chips: ['친절해요', '응답이 빨라요'],
  },
];

const Dealer: NextPage = () => {
  // const recoms = useTypedSelector((state) => {
  //   return state.rootReducer.resultReducer.recoms;
  // });

  // if (!recoms) {
  //   return <div>loading...</div>;
  // }

  const Dealers = dealers.map((dealer) => {
    const { description, src, chips } = dealer;
    return (
      <DealerCard
        key={uuid4()}
        description={description}
        src={src}
        chips={chips}
      />
    );
  });

  return (
    <>
      <Header type="close" title="견적 파트너 추천 결과" closePath="/" />
      <Content top={HEADER_HEIGHT} bottom={DEALER_BUTTON_HEIGHT}>
        <Title>성능과 안전 두마리 토끼를 잡으려는 카레님</Title>
        <CardContainer>
          <CarContainer>
            <RankCarNameContainer>
              <Rank>1순위</Rank>
              <CarName>현대 캐스퍼 밴</CarName>
            </RankCarNameContainer>
            <Image src={casperImage} alt={'carModelName'} width="201px" />
          </CarContainer>
          {!IS_HIDDEN && (
            <Image src={rightArrorImage} alt="right-arrow" width="20px" />
          )}
        </CardContainer>
        <Scroll direction="y" height="calc(100% - 249px)">
          <DealerCardContainer>{Dealers}</DealerCardContainer>
        </Scroll>
        <DealerButton />
      </Content>
    </>
  );
};

export default Dealer;
