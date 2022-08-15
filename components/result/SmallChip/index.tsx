/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';

interface IProps {
  type: 'yes' | 'no' | 'default';
  title: string;
}

type IStyleProps = Pick<IProps, 'type'>;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 10px;
  border-radius: 4px;
  background-color: ${(props: IStyleProps) => {
    if (props.type === 'yes') {
      return colors.PRIMARY_400;
    } else if (props.type === 'no') {
      return colors.SECONDARY_200;
    } else {
      return 'transparent';
    }
  }};
  color: ${(props: IStyleProps) => {
    if (props.type === 'yes') {
      return colors.SECONDARY_400;
    } else if (props.type === 'no') {
      return colors.SECONDARY_REAL_WHITE;
    } else {
      return colors.SECONDARY_300;
    }
  }};
  font: ${fonts.BODY_REGULAR_2};
`;

// TODO: 소수점도 처리한다면, 해당 비율에 맞는 bar를 만들어 overwrap 시켜야 할듯
const SmallChip: React.FC<IProps> = ({ type, title }) => {
  return <Wrapper type={type}>{title}</Wrapper>;
};

export default SmallChip;
