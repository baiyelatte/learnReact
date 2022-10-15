import React, { Component } from "react";
//负责pros的类型校验
import PropTypes from "prop-types";

// 类组件
class Children extends Component {
  //   constructor(props) {
  //     super();
  //     this.props = props;
  //   }
  // 第一种写法
  static propTypes = {
    feature: PropTypes.string.isRequired,
  };
  static defaultProps = {
    feature: "方玉雯",
  };
  render() {
    const { feature } = this.props;
    return <div>芳芳芳是什么{feature}</div>;
  }
}
//定义prop的类型  第二种写法
// Children.propTypes = {
//   feature: PropTypes.string.isRequired, // 验证类型并说明必传
// };
// 给默认值
// Children.defaultProps = {
//   feature: "方玉雯",
// };
//-----------------------------------------------------------------------
//定义prop的类型
Children.propTypes = {
  feature: PropTypes.string,
};

// 函数组件
function Child(props) {
  const { feature, name } = props;
  return (
    <div>
      {name &&
        name.map((item) => {
          return <h1>{item}</h1>;
        })}
      {feature && <h2>芳芳芳是什么{feature}</h2>}
    </div>
  );
}
Child.propTypes = {
  feature: PropTypes.number,
  name: PropTypes.array,
};
// 给默认值
Child.defaultProps = {
  feature: 1000,
  name: [100, 500, 600],
};
//-----------------------------------------------------------------------

export default class App extends Component {
  render() {
    return (
      <div>
        <Children feature="nixx"></Children>
        <Children></Children>
        <Child feature={18}></Child>
        <Child name={[15, 16, "xxxxxxxx"]}></Child>
        <Child></Child>
      </div>
    );
  }
}
