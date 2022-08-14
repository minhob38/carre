/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import css from '@emotion/react';

interface IProps {
  width?: string;
  height?: string;
  direction: 'x' | 'y';
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-flow: ${(props: IProps) =>
    props.direction === 'x' ? 'row nowrap' : 'column nowrap'};
  overflow-x: ${(props: IProps) =>
    props.direction === 'x' ? 'auto' : 'hidden'};
  overflow-y: ${(props: IProps) =>
    props.direction === 'y' ? 'auto' : 'hidden'};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0 auto;
`;

const Scroll: React.FC<IProps> = ({
  children,
  direction,
  width = 'auto',
  height = 'auto',
}) => {
  return (
    <Wrapper direction={direction} width={width} height={height}>
      {children}
    </Wrapper>
  );
};

export default Scroll;
