/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Scroll from '@components/common/Scroll';
import ResultCard from '@components/result/ResultCard';
import DealerButton from '@components/result/DealerButton';
import Attractions from '@components/result/Attractions';
import Image from '@components/common/Image';
import Loading from '@animations/Loading';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, DEALER_BUTTON_HEIGHT } from '@constants/size';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { IS_HIDDEN } from '@constants/variables';
import rightArrowImage from '@assets/images/icons/big-gray-right-arrow.svg';
import letArrowImage from '@assets/images/icons/big-gray-left-arrow.svg';
import { actions } from '@store/slices/resultSlice';
import Comparison from '@components/result/Comparison';

interface IStyleProps {
  isHidden: boolean;
}

const Title = styled.div`
  margin: 22px 0 16px ${margins.SIDE_MAIN_MARGIN};
  padding: 0 100px 0 0;
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
  white-space: pre;
`;

const ResultCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  margin: 0 auto;
`;

const Border = styled.div`
  padding: 5px 0 5px 0;
  background-color: ${colors.SECONDARY_100};
`;

const EditButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  height: 60px;
  margin: 32px auto 19px auto;
  border-radius: 8px;
  background-color: ${colors.PRIMARY_400};
  font: ${fonts.BUTTON_1};
  color: ${colors.SECONDARY_500};
`;

const ArrowContainer = styled.div`
  margin: 25vh 15px 0 15px;
  visibility: ${(props: IStyleProps) => (props.isHidden ? 'hidden' : 'block')};
`;

const ComparisonContainer = styled.div`
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 50px auto 0 auto;
`;

const Result: NextPage = () => {
  const dispatch = useTypedDispatch();
  const carPage = useTypedSelector(
    (state) => state.rootReducer.resultReducer.carPage,
  );
  const recoms = useTypedSelector((state) => {
    return state.rootReducer.resultReducer.recoms;
  });
  if (!recoms) return <Loading text={'추천차량을 불러오고 있습니다.'} />;

  const { recommendCarInfoList, userTendencySentence } = recoms;
  // const ResultCards = recommendCarInfoList.slice(0, 5).map((recom) => {
  //   return <ResultCard key={uuid4()} data={recom} />;
  // });
  const firstRankInfo = recommendCarInfoList[0];
  const secondRankInfo = recommendCarInfoList[1];

  const minCarPage = 1;
  const maxCarPage = recommendCarInfoList.length;

  const handleLeftArrowClick = () => {
    if (carPage === minCarPage) return;
    dispatch(actions.setCarPage(carPage - 1));
  };

  const handleRightArrowClick = () => {
    if (carPage === maxCarPage) return;
    dispatch(actions.setCarPage(carPage + 1));
  };

  return (
    <>
      <Header title="나의 추천 차량" type="back" backPath="/result" />
      <Content top={HEADER_HEIGHT} bottom={DEALER_BUTTON_HEIGHT}>
        <Scroll direction="y" height="100%">
          <Title>{userTendencySentence}</Title>
          <ResultCardContainer>
            <ArrowContainer
              isHidden={carPage === minCarPage}
              onClick={handleLeftArrowClick}
            >
              <Image
                src={letArrowImage}
                alt="left-arrow"
                width="20px"
                height="20px"
              />
            </ArrowContainer>
            {/* <Scroll direction="x" width="100%"> */}
            <ResultCard
              key={uuid4()}
              data={recommendCarInfoList[carPage - 1]}
            />
            <ArrowContainer
              isHidden={carPage === maxCarPage}
              onClick={handleRightArrowClick}
            >
              <Image
                src={rightArrowImage}
                alt="right-arrow"
                width="20px"
                height="20px"
              />
            </ArrowContainer>
            {/* </Scroll> */}
          </ResultCardContainer>
          {/* <Border /> */}
          {!IS_HIDDEN && <Attractions />}
          <ComparisonContainer>
            <Comparison first={firstRankInfo} second={secondRankInfo} />
          </ComparisonContainer>
          <Link href="/result/2" passHref={true}>
            <EditButton>검사 결과 조절해보기</EditButton>
          </Link>
        </Scroll>
      </Content>
      <DealerButton />
    </>
  );
};

export default Result;
