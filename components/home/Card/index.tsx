/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';

interface IProps {
  title: string;
  src: any;
  onClick: React.MouseEventHandler<HTMLDivElement>;
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
  flex: 1;
  /* width: 314px; */
  height: 180px;
  padding: 10px;
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

const Card: React.FC<IProps> = ({ title, src, onClick }) => {
  return (
    <>
      <Wrapper onClick={onClick}>
        <CarName>{title}</CarName>
        <ImageContainer>
          <Image src={src} alt={title} width="205px" />
        </ImageContainer>
      </Wrapper>
    </>
  );
};

export default Card;
