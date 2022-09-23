/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import { SIDE_MARGIN } from '@constants/variables';

interface IProps {
  image: { src: any; width: string; alt: string };
  title: string;
  description: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 195px;
  margin: 0 auto;
  background: ${colors.SECONDARY_REAL_WHITE};
  box-shadow: 0px 5.2032px 20.8128px rgba(96, 100, 112, 0.04);
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 145px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

const Title = styled.div`
  font: ${fonts.BODY_EMPHASIS_1};
  color: ${colors.BLACK1};
  white-space: pre;
  margin: 0 0 8px 0;
`;

const Description = styled.div`
  font: ${fonts.SUBTITLE_T2};
  color: ${colors.SECONDARY_300};
  white-space: pre;
`;

const Banner: React.FC<IProps> = ({ image, title, description }) => {
  const { src, alt, width } = image;
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={src} alt={alt} width={width} />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </Wrapper>
  );
};

export default Banner;
