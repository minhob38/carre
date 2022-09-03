/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface IProps extends IStyleProps {
  src: any;
  alt: string;
}

interface IStyleProps {
  width?: string;
  height?: string;
  // ratio: number;
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
  const [ratio, setRatio] = useState<number>(0);
  const [_height, _setHeight] = useState<number>(0);
  const [_width, _setWidth] = useState<number>(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    if (width) {
      _setWidth(wrapperRef.current.offsetWidth);
      _setHeight(wrapperRef.current.offsetWidth / ratio);
    }

    if (height) {
      _setHeight(wrapperRef.current.offsetHeight);
      _setWidth(wrapperRef.current.offsetHeight * ratio);
    }
  }, [ratio, height, width]);

  return (
    <Wrapper
      ref={wrapperRef}
      // width={width}
      height={`${height ? height : `${_height}px`}`}
      width={`${width ? width : `${_width}px`}`}
    >
      <NextImage
        src={src}
        alt={alt}
        layout="fill"
        priority={true}
        loading="eager"
        objectFit="contain"
        onLoadingComplete={({ naturalWidth, naturalHeight }) =>
          setRatio(naturalWidth / naturalHeight)
        }
      />
    </Wrapper>
  );
};

export default Image;
