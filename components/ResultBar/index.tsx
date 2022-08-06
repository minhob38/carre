/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import * as colors from '@constants/colors';

interface IProps {
  totalScore: number;
  score: number;
  criterionScore: number;
}

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
      return `${49 - LineWidth}px`;
    } else {
      return '49px';
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

const ResultBar: React.FC<IProps> = ({ score, totalScore, criterionScore }) => {
  const _: number[] = [];

  for (let i = 0; i < totalScore; i++) {
    _.push(i + 1);
  }

  const blockScoreColor = score > criterionScore ? colors.RED1 : colors.YELLOW1;
  const noScoreColor = colors.GRAY2;
  const lineScoreColor = colors.YELLOW4;
  const lineNoScoreColor = colors.WHITE1;

  const Blocks = _.map((item, index) => {
    if (index === 0 && item <= score) {
      return (
        <Block
          key={uuid4()}
          position="start"
          backgroundColor={item <= score ? blockScoreColor : noScoreColor}
        >
          <Line
            backgroundColor={item <= score ? lineScoreColor : lineNoScoreColor}
            opacity={item === score ? 1 : 0.6}
          />
        </Block>
      );
    }
    if (index === totalScore - 1) {
      return (
        <Block
          key={uuid4()}
          position="end"
          backgroundColor={item <= score ? blockScoreColor : noScoreColor}
        />
      );
    }
    return (
      <Block
        key={uuid4()}
        position="middle"
        backgroundColor={item <= score ? blockScoreColor : noScoreColor}
      >
        <Line
          backgroundColor={item <= score ? lineScoreColor : lineNoScoreColor}
          opacity={item === score ? 1 : 0.6}
        />
      </Block>
    );
  });

  return <Wrapper>{Blocks}</Wrapper>;
};

export default ResultBar;
