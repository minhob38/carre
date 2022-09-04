export {};

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

export const IS_HIDDEN = true;

/* 성별 input 설정 */
export const genderLabels: { title: string; value: string }[] = [
  { title: '여자', value: 'FEMALE' },
  { title: '남자', value: 'MALE' },
];

/* 용도 input 설정 */
export const purposeLabels: { title: string; value: string }[] = [
  { title: '출퇴근용', value: 'COMMUTING' },
  { title: '등/하교', value: 'SCHOOL' },
  { title: '캠핑/레저', value: 'CAMPING' },
  { title: '영업', value: 'SALES' },
];

/* 출생년도 select 설정*/
export const MIN_YEAR = 1941;
export const MAX_YEAR = 2004;
export const DEFAULT_YEAR = 1997;

/* 탑승인원 select 설정 */
export const MIN_PERSON = 1;
export const MAX_PERSON = 9;
export const DEFAULT_PERSON = 1;

/* 연주행거리 select 설정 */
export const MIN_DISTANCE_UNIT = 1;
export const MAX_DISTANCE_UNIT = 10;
export const DEFAULT_DISTANCE = 2;
export const UNIT_DISTANCE = 5000;

/* 가격 설정 */
export const SIDE_MARGIN = parseInt(margins.SIDE_MAIN_MARGIN.slice(0, -2));
export const BALL_RADIUS = 11;
export const INDICATOR_WIDTH = 80;

export const INITIAL_MIN_POSITION = 55; // 55px
export const INITIAL_MAX_POSITION = INITIAL_MIN_POSITION;

export const INITIAL_MIN_BUDGET = 2000; // 4000만원
export const INITIAL_MAX_BUDGET = 13000; // 18000만원
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
  { title: '가솔린', value: 'gasoline' },
  { title: 'LPG', value: 'lpg' },
  { title: '하이브리드', value: 'hybrid' },
  { title: '디젤', value: 'diesel' },
  { title: '연료전지', value: 'fuelcell' },
  { title: '전기차', value: 'electricity' },
];

export const categories: IInput[] = [
  { title: '세단', value: 'sedan' },
  { title: 'SUV', value: 'suv' },
  { title: 'MPV', value: 'mpv' },
];

/* 차량 성향 테스트 설정 (차량스타일) */
export const styles = [
  { name: 'styles', value: '1', src: style1Image, alt: 'style-1' },
  { name: 'styles', value: '2', src: style2Image, alt: 'style-2' },
  { name: 'styles', value: '3', src: style3Image, alt: 'style-3' },
  { name: 'styles', value: '4', src: style4Image, alt: 'style-4' },
  { name: 'styles', value: '5', src: style5Image, alt: 'style-5' },
];

