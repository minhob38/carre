/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Image from '@components/common/Image';
import Arrow from '@components/common/Arrow';
import * as colors from '@constants/colors';
import * as margins from '@constants/margins';
import * as fonts from '@constants/fonts';

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
        <Image src={src} alt={alt} width={width} height={height} />
        <Title>{title}</Title>
        <div
          css={css`
            flex: 1;
          `}
        />
        <Arrow
          length="14px"
          width="2px"
          color={colors.BLACK2}
          direction={isDown ? 'bottom' : 'top'}
          calibrationY="2.5px"
          onClick={() => setIsDown(!isDown)}
        />
        <div
          css={css`
            width: 20px;
          `}
        />
      </Header>
      <ItemContainer isDown={isDown}>{children}</ItemContainer>
    </Wrapper>
  );
};

export default DropDown;
