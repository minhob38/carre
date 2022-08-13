/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import Link from 'next/link';

interface IProps extends IStyleProps {
  path: string;
  title: string;
}

interface IStyleProps {
  width: string;
  height: string;
}

const Wrapper = styled.button`
  all: unset;
  display: block;
  width: ${(props: IStyleProps) => props.width};
  height: ${(props: IStyleProps) => props.height};
  border: 2px solid ${colors.YELLOW1};
  border-radius: 8px;
  background-color: ${colors.PRIMARY_400};
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_500};
  text-align: center;
  /* &:hover {
    background-color: #ebc7c7;
    border: none;
  } */
  cursor: pointer;
`;

const NextButton: React.FC<IProps> = ({ path, title, width, height }) => {
  return (
    <Link href={path} passHref={true}>
      <Wrapper title={title} width={width} height={height}>
        {title}
      </Wrapper>
    </Link>
  );
};

export default NextButton;
