/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import NextImage from 'next/image';

interface IProps extends IStyleProps {
  src: any;
  alt: string;
}

interface IStyleProps {
  width: string;
  height: string;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: ${(props: IStyleProps) => props.width};
  height: ${(props: IStyleProps) => props.height};
`;

const Image: React.FC<IProps> = ({ src, alt, width, height }) => {
  return (
    <Wrapper width={width} height={height}>
      <NextImage
        src={src}
        alt={alt}
        layout="fill"
        priority={true}
        loading="eager"
      />
    </Wrapper>
  );
};

export default Image;
