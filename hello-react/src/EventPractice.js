import React, { useState } from "react";

const EventPractice = () => {
  // form 객체에 username, message state 데이터를 한 번에 처리
  // 이를 통해, 많은 state 데이터를 편하게 처리가 가능
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      // 기존 form 데이터를 유지하면서, 특정 값만 바꾸기 위해 객체 스프레드 연산자(...) 사용
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요."
        value={message}
        onChange={onChange}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
