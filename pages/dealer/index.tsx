/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { useEffect } from 'react';
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
import { useTypedSelector, useTypedDispatch } from '@hooks/useStore';
import rightArrorImage from '@assets/images/icons/small-black-right-arrow.svg';
import { actions } from '@store/slices/dealerSlice';
import { useRouter } from 'next/router';
import ServerErrorModal from '@modals/ServerErrorModal';
import InputWarningModal from '@modals/InputWarningModal';

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
  const router = useRouter();
  const { is_survey, page } = router.query;
  const query = router.asPath.replace('/dealer', '');
  const isSurvey = is_survey === 'false' ? false : true;

  const dispatch = useTypedDispatch();
  const isInputWarningModal = useTypedSelector(
    (state) => state.rootReducer.appReducer.isInputWarningModal,
  );
  const isServerErrorModal = useTypedSelector(
    (state) => state.rootReducer.appReducer.isServerErrorModal,
  );
  const recoms = useTypedSelector((state) => {
    return state.rootReducer.resultReducer.recoms;
  });
  const dealers = useTypedSelector((state) => {
    return state.rootReducer.dealerReudcer.dealers;
  });
  const dealer = useTypedSelector((state) => {
    return state.rootReducer.dealerReudcer.dealer;
  });

  const carIndex = useTypedSelector((state) => {
    return state.rootReducer.resultReducer.carIndex;
  });

  const isDealerMatchingModal = useTypedSelector((state) => {
    return state.rootReducer.appReducer.isDealerMatchingModal;
  });
  const isDealerMatchedModal = useTypedSelector((state) => {
    return state.rootReducer.appReducer.isDealerMatchedModal;
  });

  useEffect(() => {
    if (!recoms) return;
    dispatch(
      actions.getBrandDealersAsync(
        recoms.recommendCarInfoList[carIndex - 1].brandCode,
      ),
    );
  }, [dispatch, carIndex, recoms]);

  if (!recoms || !dealers) {
    return <Loading text={'추천차량/딜러정보를 불러오고 있습니다.'} />;
  }

  const { recommendCarInfoList, userTendencySentence } = recoms;
  const bestRecommendCarInfo = recommendCarInfoList[carIndex - 1];
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
    const {
      dealerToken,
      promotionMainText,
      promotionSubText,
      feedbackMainText,
      feedbackSubText,
      imagePath,
      imageFileName,
    } = dealer;
    const imageSrc = imagePath + imageFileName;
    return (
      <DealerCard
        key={uuid4()}
        description={`${promotionMainText} \n${promotionSubText}`}
        src={imageSrc}
        chips={[feedbackMainText, feedbackSubText]}
        value={dealerToken}
      />
    );
  });

  return (
    <>
      {isServerErrorModal && <ServerErrorModal />}
      {isInputWarningModal && (
        <InputWarningModal title="딜러를 선택해주세요." />
      )}
      {isDealerMatchingModal && <DealerMatchingModal />}
      {isDealerMatchedModal && <DealerMatchedModal />}
      <Header
        type="back"
        title="견적 파트너 추천 결과"
        backPath={isSurvey ? '/result/1' : `/result/1${query}`}
      />
      <Content top={HEADER_HEIGHT} bottom={DEALER_BUTTON_HEIGHT}>
        <Title>{IS_HIDDEN ? '' : userTendencySentence}</Title>
        <CardContainer>
          <CarContainer>
            <RankCarNameContainer>
              <Rank>{rankingInfoText}</Rank>
              <CarName>{`${brandName} ${carModelName}`}</CarName>
            </RankCarNameContainer>
            <Image
              src={imageSrc}
              alt={carModelName}
              width="201px"
              // errSrc="https://static.carre.kr/dealer/dealer_icon_1.png"
            />
          </CarContainer>
          {!IS_HIDDEN && (
            <Image src={rightArrorImage} alt="right-arrow" width="20px" />
          )}
        </CardContainer>
        <Scroll direction="y" height="calc(100% - 170px)">
          <DealerCardContainer>{Dealers}</DealerCardContainer>
        </Scroll>
        <DealerButton path="/auth/signup/1" isActive={!!dealer} />
      </Content>
    </>
  );
};

export default Dealer;
