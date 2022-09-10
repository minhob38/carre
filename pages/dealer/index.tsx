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
import DealerMatchingModal from '@modals/DealerMatchingModal';
import DealerMatchedModal from '@modals/DealerMatchedModal';
import Loading from '@animations/Loading';
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
    value: '1',
    description: '최고의 만족감을 선사 드립니다.',
    src: 'https://static.carre.kr/dealer/dealer_icon_1.png',
    chips: ['친절해요', '전문성이 강해요'],
  },
  {
    value: '2',
    description: '친절상담, 모바일 견적',
    src: 'https://static.carre.kr/dealer/dealer_icon_2.png',
    chips: ['세심한 배려', '쉽게 설명해줘요'],
  },
  {
    value: '3',
    description: '15년 이상 경력의 팀장',
    src: 'https://static.carre.kr/dealer/dealer_icon_3.png',
    chips: ['친절해요', '응답이 빨라요'],
  },
];

const Dealer: NextPage = () => {
  const recoms = useTypedSelector((state) => {
    return state.rootReducer.resultReducer.recoms;
  });

  const carPage = useTypedSelector((state) => {
    return state.rootReducer.resultReducer.carPage;
  });

  const isDealerMatchingModal = useTypedSelector((state) => {
    return state.rootReducer.appReducer.isDealerMatchingModal;
  });
  const isDealerMatchedModal = useTypedSelector((state) => {
    return state.rootReducer.appReducer.isDealerMatchedModal;
  });

  if (!recoms) {
    return <Loading text={'추천차량을 불러오고 있습니다.'} />;
  }

  const { recommendCarInfoList, userTendencySentence } = recoms;
  const bestRecommendCarInfo = recommendCarInfoList[carPage - 1];
  const {
    rankingInfoText,
    brandName,
    carModelName,
    carImagePath,
    carImageFileName,
    carTotalPrice,
    trimList: trims,
  } = bestRecommendCarInfo;

  const imageSrc = carImagePath + carImageFileName;
  const rank = rankingInfoText.slice(0, -2);

  const Dealers = dealers.map((dealer) => {
    const { description, src, chips, value } = dealer;
    return (
      <DealerCard
        key={uuid4()}
        description={description}
        src={src}
        chips={chips}
        value={value}
      />
    );
  });

  return (
    <>
      {isDealerMatchingModal && <DealerMatchingModal />}
      {isDealerMatchedModal && <DealerMatchedModal />}
      <Header type="back" title="견적 파트너 추천 결과" backPath="/result/1" />
      <Content top={HEADER_HEIGHT} bottom={DEALER_BUTTON_HEIGHT}>
        <Title>{IS_HIDDEN ? '' : userTendencySentence}</Title>
        <CardContainer>
          <CarContainer>
            <RankCarNameContainer>
              <Rank>{rankingInfoText}</Rank>
              <CarName>{`${brandName} ${carModelName}`}</CarName>
            </RankCarNameContainer>
            <Image src={imageSrc} alt={carModelName} width="201px" />
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
