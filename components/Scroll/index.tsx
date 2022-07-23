/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

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
