import React, { Component, PureComponent } from 'react'

// 文件讲述 通过高阶组件在函数入口处给数据共享给所有组件
class Home extends PureComponent {
    render() {
        return <h1>home:{`名字:${this.props.name} 性别:${this.props.sex} 籍贯:${this.props.postion}`}</h1>
    }
}
class About extends PureComponent {
    render() {
        return <h1>home:{`名字:${this.props.name} 性别:${this.props.sex} 籍贯:${this.props.postion}`}</h1>
    }
}
// return 一个类组件
// const handleComponent = function (Component) {
//     return class NewComponent extends PureComponent {
//         render() {
//             return <Component {...this.props} postion='中国' />
//         }
//     }
// }



// return 一个函数组件
const handleComponent = function (Component) {
    let NewComponent
    NewComponent = (props) => {
        return <Component {...props} postion='中国' />
    }
    NewComponent.displayName = 'nixx'
    return NewComponent

}
const NewHome = handleComponent(Home)
const NewAbout = handleComponent(About)
export default class App extends Component {
    render() {
        return (
            <div>App
                <NewHome name='余洋' sex='男' />
                <NewAbout name='方玉雯' sex='女' />
            </div>
        )
    }
}
