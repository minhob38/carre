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
import Card from '@components/home/Card';
import Tag from '@components/home/Tag';
import MbtiButton from '@components/home/MbtiButton';

interface IStyleProps {
  backgroundColor?: string;
  imageSrc?: any;
  fontColor?: string;
}

const Recommendation = styled.div``;

const Title = styled.div`
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_REAL_BLACK};
  margin: 30px 3px 0 20px;
`;

const Description = styled.div`
  font: ${fonts.SUBTITLE_T2};
  color: ${colors.SECONDARY_300};
  margin: 0 0 20px 20px;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 6px;
`;

const BannerContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px 0;
  margin: 40px 0 0 20px;
`;

const BannerBox = styled.div`
  background-image: ${(props: IStyleProps) => `url(${props.imageSrc})`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 120px;
  padding: 0 22px;
  border-radius: 8px;
  background-repeat: 'no-repeat';
  background-color: ${(props: IStyleProps) => props.backgroundColor};
`;

const BannerTextContainer = styled.div``;

const BannerTitle = styled.div`
  margin: 0 0 10px 0;
  font: normal 400 20px / 27px roboto;
  color: ${(props: IStyleProps) => props.fontColor};
`;

const BannerDescription = styled.div`
  font: normal 400 12px / 16px roboto;
  color: ${(props: IStyleProps) => props.fontColor};
  white-space: pre;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 0 14px;
`;

const Index: NextPage = () => {
  return (
    <>
      <TopNavigator />
      <Content top="97px" bottom="0">
        <Scroll direction="y" height={`calc(100%)`}>
          <Recommendation>
            <Title>20대 여성들이 많이 타는차</Title>
            <Description>
              MBTI를 입력하면 나와 유사한 또래들이 타는 차를 보여드려요!
            </Description>
            <Scroll
              direction="x"
              width="calc(100% - 20px - 20px)"
              height="212px"
            >
              <CardContainer>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </CardContainer>
            </Scroll>
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                width: calc(100% - 20px - 20px);
                margin: 20px auto 40px auto;
              `}
            >
              <TagContainer>
                <Tag># 20대</Tag>
                <Tag># 여성</Tag>
              </TagContainer>
              <MbtiButton />
            </div>
          </Recommendation>
          <BannerContainer>
            <Link href={'/test'} passHref={true}>
              <BannerBox
                backgroundColor={colors.YELLOW1}
                imageSrc={tendencyBannerImage.src}
              >
                <BannerTextContainer>
                  <BannerTitle fontColor={colors.BLACK1}>
                    차량 구매 성향 테스트하기
                  </BannerTitle>
                  <BannerDescription fontColor={colors.BLACK1}>
                    {`성향을 자세히 분석하여 당신에게 \n꼭 맞는 차를 추천해드려요`}
                  </BannerDescription>
                </BannerTextContainer>
                <Arrow
                  length="8.5px"
                  width="1.5px"
                  color={colors.BLACK1}
                  direction="right"
                  calibrationX="1.5px"
                />
              </BannerBox>
            </Link>
            <BannerBox
              backgroundColor={colors.BLACK1}
              imageSrc={dealerBannerImage.src}
            >
              <BannerTextContainer>
                <BannerTitle fontColor={colors.WHITE1}>
                  나에게 맞는 딜러찾기
                </BannerTitle>
                <BannerDescription fontColor={colors.GRAY4}>
                  {`구매하고자 하는 차종이 있으신 \n당신에게 딜러를 추천해드립니다.`}
                </BannerDescription>
              </BannerTextContainer>
              <Arrow
                length="8.5px"
                width="1.5px"
                color={colors.WHITE1}
                direction="right"
                calibrationX="1.5px"
              />
            </BannerBox>
          </BannerContainer>
        </Scroll>
      </Content>
    </>
  );
};

export default Index;
