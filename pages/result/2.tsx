/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Scroll from '@components/common/Scroll';
import NextButton from '@components/common/NextButton';
import StyleCheckBoxes from '@components/common/StyleCheckBoxes';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, NEXT_BUTTON_HEIGHT } from '@constants/size';
import Chip from '@components/result/BigChip';
import Budget from '@components/common/MinMaxBudget';
import Toggle from '@components/common/Toggle';
import useWindowDimensions from '@hooks/useWindowDimension';
import ScoreCard from '@components/result/ScoreCard';
import BudgetInput from '@components/common/BudgetInput';

const Title = styled.div`
  margin: 0 0 0 ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
`;

const Subtitle = styled.div`
  margin: 2px 0 14px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.SUBTITLE_T2};
  color: ${colors.SECONDARY_300};
`;

const InputContainer = styled.div`
  width: calc(100% - 2 * ${margins.SIDE_MAIN_MARGIN});
  margin: 0 auto;
`;

const ToggleContainer = styled.div`
  margin: 0 0 47px ${margins.SIDE_MAIN_MARGIN};
`;

const StyleCheckBoxesContainer = styled.div`
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto;
`;

const NavigatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 16px 0 20px 0;
  padding: 0 ${margins.SIDE_MAIN_MARGIN} 0 ${margins.SIDE_MAIN_MARGIN};
`;

const BudgetContainer = styled.div`
  margin: 0 0 20px 0;
`;

const StyleContainer = styled.div`
  margin: 0 0 26px 0;
`;

const ValueContainer = styled.div`
  margin: 0 0 52px 0;
`;

const Result: NextPage = () => {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const { width, height } = useWindowDimensions();
  const budgetRef = useRef<HTMLDivElement>(null);
  const styleRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);
  const [isBudgetViewd, setIsBudgetViewd] = useState<boolean>(true);
  const [isStyleViewd, setIsStyleViewd] = useState<boolean>(false);
  // const [isValueViewd, setIsValueViewd] = useState<boolean>(false);

  const handleDetectScroll = () => {
    const topOffset = 72 + 62; // header 및 nav 높이
    const bottomOffset = (height || 0) - 72 - 62 - 72; // header 및 nav 및 nest button 높이

    if (!budgetRef.current || !styleRef.current || !valueRef.current) return;
    const budgetPosition =
      budgetRef.current.getBoundingClientRect().top - topOffset;
    const stylePosition =
      styleRef.current.getBoundingClientRect().top - topOffset + 0; //styleRef.current.clientHeight / 2 <- 중간점 기반
    // const valuePosition =
    //   valueRef.current.getBoundingClientRect().top - topOffset;

    if (budgetPosition < -10) {
      setIsBudgetViewd(false);
    } else if (budgetPosition > bottomOffset) {
      setIsBudgetViewd(false);
    } else {
      setIsBudgetViewd(true);
      setIsStyleViewd(false);
      // setIsValueViewd(false);
      return;
    }

    if (stylePosition < 0) {
      setIsStyleViewd(false);
    } else if (stylePosition > bottomOffset) {
      setIsStyleViewd(false);
    } else {
      setIsBudgetViewd(false);
      setIsStyleViewd(true);
      // setIsValueViewd(false);
      return;
    }

    // if (valuePosition < 0) {
    //   setIsValueViewd(false);
    // } else if (valuePosition > bottomOffset) {
    //   setIsValueViewd(false);
    // } else {
    //   setIsBudgetViewd(false);
    //   setIsStyleViewd(false);
    //   setIsValueViewd(true);
    // }
  };

  const handleInputFocus = () => setIsInputFocused(true);
  const handleInputBlur = () => setIsInputFocused(false);

  return (
    <>
      <Header title="검사 결과 조절" type="back" backPath="/result/1" />
      <Content top={HEADER_HEIGHT} bottom={NEXT_BUTTON_HEIGHT}>
        <NavigatorContainer>
          {/* <Chip title="가격 변경" type={isBudgetViewd ? 'yes' : 'no'} /> */}
          {/* <Chip title="차량 스타일 변경" type={isStyleViewd ? 'yes' : 'no'} /> */}
          {/* <Chip title="차량 가치 변경" type={isValueViewd ? 'yes' : 'no'} /> */}
        </NavigatorContainer>
        <Scroll
          direction="y"
          height={'calc(100% - 72px)'}
          width="100%"
          onScroll={handleDetectScroll}
        >
          <BudgetContainer ref={budgetRef}>
            <Title>가격 변경</Title>
            <Subtitle>가격을 변경할 수 있어요.</Subtitle>
            <InputContainer onFocus={handleInputFocus} onBlur={handleInputBlur}>
              <BudgetInput />
            </InputContainer>
          </BudgetContainer>
          <ToggleContainer>
            <Toggle />
          </ToggleContainer>
          <StyleContainer ref={styleRef}>
            <Title>차량 스타일 변경</Title>
            <Subtitle>차량 스타일을 변경한 후 확인해보세요.</Subtitle>
            <StyleCheckBoxesContainer>
              <StyleCheckBoxes />
            </StyleCheckBoxesContainer>
          </StyleContainer>
          {/* <ValueContainer ref={valueRef}>
            <Title>차량 가치 변경</Title>
            <Subtitle>가치별 차량 정보를 알 수 있어요</Subtitle>
            <ScoreCard type="dynamic" />
          </ValueContainer> */}
        </Scroll>
      </Content>
      {!isInputFocused && <NextButton title="다음" path="/result" />}
    </>
  );
};

export default Result;
