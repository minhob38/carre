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
  padding: 0 16px;
  border-radius: 4px;
  border: ${(props: IStyleProps) => {
    if (props.type === 'yes') {
      return 'none';
    } else if (props.type === 'no') {
      return `1px solid ${colors.PRIMARY_400}`;
    } else {
      return 'none';
    }
  }};
  background-color: ${(props: IStyleProps) => {
    if (props.type === 'yes') {
      return colors.PRIMARY_400;
    } else if (props.type === 'no') {
      return 'transparent';
    } else {
      return 'transparent';
    }
  }};
  color: ${(props: IStyleProps) => {
    if (props.type === 'yes') {
      return colors.SECONDARY_REAL_WHITE;
    } else if (props.type === 'no') {
      return colors.SECONDARY_300;
    } else {
      return colors.SECONDARY_300;
    }
  }};
  font: ${fonts.BODY_REGULAR_2};
`;

const BigChip: React.FC<IProps> = ({ type, title }) => {
  return <Wrapper type={type}>{title}</Wrapper>;
};

export default BigChip;
