import React, { Component } from "react";

const UserContext = React.createContext({
  name: "余洋",
  sex: "男",
});
// 正式开发 不止一个需要分享的数据 使用时 使用标签嵌套进行使用
const NewContext = React.createContext({
  bgc: "red",
});
// 类组件写法
class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, sex, bgc } = this.context;
    console.log(this.context);
    return (
      <div>
        <h2>用户名称：{name}</h2>
        <h2>用户性别：{sex}</h2>
        <h2 style={{ color: bgc }}>背景色：{bgc}</h2>
      </div>
    );
  }
}
//类组件写法只能实现一个共享数据
UserInfo.contextType = UserContext;
// UserInfo.contextType = NewContext;

// 函数组件写法
// function UserInfo() {
//   return (
//     // {/**consumer消费者 使用父组件的provider */}
//     <UserContext.Consumer>
//       {(value) => {
//         return (
//           <NewContext.Consumer>
//             {(theme) => {
//               return (
//                 <div>
//                   <div>
//                     <h2>用户名称：{value.name}</h2>
//                     <h2>用户性别：{value.sex}</h2>
//                     <h2 style={{ color: theme.bgc }}>背景色：{theme.bgc}</h2>
//                   </div>
//                 </div>
//               );
//             }}
//           </NewContext.Consumer>
//         );
//       }}
//     </UserContext.Consumer>
//   );
// }

class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>用户信息</h2>
        <UserInfo></UserInfo>
      </div>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "芳芳芳",
      sex: "女",
    };
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          {/*如果不是在UserContext.Provider内部 默认值UserContext就有用了 */}
          <NewContext.Provider value={{ bgc: "red" }}>
            <User></User>
          </NewContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}
