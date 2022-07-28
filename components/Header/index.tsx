/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Arrow from '@components/Arrow';
import { useRouter } from 'next/router';
import * as colors from '@constants/colors';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  padding: 0 0 0 20px;
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 77px - 77px);
  font: normal 400 18px / 28px roboto;
  color: ${colors.BLACK1};
  text-align: center;
`;

const Header: React.FC<{ title: string }> = ({ title }) => {
  const router = useRouter();
  const handleArrowClick = () => router.back();

  return (
    <Wrapper>
      <Arrow
        length="13.5px"
        width="2px"
        color={colors.GRAY1}
        direction="left"
        calibrationX="2.5px"
        onClick={handleArrowClick}
      />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Header;
