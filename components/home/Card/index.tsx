/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'next/link';
import Scroll from '@components/common/Scroll';
import Content from '@components/common/Content';
import TopNavigator from '@components/common/TopNavigator';
import Image from '@components/common/Image';
import Arrow from '@components/common/Arrow';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import casperImage from '@assets/images/casper.svg';
import tendencyBannerImage from '@assets/images/tendency-banner.svg';
import dealerBannerImage from '@assets/images/dealer-banner.svg';

interface IStyleProps {
  backgroundColor?: string;
  imageSrc?: any;
  fontColor?: string;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 314px;
  height: 180px;
  border-radius: 8px;
  background: ${colors.WHITE1};
  box-shadow: 0px 2px 16px rgba(96, 100, 112, 0.12);
`;

const CarName = styled.div`
  position: absolute;
  top: 12px;
  left: 16px;
  font: ${fonts.LABEL_1};
  color: ${colors.SECONDARY_REAL_BLACK};
  z-index: 1;
`;

const ImageContainer = styled.div`
  /* margin: 0 16px 22px 0; */
`;

const Card: React.FC = () => {
  return (
    <>
      <Wrapper>
        <CarName>현대 캐스퍼</CarName>
        <ImageContainer>
          <Image src={casperImage} alt="casper" width="205px" height="129px" />
        </ImageContainer>
      </Wrapper>
    </>
  );
};

export default Card;
