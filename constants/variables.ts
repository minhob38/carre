export {};

import question1_1_Image from '@assets/images/questions/1-1.svg';
import question1_2_Image from '@assets/images/questions/1-2.svg';

import style1Image from '@assets/images/styles/style-1.svg';
import style2Image from '@assets/images/styles/style-2.svg';
import style3Image from '@assets/images/styles/style-3.svg';
import style4Image from '@assets/images/styles/style-4.svg';
import style5Image from '@assets/images/styles/style-5.svg';

import thumbnail1Image from '@assets/images/details/thumbnail1.svg';

import * as margins from './margins';

interface IInput {
  title: string;
  value: string;
}

interface IImageInput {
  name: string;
  value: string;
  src: any;
  alt: string;
}

/* 출생년도 select 설정*/
export const MIN_YEAR = 1941;
export const MAX_YEAR = 2004;
export const DEFAULT_YEAR = 1997;

/* 가격 설정 */
export const SIDE_MARGIN = parseInt(margins.SIDE_MAIN_MARGIN.slice(0, -2));
export const BALL_RADIUS = 11;
export const INDICATOR_WIDTH = 80;

export const INITIAL_MIN_POSITION = 55; // 55px
export const INITIAL_MAX_POSITION = INITIAL_MIN_POSITION;

export const INITIAL_MIN_BUDGET = 4000; // 4000만원
export const INITIAL_MAX_BUDGET = 8000; // 8000만원
export const DELTA_Y = INITIAL_MAX_BUDGET - INITIAL_MIN_BUDGET;

/* 추가 선택 조건 선택 설정*/
export const brands: IInput[] = [
  { title: '현대', value: 'hyundai' },
  { title: 'bmw', value: 'bmw' },
  { title: '벤츠', value: 'benz' },
  { title: '기아', value: 'kia' },
  { title: '르노 삼성', value: 'renault-samsung' },
  { title: '렉서스', value: 'lexus' },
  { title: '쉐보레', value: 'chevrolet' },
  { title: '도요타', value: 'toyota' },
  { title: '혼다', value: 'honda' },
  { title: '폭스바겐', value: 'volkswagen' },
  { title: '아우디', value: 'audi' },
  { title: '포르쉐', value: 'porche' },
];

export const fuels: IInput[] = [
  { title: '경유', value: 'diesel' },
  { title: '휘발유', value: 'gasoline' },
  { title: '하이브리드', value: 'hybrid' },
  { title: '전기', value: 'electricity' },
];

export const categories: IInput[] = [
  { title: '세단?', value: 'sedan' },
  { title: 'SUV?', value: 'suc' },
];

/* 차량 성향 테스트 설정 (차량스타일) */
export const styles = [
  { name: 'style', value: '1', src: style1Image, alt: 'style-1' },
  { name: 'style', value: '2', src: style2Image, alt: 'style-2' },
  { name: 'style', value: '3', src: style3Image, alt: 'style-3' },
  { name: 'style', value: '4', src: style4Image, alt: 'style-4' },
  { name: 'style', value: '5', src: style5Image, alt: 'style-5' },
];

/* 차량 성향 테스트 설정 (질문) */
export const TOTAL_PAGE = 5; // 질문 개수

export const questions: [IImageInput, IImageInput][] = [
  [
    {
      name: 'question-1',
      value: '1',
      src: question1_1_Image,
      alt: 'question1-1',
    },
    {
      name: 'question-1',
      value: '2',
      src: question1_2_Image,
      alt: 'question1-2',
    },
  ],
  [
    {
      name: 'question-2',
      value: '1',
      src: question1_2_Image,
      alt: 'question2-1',
    },
    {
      name: 'question-2',
      value: '2',
      src: question1_2_Image,
      alt: 'question2-2',
    },
  ],
  [
    {
      name: 'question-3',
      value: '1',
      src: question1_1_Image,
      alt: 'question3-1',
    },
    {
      name: 'question-3',
      value: '2',
      src: question1_1_Image,
      alt: 'question3-2',
    },
  ],
  [
    {
      name: 'question-4',
      value: '1',
      src: question1_2_Image,
      alt: 'question4-1',
    },
    {
      name: 'question-4',
      value: '2',
      src: question1_2_Image,
      alt: 'question4-2',
    },
  ],
  [
    {
      name: 'question-5',
      value: '1',
      src: question1_2_Image,
      alt: 'question5-1',
    },
    {
      name: 'question-5',
      value: '2',
      src: question1_2_Image,
      alt: 'question5-2',
    },
  ],
];

/* 나의 취향 결과 설정 */
export const TOTAL_SCORE = 5;
export const CRITERION_SCORE = 3;

/* 이 차량의 매력 설정 */
export const attractions: {
  value: string;
  title: string;
  description: string;
}[] = [
  {
    value: '유류비',
    title: ' 연비 15.3 km/L SUV차량 기준 8등',
    description:
      '해외 자동차 전문매체 왓카(What Car) 반복된 주행과 엄격하게 통제된 실험 조건속에 실제 연비 측정 결과 SUV차량 기준 8등!',
  },
  {
    value: '신차품질조사',
    title: ' 연비 15.3 km/L SUV차량 기준 8등',
    description:
      '해외 자동차 전문매체 왓카(What Car) 반복된 주행과 엄격하게 통제된 실험 조건속에 실제 연비 측정 결과 SUV차량 기준 8등!',
  },
  {
    value: '안전도 평가',
    title: ' 연비 15.3 km/L SUV차량 기준 8등',
    description:
      '해외 자동차 전문매체 왓카(What Car) 반복된 주행과 엄격하게 통제된 실험 조건속에 실제 연비 측정 결과 SUV차량 기준 8등!',
  },
  {
    value: '구매자 만족지수',
    title: ' 연비 15.3 km/L SUV차량 기준 8등',
    description:
      '해외 자동차 전문매체 왓카(What Car) 반복된 주행과 엄격하게 통제된 실험 조건속에 실제 연비 측정 결과 SUV차량 기준 8등!',
  },
];

/* 차량 상세보기 설정 */
export const pictures = [
  {
    src: thumbnail1Image,
    alt: 'thumbnail-1',
    width: '70px',
    height: '70px',
  },
  {
    src: thumbnail1Image,
    alt: 'thumbnail-1',
    width: '70px',
    height: '70px',
  },
  {
    src: thumbnail1Image,
    alt: 'thumbnail-1',
    width: '70px',
    height: '70px',
  },
  {
    src: thumbnail1Image,
    alt: 'thumbnail-1',
    width: '70px',
    height: '70px',
  },
  {
    src: thumbnail1Image,
    alt: 'thumbnail-1',
    width: '70px',
    height: '70px',
  },
];

export const carColors = [
  '#B9B6A9',
  '#434343',
  '#F1EFEE',
  '#7B2C17',
  '#484A3E',
  '#1C2F53',
];
