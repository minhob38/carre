/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
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
import axios from 'axios';
import { useEffect } from 'react';
import { redirect } from 'next/dist/server/api-utils';
import qs from 'qs';
console.log(qs);
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

const ButtonText = styled.a`
  all: unset;
  flex: 1;
  text-align: center;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_REAL_BLACK};
`;

// const handleButtonClick = async () => {
//   const response = await axios.get(
//     `https://kauth.kakao.com/oauth/authorize?client_id=a4dd7943c813bbe4937ca12a57ab18b4&redirect_uri=${REDIRECT_URI}&response_type=code`,
//   );
//   console.log(response.data);
// };

const REDIRECT_URI =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:3000/auth/login'
    : 'http://localhost:3000/auth/login';

const Login: NextPage = () => {
  // const router = useRouter();
  // const { code: authCode } = router.query;
  // console.log(process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY);
  // console.log(router.query);
  // useEffect(() => {
  //   if (authCode) {
  //     // console.log({
  //     //   grant_type: 'authorization_code',
  //     //   cliend_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
  //     //   code: authCode,
  //     //   redirect_uri: REDIRECT_URI,
  //     // });

  //     const data = {
  //       grant_type: 'authorization_code',
  //       cliend_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
  //       code: authCode,
  //       redirect_uri: REDIRECT_URI,
  //     };

  //     axios.post(
  //       'https://kauth.kakao.com/oauth/token',
  //       {
  //         grant_type: 'authorization_code',
  //         client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
  //         code: authCode,
  //         redirect_uri: REDIRECT_URI,
  //       },
  //       {
  //         headers: { 'content-type': 'application/x-www-form-urlencoded' },
  //         data: qs.stringify(data),
  //       },
  //     );
  //   }
  // }, [authCode]);

  return (
    <>
      <Content top="0px" bottom="0px">
        <Container>
          <Logo>CARRE</Logo>
          <Description>{`간편하게 로그인하고\n 다양한 서비스를 이용해보세요`}</Description>
          <Button>
            <Image src={kakaoImage} alt={'carModelName'} width="16px" />
            <ButtonText
              href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`}
            >
              카카오계정으로 로그인
            </ButtonText>
          </Button>
        </Container>
      </Content>
    </>
  );
};

export default Login;
