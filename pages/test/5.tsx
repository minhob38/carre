/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import LinkButton from '@components/common/LinkButton';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT } from '@constants/size';
import { actions } from '@store/slices/surveySlice';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { useEffect } from 'react';

const Title = styled.div`
  margin: 291px 0 0 0;
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
`;

const Description = styled.div`
  margin: 4px 0 30px 0;
  font: ${fonts.SUBTITLE_T1};
  color: ${colors.SECONDARY_400};
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const Test: NextPage = () => {
  const router = useRouter();
  const dispatch = useTypedDispatch();
  const surveyToken = useTypedSelector(
    (state) => state.rootReducer.surveyReducer.surveyToken,
  );
  const input: any = useTypedSelector((state) => {
    const inputState = state.rootReducer.inputReducer;
    const {
      birthYear,
      gender,
      carUsagePurpose,
      budget,
      minBudgetValue,
      maxBudgetValue,
      passengerCount,
      drivenDistanceInYear,
    } = inputState;

    return {
      birthYear,
      gender,
      carUsagePurpose,
      userBudget: 10000 * Number(budget),
      userBudgetMin: 10000 * Number(minBudgetValue),
      userBudgetMax: 10000 * Number(maxBudgetValue),
      passengerCount,
      drivenDistanceInYear,
    };
  });

  useEffect(() => {
    if (!surveyToken) {
      return alert('survey token does not exist');
    }
    dispatch(actions.bindSurveyAsync({ surveyToken, input }));
  }, [dispatch, input, surveyToken]);

  const handleButtonClick = () => router.push('/test/6');

  return (
    <>
      <Header title="차량 성향 테스트" type="back" backPath="/test/3" />
      <Content top={HEADER_HEIGHT} bottom="0">
        <Container>
          <Title>차량 성향 테스트하기</Title>
          <Description>당신에게 맞는 차량을 전문 분석해 알려드려요</Description>
          <LinkButton
            // path="/test/6"
            title="시작하기"
            width={`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`}
            height="50px"
            onClick={handleButtonClick}
          />
        </Container>
      </Content>
    </>
  );
};

export default Test;
