/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Arrow from '@components/common/Arrow';
import { useRouter } from 'next/router';
import * as colors from '@constants/colors';

interface IProps {
  title: string;
  backPath?: string;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  padding: 0 0 0 20px;
  box-shadow: 0px 1px 10px 1px rgba(96, 100, 112, 0.06);
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

// TODO: x, <, 없음 세개로 만들기
const Header: React.FC<IProps> = ({ title, backPath }) => {
  const router = useRouter();
  const handleArrowClick = () => {
    if (!backPath) return;
    router.push(backPath);
  };

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