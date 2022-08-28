/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import NextButton from '@components/common/NextButton';
import Content from '@components/common/Content';
import StyleCheckBoxes from '@components/common/StyleCheckBoxes';
import Scroll from '@components/common/Scroll';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, NEXT_BUTTON_HEIGHT } from '@constants/size';
import { actions } from '@store/slices/surveySlice';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';

const Title = styled.div`
  margin: 28px 0 4px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
  white-space: pre;
`;

const Description = styled.div`
  margin: 0 0 27px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.SUBTITLE_T1};
  color: ${colors.SECONDARY_300};
  white-space: pre;
`;

const StyleCheckBoxesContainer = styled.div`
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 16px auto 0 auto;
  background-color: red;
`;

const Test: NextPage = () => {
  const router = useRouter();
  const dispatch = useTypedDispatch();
  const surveyToken = useTypedSelector(
    (state) => state.rootReducer.surveyReducer.surveyToken,
  );

  const handleButtonClick = () => {
    if (!surveyToken) {
      return alert('survey token does not exist');
    }
    dispatch(actions.analyzeSurveyAnswersAsync(surveyToken));
    router.push('/result');
  };

  return (
    <>
      <Header title="차량 성향 테스트" type="close" closePath="/" />
      <Content top={HEADER_HEIGHT} bottom={NEXT_BUTTON_HEIGHT}>
        <Title>차량 스타일 선택</Title>
        <Description>선호하는 차량 스타일을 선택해주세요.</Description>
        <Scroll direction="y" height="calc(100% - 113px - 10px)">
          <StyleCheckBoxesContainer>
            <StyleCheckBoxes />
          </StyleCheckBoxesContainer>
        </Scroll>
      </Content>
      {/* test 결과로 보내기 */}
      <NextButton title="다음" onClick={handleButtonClick} />
    </>
  );
};

export default Test;
