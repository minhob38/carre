/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface IProps {
  length: string;
  width: string;
  color: string;
  direction: 'left' | 'right' | 'top' | 'bottom';
  calibration: string;
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.length};
  height: ${(props) => props.length};
  border-top: ${(props: IProps) => `${props.width} solid ${props.color}`};
  border-right: ${(props: IProps) => `${props.width} solid ${props.color}`};
  transform: ${(props: IProps) => {
    if (props.direction === 'left') {
      return 'rotate(225deg)';
    } else if (props.direction === 'right') {
      return 'rotate(45deg)';
    } else if (props.direction === 'top') {
      return 'rotate(315deg)';
    } else if (props.direction === 'bottom') {
      return 'rotate(135deg)';
    }
  }};
  position: relative;
  left: ${(props) => props.calibration};
`;

const Arrow: React.FC<IProps> = ({
  length,
  width,
  color,
  direction,
  calibration,
}) => {
  return (
    <Wrapper
      length={length}
      width={width}
      color={color}
      direction={direction}
      calibration={calibration}
    />
  );
};

export default Arrow;
