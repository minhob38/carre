/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import { NEXT_BUTTON_HEIGHT } from '@constants/size';

interface IProps {
  title: string;
  path: string;
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${NEXT_BUTTON_HEIGHT};
  font: ${fonts.BUTTON_1};
  color: ${colors.SECONDARY_REAL_WHITE};
  background-color: ${colors.SECONDARY_500};
`;

const NextButton: React.FC<IProps> = ({ path, title }) => {
  return (
    <Link href={path} passHref={true}>
      <Wrapper>{title}</Wrapper>
    </Link>
  );
};

export default NextButton;
