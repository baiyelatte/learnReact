import React, { Component } from "react";

class Cpn extends Component {
  render() {
    return <h2>nixx</h2>;
  }
  componentWillUnmount() {
    console.log("Cpntaxx卸载");
  }
}
export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("先执行constructor");
    this.state = {
      num: 0,
      isShow: false,
    };
  }
  render() {
    console.log("再执行render");
    const { num, isShow } = this.state;
    return (
      <div style={{ width: "100px", height: "100px", backgroundColor: "red" }}>
        我是baiyelatte分支nixx
        <h2>{num}</h2>
        <button
          onClick={() => {
            this.add();
          }}
        >
          ++
        </button>
        {isShow && <Cpn />}
      </div>
    );
  }
  add() {
    this.setState({
      num: (this.state.num += 1),
      isShow: !this.state.isShow,
    });
  }
  componentWillUnmount() {
    console.log("taxx卸载");
  }
  componentDidMount() {
    console.log("再挂载");
  }
  componentDidUpdate() {
    console.log("更新了");
  }
}

// 函数式组件
// function App() {
//   return (
//     <div style={{ width: "100px", height: "100px", backgroundColor: "red" }}>
//       我是baiyelatte分支nixx
//     </div>
//   );
// }
