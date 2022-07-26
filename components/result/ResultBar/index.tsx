/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import * as colors from '@constants/colors';
import { useTypedDispatch } from '@hooks/useStore';
import { actions } from '@store/slices/inputSlice';

interface IProps {
  type: 'static' | 'dynamic';
  value: string;
  totalScore: number;
  score: number;
  criterionScore: number;
}

interface IStyleProps {
  position?: 'start' | 'middle' | 'end';
  backgroundColor?: string;
  opacity?: number;
  blockWidth: number;
}

const LineWidth = 4;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Block = styled.div`
  position: relative;
  width: ${(props: IStyleProps) => {
    if (props.position === 'end') {
      return `${props.blockWidth - LineWidth}px`;
    } else {
      return `${props.blockWidth}px`;
    }
  }};
  height: 10px;
  background-color: ${(props: IStyleProps) => props.backgroundColor};
  border-radius: ${(props: IStyleProps) => {
    if (props.position === 'start') {
      return '8px 0 0 8px';
    } else if (props.position === 'end') {
      return '0 8px 8px 0';
    } else {
      return '0';
    }
  }};
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: ${LineWidth}px;
  height: 10px;
  background-color: ${(props: Omit<IStyleProps, 'blockWidth'>) =>
    props.backgroundColor};
  opacity: ${(props: Omit<IStyleProps, 'blockWidth'>) => props.opacity};
`;

const LeftClick = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0;
  left: 0;
  z-index: 1110;
`;

const RightClick = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0;
  right: 0;
  z-index: 100;
`;

const Ball = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${colors.SECONDARY_100};
  background-color: ${colors.SECONDARY_REAL_WHITE};
  box-shadow: 0px 4.43038px 9.72px rgba(96, 100, 112, 0.06);
`;

// TODO: 소수점도 처리한다면, 해당 비율에 맞는 bar를 만들어 overwrap 시켜야 할듯
const ResultBar: React.FC<IProps> = ({
  type,
  value,
  score,
  totalScore,
  criterionScore,
}) => {
  const _: number[] = [];
  const wrapperRef = useRef<HTMLDivElement>(null);
  // const [width, setWidth] = useState<number>(0);
  const [blockWidth, setBlockWidth] = useState<number>(0);

  useEffect(() => {
    if (!wrapperRef.current) return;
    setBlockWidth(wrapperRef.current.offsetWidth / totalScore);
  }, [totalScore]);

  for (let i = 0; i < totalScore; i++) {
    _.push(i + 1);
  }

  const dispatch = useTypedDispatch();

  const blockScoreColor =
    score > criterionScore ? colors.PRIMARY_500 : colors.PRIMARY_400;
  const noBlockScoreColor = colors.SECONDARY_100;
  const lineScoreColor = colors.PRIMARY_100;
  const noLineScoreColor = colors.SECONDARY_REAL_WHITE;

  const Blocks = _.map((item, index) => {
    const handleLeftClick = () => {
      if (type === 'static') return;
      dispatch(actions.changeValue({ value, score: item }));
    };

    const handleRightClick = () => {
      if (type === 'static') return;
      dispatch(actions.changeValue({ value, score: item }));
      // if (item < totalScore) {
      //   dispatch(actions.changeValue({ value, score: item + 1 }));
      // }
    };

    /* 첫번째 block*/
    if (index === 0) {
      return (
        <Block
          key={uuid4()}
          position="start"
          backgroundColor={item <= score ? blockScoreColor : noBlockScoreColor}
          blockWidth={blockWidth}
        >
          <Line
            backgroundColor={item <= score ? lineScoreColor : noLineScoreColor}
            opacity={item === score ? 1 : 0.6}
          />
          <LeftClick onClick={handleLeftClick} />
          <RightClick onClick={handleRightClick} />
          {type === 'dynamic' && item === score && <Ball />}
        </Block>
      );
    }

    /* 마지막 block*/
    if (index === totalScore - 1) {
      return (
        <Block
          key={uuid4()}
          position="end"
          backgroundColor={item <= score ? blockScoreColor : noBlockScoreColor}
          blockWidth={blockWidth}
        >
          <LeftClick onClick={handleLeftClick} />
          <RightClick onClick={handleRightClick} />
          {type === 'dynamic' && item === score && <Ball />}
        </Block>
      );
    }

    /* 중간 block*/
    return (
      <Block
        key={uuid4()}
        position="middle"
        backgroundColor={item <= score ? blockScoreColor : noBlockScoreColor}
        blockWidth={blockWidth}
      >
        <Line
          backgroundColor={item <= score ? lineScoreColor : noLineScoreColor}
          opacity={item === score ? 1 : 0.6}
        />
        <LeftClick onClick={handleLeftClick} />
        <RightClick onClick={handleRightClick} />
        {type === 'dynamic' && item === score && <Ball />}
      </Block>
    );
  });

  return <Wrapper ref={wrapperRef}>{Blocks}</Wrapper>;
};

export default ResultBar;
