/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Scroll from '@components/common/Scroll';
import ResultCard from '@components/result/ResultCard';
import DropDown from '@components/result/DropDown';
import DealerButton from '@components/result/DealerButton';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, DEALER_BUTTON_HEIGHT } from '@constants/size';

const Title = styled.div`
  margin: 22px 0 16px ${margins.SIDE_MAIN_MARGIN};
  padding: 0 100px 0 0;
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
`;

const ScrollContainer = styled.div`
  width: 100%;
  padding: 0 ${margins.SIDE_MAIN_MARGIN};
`;

const InformationTitle = styled.div`
  margin: 0 0 8px 0;
  font: normal 400 17px / 23px roboto;
  color: ${colors.YELLOW2};
`;

const InformationDescription = styled.div`
  font: normal 400 14px / 22px roboto;
  color: ${colors.BLACK3};
`;

const DropDownContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 12px 0;
  align-items: center;
`;

const InfomationContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-self: center;
  width: 100%;
  margin: 0 0 16px 0;
  padding: 0 20px;
`;

const Result: NextPage = () => {
  const values: { value: string; title: string; description: string }[] = [
    {
      value: '가성비',
      title: ' 연비 15.3 km/L SUV차량 기준 8등',
      description:
        '해외 자동차 전문매체 왓카(What Car) 반복된 주행과 엄격하게 통제된 실험 조건속에 실제 연비 측정 결과 SUV차량 기준 8등!',
    },
    {
      value: '성능',
      title: ' 연비 15.3 km/L SUV차량 기준 8등',
      description:
        '해외 자동차 전문매체 왓카(What Car) 반복된 주행과 엄격하게 통제된 실험 조건속에 실제 연비 측정 결과 SUV차량 기준 8등!',
    },
    {
      value: '편의성',
      title: ' 연비 15.3 km/L SUV차량 기준 8등',
      description:
        '해외 자동차 전문매체 왓카(What Car) 반복된 주행과 엄격하게 통제된 실험 조건속에 실제 연비 측정 결과 SUV차량 기준 8등!',
    },
  ];

  const Values = values.map((value) => {
    return (
      <DropDown title={value.value} key={uuid4()}>
        <InfomationContainer>
          <InformationTitle>{value.title}</InformationTitle>
          <InformationDescription>{value.description}</InformationDescription>
        </InfomationContainer>
      </DropDown>
    );
  });

  return (
    <>
      <Header title="나의 추천 차량" type="close" closePath="/" />
      <Content top={HEADER_HEIGHT} bottom={DEALER_BUTTON_HEIGHT}>
        <Title>성능과 안전 두마리 토끼를 잡으려는 당신!</Title>
        <ScrollContainer>
          <Scroll direction="x" width="100%">
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </Scroll>
        </ScrollContainer>
        {/* <DropDownContainer>{Values}</DropDownContainer> */}
      </Content>
      <DealerButton />
    </>
  );
};

export default Result;
