import React, { Component, PureComponent, createContext } from 'react'

// 文件讲述 通过高阶组件在函数入口处给数据共享给所有组件
const HomeContext = createContext({
    name: '余洋',
    sex: '男',
    postion: '中国'
})
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
const handleComponent = function (Component) {

    class NewComponent extends PureComponent {
        render() {
            return <Component {...this.props} {...this.context} />
        }
    }
    NewComponent.contextType = HomeContext
    return NewComponent
}



// return 一个函数组件
// const handleComponent = function (Component) {
//     let NewComponent
//     NewComponent = (props) => {
//         return <HomeContext.Consumer>
//             {
//                 (value) => {
//                     return <Component {...props} {...value} />
//                 }
//             }
//         </HomeContext.Consumer>
//     }
//     NewComponent.displayName = 'nixx'
//     return NewComponent
// }
const NewHome = handleComponent(Home)
const NewAbout = handleComponent(About)
export default class App extends Component {
    render() {
        return (
            <div>App
                <HomeContext.Provider value={{
                    name: '余洋',
                    sex: '男',
                    postion: '中国'
                }}>
                    <NewHome />
                    <NewAbout />
                </HomeContext.Provider>
            </div>
        )
    }
}
