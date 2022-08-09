/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  padding: 0 10px;
  font: ${fonts.LABEL_3};
  color: ${colors.SECONDARY_400};
  border: 0.5px solid ${colors.SECONDARY_300};
  border-radius: 10px;
`;

const Tag: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Tag;
