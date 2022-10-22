import React, { Component } from "react";

const UserContext = React.createContext({
  name: "余洋",
  sex: "男",
});

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, sex } = this.context;
    return (
      <div>
        <h2>用户名称：{name}</h2>
        <h2>用户性别：{sex}</h2>
      </div>
    );
  }
}
UserInfo.contextType = UserContext;
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
          <User></User>
        </UserContext.Provider>
      </div>
    );
  }
}
