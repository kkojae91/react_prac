import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const Box = styled.div`
  /* props로 넣어준 값을 직접 전달해 줄 수 있습니다. props에 컬러 값이 없다면 default값을 blue로 설정한다. */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width:768px`}
  ${media.tablet`width:100%`};
  /* @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  } */
`;

const Button = styled.button`
  background: white;
  color: black;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & 를 사용해서 자기 자신을 선택 가능! */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* props가 inverted인 경우에는 아래의 css를 먹인다는 의미! ''안에 작성된 코드 이기 때문에 $로 시작 */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponents = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};

export default StyledComponents;
