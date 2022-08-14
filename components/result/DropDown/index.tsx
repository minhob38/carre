/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import styled from '@emotion/styled';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import upArrowImage from '@assets/images/icons/small-black-up-arrow.svg';
import downArrowImage from '@assets/images/icons/small-black-down-arrow.svg';

interface IProps {
  title: string;
}

interface IStyleProps {
  isDown: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN});
  border-radius: 8px;
  background-color: ${colors.WHITE1};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
`;

const Title = styled.div`
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_500};
`;

const ItemContainer = styled.div`
  display: ${(props: IStyleProps) => (props.isDown ? 'flex' : 'none')};
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div``;

const DropDown: React.FC<IProps> = ({ children, title }) => {
  const [isDown, setIsDown] = useState<boolean>(false);

  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
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
