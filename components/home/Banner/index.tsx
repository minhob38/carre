/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import styled from '@emotion/styled';
import Arrow from '@components/common/Arrow';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import testBannerImage from '@assets/images/banners/test-banner.svg';
import dealerBannerImage from '@assets/images/banners/dealer-banner.svg';

interface IProps {
  type: 'test' | 'dealer';
}

interface StyleIProps {
  backgroundColor: string;
  imageSrc: any;
  titleFontColor: string;
  descFontColor: string;
}

const Wrapper = styled.div`
  background-image: ${(
    props: Pick<StyleIProps, 'imageSrc' | 'backgroundColor'>,
  ) => `url(${props.imageSrc})`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 0 22px;
  border-radius: 8px;
  background-repeat: 'no-repeat';
  background-color: ${(
    props: Pick<StyleIProps, 'imageSrc' | 'backgroundColor'>,
  ) => props.backgroundColor};
`;

const BannerTextContainer = styled.div``;

const BannerTitle = styled.div`
  margin: 0 0 10px 0;
  font: ${fonts.TITLE_T2};
  color: ${(props: Pick<StyleIProps, 'titleFontColor'>) =>
    props.titleFontColor};
`;

const BannerDescription = styled.div`
  font: ${fonts.LABEL_3};
  color: ${(props: Pick<StyleIProps, 'descFontColor'>) => props.descFontColor};
  white-space: pre;
`;

const Banner: React.FC<IProps> = ({ type }) => {
  let title: string;
  let description: string;
  let imageSrc: any;
  let backgroundColor: string;
  let titleFontColor: string;
  let descFontColor: string;
  let arrowColor: string;
  let path: '/test/1' | '/dealer'; // TODO: dealer 페이지 만들기

  if (type === 'test') {
    path = '/test/1';
    title = '차량 구매 성향 테스트하기';
    description = `성향을 자세히 분석하여 당신에게 \n꼭 맞는 차를 추천해드려요`;
    imageSrc = testBannerImage.src;
    backgroundColor = colors.PRIMARY_400;
    titleFontColor = colors.SECONDARY_500;
    descFontColor = colors.SECONDARY_400;
    arrowColor = colors.SECONDARY_500;
  } else {
    path = '/dealer';
    title = '나에게 맞는 딜러찾기';
    description = `구매하고자 하는 차종이 있으신 \n당신에게 딜러를 추천해드립니다.`;
    imageSrc = dealerBannerImage.src;
    backgroundColor = colors.SECONDARY_500;
    titleFontColor = colors.SECONDARY_REAL_WHITE;
    descFontColor = colors.SECONDARY_100;
    arrowColor = colors.SECONDARY_REAL_WHITE;
  }

  return (
    <Link href={path} passHref={true}>
      <Wrapper backgroundColor={backgroundColor} imageSrc={imageSrc}>
        <BannerTextContainer>
          <BannerTitle titleFontColor={titleFontColor}>{title}</BannerTitle>
          <BannerDescription descFontColor={descFontColor}>
            {description}
          </BannerDescription>
        </BannerTextContainer>
        <Arrow
          length="8.5px"
          width="1.5px"
          color={arrowColor}
          direction="right"
          calibrationX="1.5px"
        />
      </Wrapper>
    </Link>
  );
};

export default Banner;
