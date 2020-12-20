import { useContext } from 'react';
import ColorContext from '../contexts/Color';

const ColorBox = () => {
  // useContext 훅을 사용하면 state를 조금 더 편리 하게 사용할 수 있다.
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
