/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Scroll from '@components/common/Scroll';
import ResultCard from '@components/result/ResultCard';
import * as colors from '@constants/colors';
import DropDown from '@components/result/DropDown';
import DealerButton from '@components/result/DealerButton';

const Title = styled.div`
  margin: 24px 0 20px 20px;
  font: normal 400 20px / 26px roboto;
  color: ${colors.BLACK1};
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

const Test: NextPage = () => {
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
      <Header title="나의 추천 차량" backPath="/test" />
      <Content top="55px" bottom="112px">
        <Title>성능과 안전 두마리 토끼를 잡으려는 당신!</Title>
        <Scroll direction="x" width="100%">
          <ResultCard />
        </Scroll>
        {/* <DropDownContainer>{Values}</DropDownContainer> */}
      </Content>
      <DealerButton />
    </>
  );
};

export default Test;
