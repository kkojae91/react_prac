import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const showDetail = query.detail === "true";
  // console.log(location.pathname); // about
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
