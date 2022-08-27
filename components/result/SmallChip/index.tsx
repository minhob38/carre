/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { v4 as uuid4 } from 'uuid';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';

interface IProps {
  type: 'yes' | 'no' | 'default';
  title: string;
}

type IStyleProps = Pick<IProps, 'type'>;

const Loop = keyframes`
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

const Wrapper = styled.div`
  height: 32px;
  max-width: 100px;
  min-width: 0;
  padding: 0 10px;
  border-radius: 4px;
  background-color: ${(props: IStyleProps) => {
    if (props.type === 'yes') {
      return colors.PRIMARY_400;
    } else if (props.type === 'no') {
      return colors.SECONDARY_200;
    } else {
      return 'transparent';
    }
  }};
  color: ${(props: IStyleProps) => {
    if (props.type === 'yes') {
      return colors.SECONDARY_400;
    } else if (props.type === 'no') {
      return colors.SECONDARY_REAL_WHITE;
    } else {
      return colors.SECONDARY_300;
    }
  }};
  font: ${fonts.BODY_REGULAR_2};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  line-height: 32px;
`;

const Flow = styled.div`
  animation: ${Loop} 3s linear infinite;
`;

const SmallChip: React.FC<IProps> = ({ type, title }) => {
  return (
    <Wrapper type={type}>
      {/* <Flow>{title}</Flow> */}
      {title}
    </Wrapper>
  );
};

export default SmallChip;
