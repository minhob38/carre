/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import styled from '@emotion/styled';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import rightArrowImage from '@assets/images/icons/small-black-right-arrow.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 78px;
  border-radius: 8px;
  background-color: ${colors.PRIMARY_400};
  padding: 0 20px; ;
`;

const ItemText = styled.div`
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_500};
`;

const TestStartButton: React.FC = () => {
  return (
    <Link href="/test/2" passHref={true}>
      <Wrapper>
        <ItemText>테스트하러가기</ItemText>
        <Image
          src={rightArrowImage}
          alt="right-arrow"
          width="20px"
          height="20px"
        />
      </Wrapper>
    </Link>
  );
};

export default TestStartButton;
