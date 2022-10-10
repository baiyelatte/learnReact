import React, { Component } from "react";

function Header() {
  return <h2>我是2022.10.10的头部</h2>;
}
function Center() {
  return (
    <div>
      <h2>我是2022.10.10的中部</h2>
      <CenterText />
    </div>
  );
}
function Footer() {
  return <h2>我是2022.10.10的尾部</h2>;
}

function CenterText() {
  return (
    <div style={{ width: "100px", height: "100px", backgroundColor: "pink" }}>
      xxxxxx
    </div>
  );
}

export default class Qt extends Component {
  render() {
    return (
      <div>
        <Header />
        <Center />
        <Footer />
      </div>
    );
  }
}
