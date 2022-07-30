/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import * as colors from '@constants/colors';

interface IProps extends IStyleProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface IStyleProps {
  width: string;
  height: string;
}

const Wrapper = styled.button`
  all: unset;
  display: block;
  background-color: ${colors.WHITE1};
  width: ${(props: IStyleProps) => props.width};
  height: ${(props: IStyleProps) => props.height};
  border: 2px solid ${colors.YELLOW1};
  border-radius: 8px;
  font: normal 400 20px / 32px roboto;
  color: ${colors.BLACK1};
  text-align: center;
  /* &:hover {
    background-color: #ebc7c7;
    border: none;
  } */
  cursor: pointer;
`;

const Button: React.FC<IProps> = ({ title, width, height, onClick }) => {
  return (
    <Wrapper title={title} width={width} height={height} onClick={onClick}>
      시작하기
    </Wrapper>
  );
};

export default Button;
