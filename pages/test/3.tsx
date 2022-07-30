/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import InputLabel from '@components/InputLabel';
import NextButton from '@components/NextButton';
import ProgressBar from '@components/ProgressBar';
import Header from '@components/Header';
import Scroll from '@components/Scroll';
import Content from '@components/Content';
import * as colors from '@constants/colors';
import { brands } from '@constants/variables';
import brandImage from '@assets/images/brand.svg';
import carImage from '@assets/images/car.svg';
import fuelImage from '@assets/images/fuel.svg';

import DropDown from '@components/DropDown';

const Title = styled.div`
  margin: 30px 0 2px 20px;
  font: normal 700 20px / 32px roboto;
  color: ${colors.BLACK1};
`;

const Description = styled.div`
  margin: 0 0 20px 20px;
  font: normal 400 14px / 23px roboto;
  color: ${colors.GRAY1};
`;

const DropDownContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 20px;
`;

const Test: NextPage = () => {
  const Brands = brands.map((brand) => {
    return (
      <InputLabel
        key={uuid4()}
        input={{
          title: brand.title,
          type: 'checkbox',
          name: 'brand',
          value: brand.value,
        }}
        style={{
          width: '95px',
          height: '48px',
          font: 'normal 400 12px / 26px roboto',
        }}
      />
    );
  });
  return (
    <>
      <Header title="나의 정보 입력" />
      <Content top="55px" bottom="99px">
        <Title>추가 선택 조건 선택</Title>
        <Description>꼭 원하는 조건이 있다면선택해주세요</Description>
        <Scroll direction="y" height="calc(100% - 120px)">
          <DropDownContainer>
            <DropDown
              title="브랜드"
              src={brandImage}
              alt="brand"
              width="30px"
              height="30px"
            >
              {Brands}
            </DropDown>
            <DropDown
              title="연료"
              src={fuelImage}
              alt="fuel"
              width="30px"
              height="30px"
            >
              {Brands}
            </DropDown>
            <DropDown
              title="차종"
              src={carImage}
              alt="car"
              width="30px"
              height="30px"
            >
              {Brands}
            </DropDown>
          </DropDownContainer>
        </Scroll>
        <ProgressBar stage={3} />
      </Content>
      <NextButton path={'/test/3'} />
    </>
  );
};

export default Test;