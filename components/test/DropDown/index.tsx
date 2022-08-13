/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import styled from '@emotion/styled';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as margins from '@constants/margins';
import * as fonts from '@constants/fonts';
import upArrowImage from '@assets/images/icons/small-black-up-arrow.svg';
import downArrowImage from '@assets/images/icons/small-black-down-arrow.svg';

interface IProps {
  title: string;
  src: any;
  alt: string;
  width: string;
  height: string;
}

interface IStyleProps {
  isDown: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  border-radius: 8px;
  background-color: ${(props: IStyleProps) =>
    props.isDown ? colors.SECONDARY_100 : colors.SECONDARY_REAL_WHITE};
  box-shadow: 0px 5px 20px rgba(96, 100, 112, 0.04);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 20px - 20px);
  height: 70px;
  margin: auto;
  border-bottom: ${(props: IStyleProps) =>
    props.isDown ? `solid 1px ${colors.SECONDARY_200}` : 'none'};
`;

const Title = styled.div`
  margin: 0 0 0 16px;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
`;

const ItemContainer = styled.div`
  display: ${(props: IStyleProps) => (props.isDown ? 'grid' : 'none')};
  grid-template-columns: repeat(3, 1fr);
  justify-content: start;
  align-items: center;
  justify-items: center;
  row-gap: 8px;
  width: 100%;
  padding: 14px 20px;
`;

const Container = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  display: flex;
`;

const DropDown: React.FC<IProps> = ({
  children,
  title,
  src,
  alt,
  width,
  height,
}) => {
  const [isDown, setIsDown] = useState<boolean>(false);

  return (
    <Wrapper isDown={isDown}>
      <Header isDown={isDown}>
        <Container>
          <Image src={src} alt={alt} width={width} height={height} />
          <Title>{title}</Title>
        </Container>
        <ImageContainer onClick={() => setIsDown(!isDown)}>
          <Image
            src={isDown ? downArrowImage : upArrowImage}
            alt={isDown ? 'down-arrow' : 'up-arrow'}
            width="20px"
            height="20px"
          />
        </ImageContainer>
      </Header>
      <ItemContainer isDown={isDown}>{children}</ItemContainer>
    </Wrapper>
  );
};

export default DropDown;
