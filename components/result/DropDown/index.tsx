/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Arrow from '@components/common/Arrow';
import * as colors from '@constants/colors';

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
  background-color: ${colors.WHITE1};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 58px;
  padding: 0 20px;
`;

const Title = styled.div`
  font: normal 400 16px / 26px roboto;
  color: ${colors.BLACK3};
`;

const ItemContainer = styled.div`
  display: ${(props: IStyleProps) => (props.isDown ? 'flex' : 'none')};
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const DropDown: React.FC<IProps> = ({ children, title }) => {
  const [isDown, setIsDown] = useState<boolean>(false);

  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <Arrow
          length="8px"
          width="2px"
          color={colors.BLACK2}
          direction={isDown ? 'bottom' : 'top'}
          calibrationY="2.5px"
          onClick={() => setIsDown(!isDown)}
        />
      </Header>
      <ItemContainer isDown={isDown}>{children}</ItemContainer>
    </Wrapper>
  );
};

export default DropDown;
