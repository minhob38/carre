/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import Spinner from '@animations/Spinner';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';

interface IProps {
  text: string;
}

const TextAnime = keyframes`
  from {color: ${colors.SECONDARY_REAL_BLACK};}
  to {color: ${colors.SECONDARY_200};;}
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  margin: 30px 0 0 0;
  animation: ${TextAnime} 3s infinite linear alternate;
  font: ${fonts.BODY_REGULAR_1};
`;

const Loading: React.FC<IProps> = ({ text }) => {
  return (
    <Wrapper>
      <Spinner
        diameter={35}
        lineWidth={5}
        backgroundColor={'rgba(0, 0, 0, 0.3)'}
        lineColor={colors.SECONDARY_500}
        speed={3}
      />
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Loading;