/* 차량 성향 테스트 설정 (질문) */
export const questions = [
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_7x3ki8u78v8ngQZ5',
    surveyQuestionTitle:
      '추억을 사진으로 남기고 싶어 사진기를 구매하려고 한다.',
    ordering: 1,
    firstQuestionImageFileName: '1_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/1_1.png',
    firstQuestionFactorElement: 'DESIGN',
    secondQuestionImageFileName: '1_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/1_2.png',
    secondQuestionFactorElement: 'NEW_TECHNOLOGY',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_LRq62vu0tlBzSLzK',
    surveyQuestionTitle: '직장을 옮기면서, 서울에 집을 구하려고 한다.',
    ordering: 2,
    firstQuestionImageFileName: '2_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/2_1.png',
    firstQuestionFactorElement: 'ECONOMICS',
    secondQuestionImageFileName: '2_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/2_2.png',
    secondQuestionFactorElement: 'SAFETY',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_hwIKX0MedjpqpJwe',
    surveyQuestionTitle: '회사에서 야근 후 집으로 가는 길은 두 가지이다.',
    ordering: 3,
    firstQuestionImageFileName: '3_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/3_1.png',
    firstQuestionFactorElement: 'SAFETY',
    secondQuestionImageFileName: '3_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/3_2.png',
    secondQuestionFactorElement: 'RELIABILITY',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_T7XCLRiYiOFDSWnn',
    surveyQuestionTitle:
      '애완동물을 입양해서 방 안에 털이 가득하다. 청소기를 사야하는데...',
    ordering: 4,
    firstQuestionImageFileName: '4_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/4_1.png',
    firstQuestionFactorElement: 'ECONOMICS',
    secondQuestionImageFileName: '4_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/4_2.png',
    secondQuestionFactorElement: 'RELIABILITY',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_1zHio2tmkrUd0Blb',
    surveyQuestionTitle:
      '자취를 시작하면서 나만의 감성 원룸을 꾸미기위해 커피테이블을 구매하려고 한다.',
    ordering: 5,
    firstQuestionImageFileName: '5_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/5_1.png',
    firstQuestionFactorElement: 'SAFETY',
    secondQuestionImageFileName: '5_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/5_2.png',
    secondQuestionFactorElement: 'DESIGN',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_9KEOf1qThbxlN9Ri',
    surveyQuestionTitle: '요새 미세먼지와 마스크로 인해 피부관리가 시급하다.',
    ordering: 6,
    firstQuestionImageFileName: '6_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/6_1.png',
    firstQuestionFactorElement: 'NEW_TECHNOLOGY',
    secondQuestionImageFileName: '6_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/6_2.png',
    secondQuestionFactorElement: 'RELIABILITY',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_XcQ8sRFDx9LumLuh',
    surveyQuestionTitle:
      '드디어 내 집 마련에 성공! 새 집에 들여놓을 가전제품을 맞추려고 한다.',
    ordering: 7,
    firstQuestionImageFileName: '7_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/7_1.png',
    firstQuestionFactorElement: 'ECONOMICS',
    secondQuestionImageFileName: '7_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/7_2.png',
    secondQuestionFactorElement: 'DESIGN',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_0VBXxAYjry9DEvDr',
    surveyQuestionTitle: '연말 모임 참석을 위해 새 구두를, 구입하려고 한다.',
    ordering: 8,
    firstQuestionImageFileName: '8_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/8_1.png',
    firstQuestionFactorElement: 'SAFETY',
    secondQuestionImageFileName: '8_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/8_2.png',
    secondQuestionFactorElement: 'CAR_SENTIMENT',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_09QkUatU9ba7h6iB',
    surveyQuestionTitle: '손목시계를 구매하려고 한다.',
    ordering: 9,
    firstQuestionImageFileName: '9_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/9_1.png',
    firstQuestionFactorElement: 'CAR_SENTIMENT',
    secondQuestionImageFileName: '9_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/9_2.png',
    secondQuestionFactorElement: 'NEW_TECHNOLOGY',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_fpf6e1Pk7jd0XsBS',
    surveyQuestionTitle: '집에 습기가 많아 제습기를 구매할 예정이다.',
    ordering: 10,
    firstQuestionImageFileName: '10_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/10_1.png',
    firstQuestionFactorElement: 'NEW_TECHNOLOGY',
    secondQuestionImageFileName: '10_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/10_2.png',
    secondQuestionFactorElement: 'PERFORMANCE',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_WhBYNOfcHKVMcem0',
    surveyQuestionTitle:
      '요즘 재택근무 자주해서 와이파이 공유기를 새로 설치해야 한다.',
    ordering: 11,
    firstQuestionImageFileName: '11_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/11_1.png',
    firstQuestionFactorElement: 'ECONOMICS',
    secondQuestionImageFileName: '11_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/11_2.png',
    secondQuestionFactorElement: 'PERFORMANCE',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_g6nRBptRswWNf4Xz',
    surveyQuestionTitle:
      '연말 보너스를 받아서, 나를 위한 선물로 가방을 장만하려고 한다.',
    ordering: 12,
    firstQuestionImageFileName: '12_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/12_1.png',
    firstQuestionFactorElement: 'CAR_SENTIMENT',
    secondQuestionImageFileName: '12_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/12_2.png',
    secondQuestionFactorElement: 'DESIGN',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_SZulxNhvaXk7RHvU',
    surveyQuestionTitle: '휴대폰이 고장 나서 새 휴대폰을 장만하려고 한다.',
    ordering: 13,
    firstQuestionImageFileName: '13_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/13_1.png',
    firstQuestionFactorElement: 'ECONOMICS',
    secondQuestionImageFileName: '13_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/13_2.png',
    secondQuestionFactorElement: 'NEW_TECHNOLOGY',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_BGfCnv8dTQeuUqaj',
    surveyQuestionTitle: '부모님 생신 선물로 패딩을 사드리려고 한다.',
    ordering: 14,
    firstQuestionImageFileName: '14_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/14_1.png',
    firstQuestionFactorElement: 'CAR_SENTIMENT',
    secondQuestionImageFileName: '14_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/14_2.png',
    secondQuestionFactorElement: 'RELIABILITY',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_jEqWkYl8zMxNdRe7',
    surveyQuestionTitle:
      '혼수 준비로 예산이 빠듯한데 아직 예식장을 고르지 못했다.',
    ordering: 15,
    firstQuestionImageFileName: '15_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/15_1.png',
    firstQuestionFactorElement: 'ECONOMICS',
    secondQuestionImageFileName: '15_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/15_2.png',
    secondQuestionFactorElement: 'CAR_SENTIMENT',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_0nhQXGvmq0KwTgrB',
    surveyQuestionTitle:
      '코로나 때문에 배달음식만 먹었더니 지겨워서 집에서 요리하려고 에어프라이기를 구매한다면...',
    ordering: 16,
    firstQuestionImageFileName: '16_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/16_1.png',
    firstQuestionFactorElement: 'DESIGN',
    secondQuestionImageFileName: '16_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/16_2.png',
    secondQuestionFactorElement: 'PERFORMANCE',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_gSvqNhEmMptsHrhb',
    surveyQuestionTitle:
      '출근시간을 줄여야하는데 매일 아침 머리를 드라이 하기가 쉽지 않다.',
    ordering: 17,
    firstQuestionImageFileName: '17_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/17_1.png',
    firstQuestionFactorElement: 'SAFETY',
    secondQuestionImageFileName: '17_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/17_2.png',
    secondQuestionFactorElement: 'NEW_TECHNOLOGY',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_tAi66fcEmydjOMlV',
    surveyQuestionTitle:
      '스마트 시대를 맞아 우리집도 스마트 홈으로 꾸며보려고 한다.',
    ordering: 18,
    firstQuestionImageFileName: '18_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/18_1.png',
    firstQuestionFactorElement: 'DESIGN',
    secondQuestionImageFileName: '18_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/18_2.png',
    secondQuestionFactorElement: 'RELIABILITY',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_6J90nFjQnUM5mUqt',
    surveyQuestionTitle:
      '가지고 있는 주식이 올라 생긴 이익으로 오래된 노트북을 새 걸로 바꾸려 한다.',
    ordering: 19,
    firstQuestionImageFileName: '19_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/19_1.png',
    firstQuestionFactorElement: 'CAR_SENTIMENT',
    secondQuestionImageFileName: '19_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/19_2.png',
    secondQuestionFactorElement: 'PERFORMANCE',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_BZ352wqqAkxPDkRT',
    surveyQuestionTitle: '홈카페를 하고 싶어 스피커를 구매하려고 한다.',
    ordering: 20,
    firstQuestionImageFileName: '20_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/20_1.png',
    firstQuestionFactorElement: 'RELIABILITY',
    secondQuestionImageFileName: '20_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/20_2.png',
    secondQuestionFactorElement: 'PERFORMANCE',
  },
  {
    surveyToken: 'svy_yA6e2ate403kY2Wb',
    surveyName: '22년 7월 설문조사',
    surveyQuestionToken: 'svq_XGzwayr5m8KGu1yt',
    surveyQuestionTitle:
      '이사한 집에서 요리를 자주 할 것 같다. 가스레인지/인덕션을 설치해야 하는데...',
    ordering: 21,
    firstQuestionImageFileName: '21_1.png',
    firstQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/21_1.png',
    firstQuestionFactorElement: 'SAFETY',
    secondQuestionImageFileName: '21_2.png',
    secondQuestionImagePath:
      'https://m.carre.co.kr/images/survey/202205/21_2.png',
    secondQuestionFactorElement: 'PERFORMANCE',
  },
];

/* 나의 취향 결과 설정 */
export const TOTAL_SCORE = 5;
export const CRITERION_SCORE = 3;
export const TENDENCY_TABLE = {
  factorBaseAge: 'N/A',
  factorBaseCarSentiment: '승차감',
  factorBaseDesign: '디자인',
  factorBaseEconomics: '경제성',
  factorBaseNewTechnology: '신기술',
  factorBasePerformance: '성능',
  factorBaseReliability: '신뢰도',
  factorBaseSafety: '안전성',
};

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
