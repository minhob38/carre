export {};

interface IInput {
  title: string;
  value: string;
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
