/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Arrow from '@components/Arrow';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;
  padding: 0 0 0 20px;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Arrow
        length="13.5px"
        width="2px"
        color="rgba(204, 210, 227, 1)"
        direction="left"
        calibration="2.5px"
      />
    </Wrapper>
  );
};

export default Header;
