/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import * as colors from '@constants/colors';

const Wrapper = styled.div`
  width: 100%;
  height: 97px;
  position: fixed;
  top: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0px 1px 10px 1px rgba(96, 100, 112, 0.06);
`;

const Title = styled.div`
  font: normal 400 24px / 27px roboto;
  margin: 18px 0 15px 31px;
  color: ${colors.YELLOW1};
`;

const MenuContainer = styled.div`
  display: flex;
  width: calc(100% - 35px - 35px);
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const Menu = styled.div`
  font: normal 400 18px / 27px roboto;
  color: ${colors.BLACK5};
  border-bottom: solid 2.5px ${colors.BLACK5}; ;
`;

const TopNavigator: React.FC = () => {
  return (
    <Wrapper>
      <Title>CARRE</Title>
      <MenuContainer>
        <Menu>홈</Menu>
        <Menu>히스토리</Menu>
        <Menu>찜</Menu>
        <Menu>MY</Menu>
      </MenuContainer>
    </Wrapper>
  );
};

export default TopNavigator;
