import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({
  name = "기본값이양",
  favoriteNumber = "ㅇㅇ",
  children,
}) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name} 입니다. <br />
      children 값은 {children} 입니다. <br />
      name의 타입은 {typeof name} 입니다. <br />
      children의 타입은 {typeof children} 입니다. <br />
      <br />
      제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 값~~",
  favoriteNumber: 11111,
};

export default MyComponent;
