/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import * as colors from '@constants/colors';
import { v4 as uuid4 } from 'uuid';

interface IStyleProps {
  position?: 'start' | 'middle' | 'end';
  backgroundColor?: string;
  opacity?: number;
}

const LineWidth = 4;

const Wrapper = styled.div`
  display: flex;
`;

const Block = styled.div`
  position: relative;
  width: ${(props: IStyleProps) => {
    if (props.position === 'end') {
      return `${45 - LineWidth}px`; // 45px - LineWidth
    } else {
      return '45px';
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
  width: ${LineWidth}px;
  height: 10px;
  background-color: ${(props: IStyleProps) => props.backgroundColor};
  opacity: ${(props: IStyleProps) => props.opacity};
`;

const ResultBar: React.FC = () => {
  const SCORE = 3;
  const TOTAL_SCORE = 5;
  const _: number[] = [];

  for (let i = 0; i < TOTAL_SCORE; i++) {
    _.push(i + 1);
  }

  const CRITERION_SCORE = 3;
  const blockScoreColor =
    SCORE > CRITERION_SCORE ? colors.RED1 : colors.YELLOW1;
  const noScoreColor = colors.GRAY2;
  const lineScoreColor = colors.YELLOW4;
  const lineNoScoreColor = colors.WHITE1;

  const Blocks = _.map((item, index) => {
    if (index === 0 && item <= SCORE) {
      return (
        <Block
          key={uuid4()}
          position="start"
          backgroundColor={item <= SCORE ? blockScoreColor : noScoreColor}
        >
          <Line
            backgroundColor={item <= SCORE ? lineScoreColor : lineNoScoreColor}
            opacity={item <= SCORE ? 0.6 : 1}
          />
        </Block>
      );
    }
    if (index === TOTAL_SCORE - 1) {
      return (
        <Block
          key={uuid4()}
          position="end"
          backgroundColor={item <= SCORE ? blockScoreColor : noScoreColor}
        />
      );
    }
    return (
      <Block
        key={uuid4()}
        position="middle"
        backgroundColor={item <= SCORE ? blockScoreColor : noScoreColor}
      >
        <Line
          backgroundColor={item <= SCORE ? lineScoreColor : lineNoScoreColor}
          opacity={item <= SCORE ? 0.6 : 1}
        />
      </Block>
    );
  });

  return <Wrapper>{Blocks}</Wrapper>;
};

export default ResultBar;
