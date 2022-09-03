/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from '@components/common/Image';
import logoImage from '@assets/images/logos/logo.png';
import * as fonts from '@constants/fonts';
import * as colors from '@constants/colors';

interface IStyleProps {
  isCurrent: boolean;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 105px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0px 1px 10px 1px rgba(96, 100, 112, 0.06);
`;

const MenuContainer = styled.div`
  display: flex;
  width: calc(100% - 40px - 40px);
  height: 46px;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;
`;

const Menu = styled.div`
  font: ${fonts.TITLE_T2};
  color: ${(props: IStyleProps) => {
    return props.isCurrent
      ? `${colors.SECONDARY_REAL_BLACK}`
      : `${colors.SECONDARY_250}`;
  }};
  border-bottom: ${(props: IStyleProps) => {
    return props.isCurrent
      ? `solid 2.5px ${colors.SECONDARY_REAL_BLACK}`
      : 'none';
  }};
`;

const TopNavigator: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Wrapper>
      <Image src={logoImage} alt="logo" height="61px" />
      {/* <Title>CARRE</Title> */}
      <MenuContainer>
        <Link href={'/'} passHref={true}>
          <Menu isCurrent={pathname === '/'}>홈</Menu>
        </Link>
        {/* <Link href={'/history'} passHref={true}> */}
        <Menu isCurrent={pathname === '/history'}>히스토리</Menu>
        {/* </Link> */}
        {/* <Link href={'/bookmark'} passHref={true}> */}
        <Menu isCurrent={pathname === '/bookmark'}>찜</Menu>
        {/* </Link> */}
        {/* <Link href={'/my'} passHref={true}> */}
        <Menu isCurrent={pathname === '/my'}>MY</Menu>
        {/* </Link> */}
      </MenuContainer>
    </Wrapper>
  );
};

export default TopNavigator;
