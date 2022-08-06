/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'next/link';
import Scroll from '@components/common/Scroll';
import Content from '@components/common/Content';
import TopNavigator from '@components/TopNavigator';
import Image from '@components/common/Image';
import Arrow from '@components/common/Arrow';
import * as colors from '@constants/colors';
import casperImage from '@assets/images/casper.svg';
import tendencyBannerImage from '@assets/images/tendency-banner.svg';
import dealerBannerImage from '@assets/images/dealer-banner.svg';

interface IStyleProps {
  backgroundColor?: string;
  imageSrc?: any;
  fontColor?: string;
}

const Recommendation = styled.div``;

const Title = styled.div`
  font: normal 400 20px / 27px roboto;
  color: ${colors.BLACK6};
  margin: 30px 3px 0 20px;
`;

const Description = styled.div`
  font: normal 400 12px / 20px roboto;
  color: ${colors.GRAY1};
  margin: 0 0 0 20px;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-shrink: 0;
  width: 314px;
  height: 180px;
  margin: 0 14px 0 0;
  border-radius: 8px;
  background: ${colors.WHITE1};
  box-shadow: 0px 2px 16px rgba(96, 100, 112, 0.12);
`;

const CarName = styled.div`
  position: absolute;
  top: 12px;
  left: 16px;
  font: normal 400 18px / 27px roboto;
  color: ${colors.BLACK6};
  z-index: 1;
`;

const ImageContainer = styled.div`
  margin: 0 16px 22px 0;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 6px;
`;

const Tag = styled.div`
  font: normal 400 12px / 24px roboto;
  color: ${colors.BLACK2};
  border: 0.5px solid ${colors.BLACK2};
  border-radius: 10px;
  padding: 0 10px;
`;

const MbtiButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 184px;
  height: 36px;
  border-radius: 8px;
  background-color: ${colors.YELLOW3};
`;
const MbtiText = styled.div`
  margin: 0 14px 0 0;
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
            <Scroll direction="x" width="100vw" height="212px">
              <Card>
                <CarName>현대 캐스퍼</CarName>
                <ImageContainer>
                  <Image
                    src={casperImage}
                    alt="casper"
                    width="205px"
                    height="129px"
                  />
                </ImageContainer>
              </Card>
              <Card>
                <CarName>현대 캐스퍼</CarName>
                <ImageContainer>
                  <Image
                    src={casperImage}
                    alt="casper"
                    width="205px"
                    height="129px"
                  />
                </ImageContainer>
              </Card>
              <Card>
                <CarName>현대 캐스퍼</CarName>
                <ImageContainer>
                  <Image
                    src={casperImage}
                    alt="casper"
                    width="205px"
                    height="129px"
                  />
                </ImageContainer>
              </Card>
            </Scroll>
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                width: calc(100% - 20px - 20px);
                margin: 20px 20px 0 20px;
              `}
            >
              <TagContainer>
                <Tag># 20대</Tag>
                <Tag># 여성</Tag>
              </TagContainer>
              <MbtiButton>
                <MbtiText>나의 MBTI 적용하기</MbtiText>
                <Arrow
                  length="8.5px"
                  width="1.5px"
                  color={colors.BLACK1}
                  direction="right"
                  calibrationX="1.5px"
                />
              </MbtiButton>
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
