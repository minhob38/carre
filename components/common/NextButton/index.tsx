/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import { NEXT_BUTTON_HEIGHT } from '@constants/size';

interface IProps {
  title: string;
  path?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  isActive?: boolean;
}

type TStyleProps = Pick<IProps, 'isActive'>;

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
  background-color: ${(props: TStyleProps) =>
    props.isActive ? colors.SECONDARY_500 : colors.SECONDARY_250};
`;

const NextButton: React.FC<IProps> = ({
  path,
  title,
  onClick,
  isActive = true,
}) => {
  if (!isActive) {
    return <Wrapper isActive={isActive}>{title}</Wrapper>;
  }

  if (path) {
    return (
      <Link href={path} passHref={true}>
        <Wrapper isActive={isActive}>{title}</Wrapper>
      </Link>
    );
  } else {
    return (
      <Wrapper isActive={isActive} onClick={onClick}>
        {title}
      </Wrapper>
    );
  }
};

export default NextButton;
