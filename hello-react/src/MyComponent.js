import React from "react";

const MyComponent = (props) => {
  /*
    구조분해 할당으로 props 처리
    - 기존에는 props.name, props.children 식으로 처리했으나, 
      구조분해 할당으로 간단하게 props 처리 가능
  */
  const { name, children } = props;
  return (
    <div>
      안녕하세요. 제 이름은 {name} 입니다. <br />
      children 값은 {children} 입니다.
    </div>
  );
};

export default MyComponent;
