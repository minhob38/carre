export {};

import question1_1_Image from '@assets/images/questions/1-1.svg';
import question1_2_Image from '@assets/images/questions/1-2.svg';

import style1Image from '@assets/images/styles/style-1.svg';
import style2Image from '@assets/images/styles/style-2.svg';
import style3Image from '@assets/images/styles/style-3.svg';
import style4Image from '@assets/images/styles/style-4.svg';
import style5Image from '@assets/images/styles/style-5.svg';

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

export const styles = [
  { name: 'style', value: '1', src: style1Image, alt: 'style-1' },
  { name: 'style', value: '2', src: style2Image, alt: 'style-2' },
  { name: 'style', value: '3', src: style3Image, alt: 'style-3' },
  { name: 'style', value: '4', src: style4Image, alt: 'style-4' },
  { name: 'style', value: '5', src: style5Image, alt: 'style-5' },
];
