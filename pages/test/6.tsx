/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import ImageLabel from '@components/common/ImageLabel';
import QuestionProgressBar from '@components/test/QuestionProgressBar';
import Scroll from '@components/common/Scroll';
import Loading from '@animations/Loading';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, NEXT_BUTTON_HEIGHT } from '@constants/size';
// import { questions } from '@constants/variables';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { actions } from '@store/slices/surveySlice';
import { shallowEqual } from 'react-redux';
import ServerErrorModal from '@modals/ServerErrorModal';

const Description = styled.div`
  width: ${`calc(100% - ${margins.SIDE_SUB_MARGIN} - ${margins.SIDE_SUB_MARGIN})`};
  margin: 0 auto 12px auto;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_500};
  /* white-space: pre; */
`;

const BarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px 0 0 0;
`;

const QuetsionContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 12px 0;
  width: ${`calc(100% - ${margins.SIDE_SUB_MARGIN} - ${margins.SIDE_SUB_MARGIN})`};
  margin: 0 auto;
`;

const Page = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font: ${fonts.BODY_REGULAR_2};
  margin: 2px 0 12px ${margins.SIDE_SUB_MARGIN};
  color: ${colors.SECONDARY_400};
`;

const Test: NextPage = () => {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(100);
  const dispatch = useTypedDispatch();
  const isServerErrorModal = useTypedSelector(
    (state) => state.rootReducer.appReducer.isServerErrorModal,
  );
  const retry = useTypedSelector(
    (state) => state.rootReducer.errorReducer.retry,
  );
  const surveyQuestions = useTypedSelector(
    (state) => state.rootReducer.surveyReducer.surveyQuestions,
  );
  const surveyToken = useTypedSelector(
    (state) => state.rootReducer.surveyReducer.surveyToken,
  );
  const surveyAnswers = useTypedSelector(
    (state) => state.rootReducer.inputReducer.survey,
    shallowEqual,
  );
  const router = useRouter();

  // const handleNextClick = () => {
  //   if (page >= totalPage) return router.push('/test/7');
  //   setPage(page + 1);
  // };

  useEffect(() => {
    if (page >= totalPage && page == Object.keys(surveyAnswers).length) {
      dispatch(
        actions.saveSurveyAnswersAsync({
          surveyToken,
          surveyQuestions,
          surveyAnswers,
        }),
      );
      // router.push('/test/7');
      router.push('/result');
    }
  }, [
    dispatch,
    page,
    router,
    surveyAnswers,
    surveyQuestions,
    surveyToken,
    totalPage,
    retry,
  ]);

  useEffect(() => {
    if (!surveyToken) {
      return alert('survey token does not exist');
    }
    dispatch(actions.getSurveyQuestionsAsync(surveyToken));
  }, [dispatch, surveyToken]);

  const handleImageClick = async () => {
    if (process.env.NODE_ENV === 'production') {
      await new Promise((resolve, reject) => {
        setTimeout(() => resolve(''), 500);
      });
    }
    if (page >= totalPage) return;
    setPage(page + 1);
  };

  useEffect(() => {
    if (surveyQuestions) setTotalPage(surveyQuestions.length);
  }, [surveyQuestions]);

  if (!surveyQuestions) return <Loading text={'설문을 불러오고 있습니다.'} />;

  const questionToken = surveyQuestions[page - 1].surveyQuestionToken;
  const firstQuestionFactorElement =
    surveyQuestions[page - 1].firstQuestionFactorElement;
  const secondQuestionFactorElement =
    surveyQuestions[page - 1].secondQuestionFactorElement;
  const firstQuestionImageSrc =
    surveyQuestions[page - 1].firstQuestionImagePath;
  const secondQuestionImageSrc =
    surveyQuestions[page - 1].secondQuestionImagePath;

  return (
    <>
      {isServerErrorModal && <ServerErrorModal />}
      <Header title="차량 성향 테스트" type="back" backPath="/test/5" />
      {/* <Content top={HEADER_HEIGHT} bottom={NEXT_BUTTON_HEIGHT}> */}
      <Content top={HEADER_HEIGHT} bottom={'0'}>
        <BarContainer>
          <QuestionProgressBar stage={page} total={totalPage} type="fill" />
        </BarContainer>
        <Page>{`${page}/${totalPage} 문항`}</Page>
        <Description>
          {`다음 두 가지의 상황 중 자신에게 더 잘 맞다고 \n느껴지는 상황을 선택해주세요.`}
        </Description>
        <Scroll direction="y" height="calc(100% - 127px - 10px)">
          <QuetsionContainer>
            <ImageLabel
              key={uuid4()}
              input={{
                type: 'radio',
                name: questionToken,
                value: firstQuestionFactorElement,
              }}
              style={{ width: '100%' }}
              image={{
                src: firstQuestionImageSrc,
                alt: 'first-question',
              }}
              category="survey"
              onClick={handleImageClick}
            />
            <ImageLabel
              key={uuid4()}
              input={{
                type: 'radio',
                name: questionToken,
                value: secondQuestionFactorElement,
              }}
              style={{ width: '100%' }}
              image={{
                src: secondQuestionImageSrc,
                alt: 'second-question',
              }}
              category="survey"
              onClick={handleImageClick}
            />
          </QuetsionContainer>
        </Scroll>
        {/* <NextButton title="다음" onClick={handleNextClick} /> */}
      </Content>
    </>
  );
};

export default Test;
