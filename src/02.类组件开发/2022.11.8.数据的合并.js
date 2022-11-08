import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '方玉雯',
            messqge: 'Hello World',
            num: 1
        }
    }
    render() {
        return (
            <div>
                <h2>
                    {this.state.messqge}
                </h2>
                <h2>
                    {this.state.name}
                </h2>
                <button onClick={(e) => { this.changeText() }}>chanegText</button>
                <h2>
                    {this.state.num}
                </h2>
                <button onClick={(e) => { this.changeNum() }}>chanegNum</button>
            </div>
        )
    }
    changeText() {
        // message不会消失变为undefined
        // 源码是通过obj.assign对多个对象进行合并所以不会出现将不做修改的至覆盖为ubdefined
        this.setState({
            name: '余洋',
        })
    }
    changeNum() {
        // 不论执行几次 都会只执行一次 因为obj.assign中拿到的num始终是1
        this.setState({
            num: this.state.num + 1
        })
        this.setState({
            num: this.state.num + 1
        })
        this.setState({
            num: this.state.num + 1
        })
        this.setState({
            num: this.state.num + 1
        })
        // 如果想执行 可以将一个函数传给setState 此时可以拿到上一次执行之后的num值
        this.setState((prevState) => {
            return {
                num: prevState.num + 1
            }
        })
        this.setState((prevState) => {
            return {
                num: prevState.num + 1
            }
        })
        this.setState((prevState) => {
            return {
                num: prevState.num + 1
            }
        })
        this.setState((prevState) => {
            return {
                num: prevState.num + 1
            }
        })
    }
}
