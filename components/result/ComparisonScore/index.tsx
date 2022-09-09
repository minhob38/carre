/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import starImage from '@assets/images/icons/star.svg';

interface IProps {
  text: string;
  number: number;
  isWin: boolean;
}

type IStyleProps = Pick<IProps, 'isWin'>;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 40px;
  border-radius: 8px;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
  background-color: ${(props: IStyleProps) => {
    return props.isWin ? colors.PRIMARY_300 : colors.YELLOW4;
  }};
  gap: 0 5px;
`;

const ComparisonScore: React.FC<any> = ({ text, number, isWin }) => {
  if (text) {
    return <Wrapper isWin={isWin}>{text}</Wrapper>;
  }

  const stars: number[] = [];
  for (let i = 0; i < number; i++) {
    stars.push(0);
  }

  const Stars = stars.map((item) => {
    return (
      <Image
        key={uuid4()}
        src={starImage}
        alt="start"
        width="14px"
        height="14px"
      />
    );
  });

  return <Wrapper isWin={isWin}>{Stars}</Wrapper>;
};

export default ComparisonScore;
