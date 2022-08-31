/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import casperImage from '@assets/images/casper.svg';

interface IProps {
  title: string;
  src: any;
}

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

const Card: React.FC<IProps> = ({ title, src }) => {
  return (
    <>
      <Wrapper>
        <CarName>{title}</CarName>
        <ImageContainer>
          <Image src={src} alt="casper" width="205px" />
        </ImageContainer>
      </Wrapper>
    </>
  );
};

export default Card;
