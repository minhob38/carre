/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface Props extends StyleProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface StyleProps {
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
  border-top: ${(props: StyleProps) => `${props.width} solid ${props.color}`};
  border-right: ${(props: StyleProps) => `${props.width} solid ${props.color}`};
  transform: ${(props: StyleProps) => {
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

const Arrow: React.FC<Props> = ({
  onClick,
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
      onClick={onClick}
    />
  );
};

export default Arrow;
