import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '我爱你,方玉雯'
        }
    }
    render() {
        const {message} = this.state
        return (
            <div>
                <h1>
                    {message}
                </h1>
                <button onClick={()=>this.changeText()}>修改文本1</button>
                <button id='btn'>修改文本2</button>
            </div>
        )
    }
    componentDidMount() {
        document.getElementById('btn').addEventListener('click',()=>{
            this.setState({
                message:'我爱你,,余洋'
            })
            console.log(this.state.message);
        })
    }
    changeText() {
        //此时为同步
        setTimeout(() => {
            this.setState({
                message:'我爱你余洋'
            })
            console.log(this.state.message);
        }, 10);
    }
}
