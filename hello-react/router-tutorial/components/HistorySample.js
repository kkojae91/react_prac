import React, { useEffect } from "react";

const HistorySample = ({ history }) => {
  const handleGoBack = () => {
    history.goBack();
  };

  const handleGoHome = () => {
    history.push("/");
  };

  useEffect(() => {
    const unblock = history.block("정말 떠나실 건가요?");
    return () => {
      unblock && unblock();
    };
  });
  return (
    <div>
      <button onClick={handleGoBack} type="button">
        뒤로
      </button>
      <button onClick={handleGoHome} type="button">
        홈으로
      </button>
    </div>
  );
};

export default HistorySample;
