/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface IProps {
  width?: string;
  height?: string;
  direction: 'x' | 'y';
}

const Wrapper = styled.div`
  overflow-x: ${(props: IProps) =>
    props.direction === 'x' ? 'auto' : 'hidden'};
  overflow-y: ${(props: IProps) =>
    props.direction === 'y' ? 'auto' : 'hidden'};
  background-color: red;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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
