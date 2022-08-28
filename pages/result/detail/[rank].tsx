/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { v4 as uuid4 } from 'uuid';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Image from '@components/common/Image';
import Scroll from '@components/common/Scroll';
import DealerButton from '@components/result/DealerButton';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, DEALER_BUTTON_HEIGHT } from '@constants/size';
import casperImage from '@assets/images/casper.svg';
import Chip from '@components/result/BigChip';
import { pictures, carColors } from '@constants/variables';
import { useTypedSelector } from '@hooks/useStore';

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
  /* border-bottom: 1px solid ${colors.PRIMARY_400}; */
`;

const TrimDetail = styled.div`
  font: ${fonts.SUBTITLE_T1};
  color: ${colors.SECONDARY_400};
  padding: 0 10px;
  flex-shrink: 0;
  /* border-bottom: 1px solid ${colors.PRIMARY_400}; */
`;

const Border = styled.div`
  border-bottom: 1px solid ${colors.SECONDARY_200};
`;

export async function getStaticPaths() {
  return {
    paths: [{ params: { rank: '1' } }, { params: { rank: '2' } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

const Result: NextPage<any> = () => {
  const router = useRouter();
  const rank = parseInt(router.query.rank as string);
  const recoms = useTypedSelector((state) => {
    return state.rootReducer.resultReducer.recoms;
  });

  if (!recoms) {
    return <div>loading...</div>;
  }

  const { recommendCarInfoList } = recoms;
  const data = recommendCarInfoList.slice(rank - 1, rank)[0];
  const {
    brandName,
    carModelName,
    carImageFileName,
    carImagePath,
    trimList: trims,
  } = data;
  const imageSrc = carImagePath + carImageFileName;
  const trim = trims.find((trim) => trim.recommend);
  const { trimName, optionList: options } = trim;
  console.log(trim);
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

  const OptionsChips = options
    .filter((option) => option.recommend)
    .map((option) => {
      const { optionName } = option;
      return <TrimDetail key={uuid4()}>{optionName}</TrimDetail>;
    });

  return (
    <>
      <Header title="차량 상세보기" type="back" backPath="/result/1" />
      <Content top={HEADER_HEIGHT} bottom={DEALER_BUTTON_HEIGHT}>
        <Title>{`${brandName} ${carModelName} ${trimName}`}</Title>
        <ImageContainer>
          <Image src={imageSrc} alt={carModelName} width="271px" />
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
          <TrimCar>{`${carModelName} ${trimName}`}</TrimCar>
        </TrimContainer>
        <Scroll direction="x" width="100%">
          <TrimsContainer>
            <Chip title={trimName} type="yes" />
          </TrimsContainer>
        </Scroll>
        <Scroll direction="x" width="100%">
          <TrimDetailContainer>{OptionsChips}</TrimDetailContainer>
        </Scroll>
        <Border />
      </Content>
      <DealerButton />
    </>
  );
};

export default Result;
