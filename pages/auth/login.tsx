/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Content from '@components/common/Content';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, DEALER_BUTTON_HEIGHT } from '@constants/size';
import { IS_HIDDEN } from '@constants/variables';
import { useTypedSelector } from '@hooks/useStore';
import kakaoImage from '@assets/images/icons/kakao.svg';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Logo = styled.div`
  width: 100%;
  font: ${fonts.HEADLINE_H1};
  font-weight: 400;
  color: ${colors.PRIMARY_400};
  text-align: center;
`;

const Description = styled.div`
  width: 100%;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
  white-space: pre;
  text-align: center;
  margin: 23px 0 38px 0;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  height: 56px;
  margin: 0 auto;
  padding: 0 0 0 23px;
  border-radius: 8px;
  background-color: #fee500;
`;

const ButtonText = styled.div`
  flex: 1;
  text-align: center;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_REAL_BLACK};
`;

const Dealer: NextPage = () => {
  return (
    <>
      <Content top="0px" bottom="0px">
        <Container>
          <Logo>CARRE</Logo>
          <Description>{`간편하게 로그인하고\n 다양한 서비스를 이용해보세요`}</Description>
          <Button>
            <Image src={kakaoImage} alt={'carModelName'} width="16px" />
            <ButtonText>카카오계정으로 로그인</ButtonText>
          </Button>
        </Container>
      </Content>
    </>
  );
};

export default Dealer;
