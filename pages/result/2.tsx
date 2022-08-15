/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { v4 as uuid4 } from 'uuid';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Image from '@components/common/Image';
import Scroll from '@components/common/Scroll';
import ResultCard from '@components/result/ResultCard';
import DealerButton from '@components/result/DealerButton';
import Attractions from '@components/result/Attractions';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, DEALER_BUTTON_HEIGHT } from '@constants/size';
import casperImage from '@assets/images/casper.svg';
import Chip from '@components/result/BigChip';
import { pictures, carColors } from '@constants/variables';

const Title = styled.div`
  margin: 22px 0 22px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 20px - 20px);
  margin: 0 auto 16px auto;
`;

const PicturesContainer = styled.div`
  display: flex;
  width: calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN});
  gap: 0 23px;
  margin: 0 auto;
`;

const PictureBox = styled.div``;

const CarColorsContainer = styled.div`
  display: flex;
  width: calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN});
  gap: 0 12px;
  margin: 16px auto 0 auto;
  height: 100px;
`;

const CarColor = styled.div`
  width: 48px;
  height: 30px;
  border: 0.5px solid ${colors.SECONDARY_200};
  border-radius: 4px;
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor};
`;

const TrimContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 14px ${margins.SIDE_SUB_MARGIN};
`;

const TrimTitle = styled.div`
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
`;

const TrimBorder = styled.div`
  box-sizing: border-box;
  height: 20px;
  width: 1.5px;
  margin: 0 12px;
  border-left: 1.5px solid ${colors.SECONDARY_400};
`;

const TrimCar = styled.div`
  font: ${fonts.SUBTITLE_T1};
  color: ${colors.PRIMARY_400};
`;

const TrimsContainer = styled.div`
  display: flex;
  width: calc(100% - ${margins.SIDE_SUB_MARGIN} - ${margins.SIDE_SUB_MARGIN});
  margin: 0 auto;
  gap: 0 12px;
`;

const TrimDetailContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 16px 0 0 0;
  gap: 0 8px;
  border-bottom: 1px solid ${colors.PRIMARY_400};
`;

const TrimDetail = styled.div`
  font: ${fonts.SUBTITLE_T1};
  color: ${colors.SECONDARY_400};
  padding: 0 10px;
  flex-shrink: 0;
`;

const Border = styled.div`
  border-bottom: 1px solid ${colors.SECONDARY_200};
`;

const Result: NextPage = () => {
  const Pictures = pictures.map((picture) => {
    return (
      <PictureBox key={uuid4()}>
        <Image
          src={picture.src}
          alt={picture.alt}
          width={picture.width}
          height={picture.height}
        />
      </PictureBox>
    );
  });

  const CarColors = carColors.map((color) => {
    return <CarColor key={uuid4()} backgroundColor={color}></CarColor>;
  });

  return (
    <>
      <Header title="차량 상세보기" type="back" backPath="/result/1" />
      <Content top={HEADER_HEIGHT} bottom={DEALER_BUTTON_HEIGHT}>
        <Title>현대 캐스퍼 액티브</Title>
        <ImageContainer>
          <Image src={casperImage} alt="casper" width="271px" height="170px" />
        </ImageContainer>
        <Scroll direction="x" width="100%">
          <PicturesContainer>{Pictures}</PicturesContainer>
        </Scroll>
        <Scroll direction="x" width="100%">
          <CarColorsContainer>{CarColors}</CarColorsContainer>
        </Scroll>
        <TrimContainer>
          <TrimTitle>트림</TrimTitle>
          <TrimBorder />
          <TrimCar>캐스퍼액티브</TrimCar>
        </TrimContainer>
        <Scroll direction="x" width="100%">
          <TrimsContainer>
            <Chip title="파워트레인/성능" type="yes" />
            <Chip title="지능형 안전 기술" type="no" />
            <Chip title="안전" type="no" />
          </TrimsContainer>
        </Scroll>
        <Scroll direction="x" width="100%">
          <TrimDetailContainer>
            <TrimDetail>스마트스트림 가솔린 1.0 엔진</TrimDetail>
            <TrimDetail>4단 자동변속기</TrimDetail>
            <TrimDetail>풋파킹 브레이크</TrimDetail>
          </TrimDetailContainer>
        </Scroll>
        <Border />
      </Content>
      <DealerButton />
    </>
  );
};

export default Result;
