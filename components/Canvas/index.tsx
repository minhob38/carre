/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: calc(100% - 40px);
  margin: 0 20px 0 20px;
`;

const Canvas: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Canvas;
