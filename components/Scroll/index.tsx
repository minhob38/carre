/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';
import bookmarkImage from '@assets/images/bookmark.svg';
import historyImage from '@assets/images/history.svg';
import myImage from '@assets/images/my.svg';
import testImage from '@assets/images/test.svg';

interface IProps {
  direction: 'x' | 'y';
}

const Wrapper = styled.div`
  overflow-x: ${(props: IProps) =>
    props.direction === 'x' ? 'auto' : 'hidden'};
  overflow-y: ${(props: IProps) =>
    props.direction === 'y' ? 'auto' : 'hidden'};
`;

const Scroll: React.FC<IProps> = ({ children, direction }) => {
  return <Wrapper direction={direction}>{children}</Wrapper>;
};

export default Scroll;
