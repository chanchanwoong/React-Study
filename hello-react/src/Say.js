import React, { useState } from "react";

/*
    useState 학습을 위한 Say 컴포넌트
    - 컴포넌트의 데이터는 useState를 통해서 관리할 수 있다.
     
    초기값 설정 방식
    - 초깃값은 상위 컴포넌트에서 props로 받아서 지정
    - 하위 컴포넌트에서 useState(초깃값) 지정
*/

const Say = ({ initialMessage }) => {
  const [message, setMessage] = useState(initialMessage);
  const onClickEnter = () => setMessage("안녕하세요.");
  const onClickLeave = () => setMessage("안녕히 가세요.");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>메시지 : {message}</h1>
    </div>
  );
};

export default Say;
