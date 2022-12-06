import React, { Component, PureComponent, memo } from 'react'

//函数组件无论怎么样都会调用 此时借助memo方法来阻止
const MemoHeader = memo(function Header() {
    console.log('调用Header');
    return (
        <h2>header</h2>
    )
})

const MemoFooter = memo(function Footer() {
    console.log('调用F1ooter');
    return (
        <h2>footer</h2>
    )
})

// 继承自Component时无论怎么样都会重新调用render  继承自PureComponent时有修改才会调用render
class Main extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }
    render() {
        const { num } = this.state
        console.log('调用Main');
        return (
            <div>
                <h2>我是类组件</h2>
                <h2>计数器：{num}</h2>
                <button onClick={() => { this.add() }}>++</button>
            </div>


        )
    }
    add() {
        this.setState({
            num: this.state.num + 1
        })
    }
}

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }
    render() {
        const { num } = this.state
        console.log('调用app');
        return (
            <div>
                <h2>计数器：{num}</h2>
                <button onClick={() => { this.add() }}>++</button>
                <div>
                    <MemoHeader />
                    <MemoFooter />
                    <Main />
                </div>
            </div>
        )
    }
    add() {
        this.setState({
            num: this.state.num + 1
        })
    }
}

