/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Image from '@components/Image';
import Arrow from '@components/Arrow';
import * as colors from '@constants/colors';
import brandImage from '@assets/images/brand.svg';

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
  width: calc(100% - 20px - 20px);
  border-radius: 8px;
  background-color: ${colors.GRAY2};
  background-color: ${(props: IStyleProps) =>
    props.isDown ? colors.GRAY2 : colors.WHITE1};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 20px - 20px);
  height: 70px;
  margin: auto;
  border-bottom: ${(props: IStyleProps) =>
    props.isDown ? `solid 1px ${colors.GRAY3}` : 'none'};
`;

const Title = styled.div`
  margin: 0 0 0 16px;
  font: normal 400 16px / 27px roboto;
  color: ${colors.BLACK3};
`;

const ItemContainer = styled.div`
  display: ${(props: IStyleProps) => (props.isDown ? 'flex' : 'none')};
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 9px 14px;
  padding: 14px 0;
`;

const DropDown: React.FC<IProps> = ({ children, title }) => {
  const [isDown, setIsDown] = useState<boolean>(false);

  return (
    <Wrapper isDown={isDown}>
      <Header isDown={isDown}>
        <Image src={brandImage} alt="brand" width="30px" height="30px" />
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
