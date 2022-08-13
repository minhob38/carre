/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import InputLabel from '@components/common/InputLabel';
import NextButton from '@components/common/NextButton';
import ProgressBar from '@components/test/ProgressBar';
import Header from '@components/common/Header';
import Scroll from '@components/common/Scroll';
import Content from '@components/common/Content';
import DropDown from '@components/test/DropDown';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, NEXT_BUTTON_HEIGHT } from '@constants/size';
import { brands, fuels, categories } from '@constants/variables';
import brandImage from '@assets/images/icons/brand.svg';
import categoryImage from '@assets/images/icons/category.svg';
import fuelImage from '@assets/images/icons/fuel.svg';

const Title = styled.div`
  margin: 28px 0 4px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
`;

const Description = styled.div`
  margin: 0 0 20px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.SUBTITLE_T1};
  color: ${colors.SECONDARY_300};
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
          name: 'brands',
          value: brand.value,
        }}
        size="drop-down"
      />
    );
  });

  const Fuels = fuels.map((fuel) => {
    return (
      <InputLabel
        key={uuid4()}
        input={{
          title: fuel.title,
          type: 'checkbox',
          name: 'fuels',
          value: fuel.value,
        }}
        size="drop-down"
      />
    );
  });

  const Categories = categories.map((category) => {
    return (
      <InputLabel
        key={uuid4()}
        input={{
          title: category.title,
          type: 'checkbox',
          name: 'categories',
          value: category.value,
        }}
        size="drop-down"
      />
    );
  });

  return (
    <>
      <Header title="나의 정보 입력" type="close" closePath="/" />
      <Content
        top={HEADER_HEIGHT}
        bottom={`calc(${NEXT_BUTTON_HEIGHT} + 50px)`}
      >
        <Title>추가 선택 조건 선택</Title>
        <Description>꼭 원하는 조건이 있다면선택해주세요</Description>
        {/* 106은 Header와의 간격 */}
        <Scroll direction="y" height="calc(100% - 106px)">
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
              {Fuels}
            </DropDown>
            <DropDown
              title="차종"
              src={categoryImage}
              alt="category"
              width="30px"
              height="30px"
            >
              {Categories}
            </DropDown>
          </DropDownContainer>
        </Scroll>
        <ProgressBar stage={3} />
      </Content>
      <NextButton title="다음" path={'/test/5'} />
    </>
  );
};

export default Test;
