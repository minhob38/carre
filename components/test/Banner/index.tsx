/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 20px - 20px);
  height: 194px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(96, 100, 112, 0.04);
  border-radius: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.div`
  font: normal 600 16px / 27px Roboto;
  color: ${colors.BLACK1};
  white-space: pre;
`;

const Description = styled.div`
  font: normal 400 14px / 20px Roboto;
  color: ${colors.GRAY1};
  white-space: pre;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 145px;
`;

const Banner: React.FC<{ data: any }> = ({ data }) => {
  const { image, title, description } = data;
  const { src, alt, width, height } = image;
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={src} alt={alt} width={width} height={height} />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </Wrapper>
  );
};

export default Banner;
