/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

interface IProps {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
}

const Wrapper = styled.div`
  width: ${(props: IProps) => props.width};
  height: ${(props: IProps) => props.height};
  margin: ${(props: IProps) => props.margin};
  padding: ${(props: IProps) => props.padding};
`;

const Frame: React.FC<IProps> = ({
  children,
  width,
  height,
  margin,
  padding,
}) => {
  return (
    <Wrapper width={width} height={height} margin={margin} padding={padding}>
      {children}
    </Wrapper>
  );
};

export default Frame;
