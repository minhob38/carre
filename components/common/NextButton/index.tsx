/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import * as colors from '@constants/colors';
import Link from 'next/link';

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
  height: 72px;
  font: 'normal 400 20px / 32px roboto'; // TODO: 'WefontGothic(OTF)'?
  color: rgba(255, 255, 255, 0.84);
  background-color: ${colors.BLACK1};
  box-shadow: 0px 4.43038px 17.7215px rgba(96, 100, 112, 0.07);
`;

const NextButton: React.FC<IProps> = ({ path, title }) => {
  return (
    <Link href={path} passHref={true}>
      <Wrapper>{title}</Wrapper>
    </Link>
  );
};

export default NextButton;
