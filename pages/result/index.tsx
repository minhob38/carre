/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import Link from 'next/link';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Scroll from '@components/common/Scroll';
import ScoreCard from '@components/result/ScoreCard';
import Loading from 'animations/Loading';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT } from '@constants/size';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { IS_HIDDEN } from '@constants/variables';
import { useEffect } from 'react';
import { actions } from '@store/slices/surveySlice';
import ServerErrorModal from '@modals/ServerErrorModal';

const BUTTON_POSTION = '44px';
const BUTTON_HEIGHT = '70px';

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0 16px 0;
  font: ${fonts.HEADLINE_H1};
  color: ${colors.SECONDARY_500};
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.BODY_REGULAR_2};
  color: ${colors.SECONDARY_400};
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 49px 0;
  font: ${fonts.BODY_REGULAR_2};
  color: ${colors.SECONDARY_400};
  text-align: center;
  white-space: pre;
`;

const Background = styled.div`
  position: relative;
  margin: 71px 0 0 0;
  /* background-color: red; */
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vw;
  border-radius: 50%;
  background-color: ${colors.PRIMARY_350};
  z-index: -1;
`;

const Rectangle = styled.div`
  position: absolute;
  top: 50vw;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #f7ca54 0%,
    rgba(255, 255, 255, 0.94) 100%
  );
  z-index: -1;
`;

const NextButton = styled.div`
  /* position: fixed;
  left: 50%;
  bottom: ${BUTTON_POSTION};
  transform: translate(-50%, 0); */
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  height: 70px;
  margin: 0 auto 44px auto;
  border-radius: 8px;
  background-color: ${colors.SECONDARY_REAL_BLACK};
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_REAL_WHITE};
`;

const Margin = styled.div`
  flex: 1;
`;

const Result: NextPage = () => {
  const dispatch = useTypedDispatch();
  const isServerErrorModal = useTypedSelector(
    (state) => state.rootReducer.appReducer.isServerErrorModal,
  );
  const retry = useTypedSelector(
    (state) => state.rootReducer.errorReducer.retry,
  );
  const surveyToken = useTypedSelector(
    (state) => state.rootReducer.surveyReducer.surveyToken,
  );
  const tendency = useTypedSelector((state) => {
    return state.rootReducer.resultReducer.tendency;
  });

  useEffect(() => {
    if (!surveyToken) {
      return alert('survey token does not exist');
    }
    dispatch(actions.analyzeSurveyAnswersAsync(surveyToken));
  }, [dispatch, surveyToken, retry]);

  if (!tendency) return <Loading text="취향 결과를 불러오고 있습니다." />;

  const { userTendencySentence, userTendencyTitle } = tendency;

  return (
    <>
      {isServerErrorModal && <ServerErrorModal />}
      <Header title="나의 취향 결과" type="close" closePath="/" />
      <Content
        top={HEADER_HEIGHT}
        bottom={'0'}
        // bottom={`(${BUTTON_HEIGHT} + ${BUTTON_POSTION})px`}
        // backgroudColor={colors.PRIMARY_400}
      >
        <Scroll
          direction="y"
          height="100%"
          // height={`calc(100% - ${BUTTON_HEIGHT} - ${BUTTON_POSTION} - 15px)`}
        >
          {/* TODO: 변수로 사용자 이름 넣기 */}
          <Background>
            <Circle />
            <Rectangle />
            <Title>{IS_HIDDEN ? '당신의 차는' : userTendencyTitle}</Title>
            <SubTitle>
              {IS_HIDDEN ? '' : '두마리 토끼를 잡으려는 당신!'}
            </SubTitle>
            <Description>{userTendencySentence}</Description>
            <ScoreCard type="static" />
          </Background>
          <Margin />
          <Link href="/result/1" passHref={true}>
            <NextButton>내 취향의 차량 보기</NextButton>
          </Link>
        </Scroll>
      </Content>
    </>
  );
};

export default Result;
