/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { styles } from '@constants/variables';
import ImageLabel from '@components/common/ImageLabel';
import { v4 as uuid4 } from 'uuid';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 10px 0;
`;

const StyleCheckBoxes: React.FC = () => {
  const Styles = styles.map((style) => {
    return (
      <ImageLabel
        key={uuid4()}
        input={{
          type: 'checkbox',
          name: style.name,
          value: style.value,
        }}
        style={{
          width: '330px',
          height: '106px',
        }}
        image={{
          src: style.src,
          alt: style.alt,
        }}
      />
    );
  });

  return <Wrapper>{Styles}</Wrapper>;
};

export default StyleCheckBoxes;
