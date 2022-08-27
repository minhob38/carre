/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import ImageLabel from '@components/common/ImageLabel';
import QuestionProgressBar from '@components/test/QuestionProgressBar';
import Scroll from '@components/common/Scroll';
import NextButton from '@components/common/NextButton';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, NEXT_BUTTON_HEIGHT } from '@constants/size';
// import { questions } from '@constants/variables';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { actions } from '@store/slices/surveySlice';
import { shallowEqual } from 'react-redux';

const Description = styled.div`
  margin: 0 0 12px ${margins.SIDE_SUB_MARGIN};
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_500};
  white-space: pre;
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
  const dispatch = useTypedDispatch();
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

  if (!surveyQuestions) return <div>API Loading...</div>;

  const TOTAL_PAGE = surveyQuestions.length;

  const handleNextClick = () => {
    if (page >= TOTAL_PAGE) return router.push('/test/7');
    setPage(page + 1);
  };
  const handleImageClick = async (ev) => {
    // await new Promise((resolve, reject) => {
    //   setTimeout(() => resolve(''), 1500);
    // });

    if (page >= TOTAL_PAGE) {
      dispatch(
        actions.saveSurveyAnswersAsync({
          surveyToken,
          surveyQuestions,
          surveyAnswers,
        }),
      );
      return router.push('/test/7');
    }
    // setPage(page + 1);
  };

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
      <Header title="차량 성향 테스트" type="close" closePath="/" />
      <Content top={HEADER_HEIGHT} bottom={NEXT_BUTTON_HEIGHT}>
        <BarContainer>
          <QuestionProgressBar stage={page} total={TOTAL_PAGE} />
        </BarContainer>
        <Page>{`${page}/${TOTAL_PAGE} 문항`}</Page>
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
              style={{
                width: '330px',
                height: '258px',
              }}
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
              style={{
                width: '330px',
                height: '258px',
              }}
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
