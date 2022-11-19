import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '我爱你,11方玉雯'
        }
    }
    render() {
        const {message} = this.state
        return (
            <div>
                <h1>
                    {message}
                </h1>
                <button onClick={()=>this.changeText()}>修，改文本</button>
            </div>
        )
    }
    // setState 是异步更新 如果直接拿值是拿到旧的 
    // 如果想获取新的有第二个参数来获取，第二个参数为回调函数可以对数据进行操作
    // 18不存在同步全是异步
    changeText() {
        this.setState({
            message:'，，我爱你余洋'
        },()=>{
            console.log(this.state.message);
        })
        console.log(this.state.message);
    }
    // 也是新的数据
    componentDidUpdate(){
        console.log(this.state.message);
    }
}
