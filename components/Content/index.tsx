/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface IProps {
  top: string;
  right?: string;
  bottom: string;
  left?: string;
}

const Wrapper = styled.div`
  position: fixed;
  top: ${(props: IProps) => props.top};
  right: ${(props: IProps) => props.right};
  bottom: ${(props: IProps) => props.bottom};
  left: ${(props: IProps) => props.left};
  overflow: hidden;
`;

const Content: React.FC<IProps> = ({
  children,
  top,
  right = '0',
  bottom,
  left = '0',
}) => {
  return (
    <Wrapper top={top} right={right} bottom={bottom} left={left}>
      {children}
    </Wrapper>
  );
};

export default Content;
