## Context

>定义：Context提供了一种方式，能够让数据在组件树中传递而不必一级一级手动传递。

>结构：Context =》 <Provider>携带一个变量值，
>Provider会向后代统一提供这个变量值，
>Consumer接受对应Provider提供的变量值。
>一个Provider提供与i个变量，如果由多个变量则嵌套添加

>API：createContext(defaultValue) 是唯一创建 Context 的方式
## ContextType 的使用
>目的：对于只有一个 context 的项目，用 contextType 替代 
>Consumer可以大大简化代码
>
>结构：Provider不变，数据获取不再使用Consumer，
>而在组件中调用 static contextType = BatteryContext，
>然后就可以使用变量获取数据 const battery = this.context
>,battery 就是传递过来的值
>
## lazy 和 suspense
>目的：暂时不同的资源——延迟加载
>
>webpack——code splitting 
>
>import—— import('path', callback) 或者 
>import('path').then()
>
>React——lazy，用于懒加载组件
>使用方法： const About = lazy(() => {import(',.about.jsx')});
>
>Suspense——lazy 未加载之前显示的组件，写在 Suspense 的 fallback 属性中
>
>ErrorBoundary——React会在 componentDidCatch 中捕捉到错误，可以在这个生命周期函数中修改 state 的 error 状态，
>也可以使用 static getDerivedStateFromError 函数，函数中返回一个 Object 对象更新 state 状态
>
## memo
>目的：处理不必要的渲染更新，即减少渲染
>
>使用方法：const Foo = memo(function Foo(props) {
>   console.log('Foo function');
>   return (<div>{props.person.age}</div>)
>})
## Hooks
> `定义：Hooks 允许你在不使用 class 的环境下使用 state 和其他 React features ——允许你在函数组件中下使用特定的预定义内部函数来标记状态和组件生命周期使得所有组件都几乎可以使用函数来编写。`
### 类组件的不足：
#### 1、状态逻辑难以复用：
##### 缺少复用机制
##### 渲染属性和高阶组件导致层级冗余
#### 2、趋向复杂难以维护：
##### 生命周期函数混杂不相干逻辑
##### 相干逻辑混杂在不同生命周期中
#### 3、this 指向问题：
##### 内联函数过度创建新句柄
##### 类成员函数不能保证 this
### Hooks 的优势
#### 1、优化组件的三大问题
##### 函数组件无 this 指向问题
##### 自定义 Hooks 方便复用状态逻辑
##### 副作用的关注点分离

`所有 hooks 的函数都是以 use 开头`
### useState：在 hooks 中用 useState 来代替 state 和 setState
```javascript
class App2 extends Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => {this.setState({
                    count: this.state.count + 1
                })}}>count: {this.state.count}</button>
            </div>
        )
    }
}
==>
function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('myDiyName');
    return (
        <div>
            <button onClick={() => {setCount(count + 1); setName('myNewName')}}>count: {count}, name: {name}</button>
        </div>
    )
}
```
>useState是严格按照顺序来识别注册的变量的，一旦顺序错乱就会出乱子。
>多运行或者少运行 useState 都会报错。

`hooks语法规范检测工具——eslint-plugin-react-hooks`
> 安装： cnpm i eslint-plugin-react-hooks -D
### useEffect：在 hooks 中用 useEffect 来代替生命周期函数
#### 副作用：
>绑定事件、
>网络请求、
>访问DOM
#### 副作用时机：
>Mount之后——componentDidMount
>
>Update之后——componentDidUpdate
>
>Unmount之前——componentWillUnmount
>
>=> useEffect

> useEffect是在组件每次渲染之后调用
>第一个 useEffect 相当于 componentDidMount,
>后面的调用都相当于 componentDidUpdate。 useEffect 有一个
>clean callback用于每一次调用结束，下一次调用开始之前。
>
>useEffect 有两个参数，第一个是执行的回调函数，第二个是一个数组，
>只有数组的每一项都不变的情况下才不会执行，即每一项都不变的情况下，
>才会阻止useEffect继续执行。例：
```javascript
// 只有 count 发生改变的时候才触发console.log
useEffect(() => {
    console.log(`count：${count}`);
}, [count])
```
### useContext
>在 hooks 环境中，Consumer 依旧可以使用，但是 contextType 不能使用。
>使用方法： 
```javascript
const CountContext = createContext()
function Count() {
    const count = useContext(CountContext);
    return (
        <div>{count}</div>
    )
}
function App() {
    let count = 0;
    return (
        <CountContext.Provider value={count}>
            <Count/>
        </CountContext.Provider>
    )
}
```
### memo & callback hooks
>memo——用来优化组件的渲染行为，当传入属性值都不变的情况下，就不会触发渲染，与 PureComponent 作用类似。
>
>memo函数针对一个组件的渲染是否重复执行，而 useMemo 则定义了一个函数逻辑是否重复执行。
>
>useMemo 使用方法： 
```javascript
// 第一个参数是需要执行的逻辑函数，第二个参数是执行函数所依赖的变量组成的数组。
// 如果不传入这个数组那么这个函数将会每次都执行，如果传入一个空数组则只执行一次。
// useEffect 都是渲染之后执行的，而 useMemo 是在渲染中执行的
const double = useMemo(() => {
    return count * 2
}, [count])

// useMemo(() => fn) === useCallback(fn)
// 如果 useMemo 返回一个函数，则与 useCallback 直接执行这个函数等价
// useCallback 是 useMemo 的一个变形
```
### useRef
>作用：
>
>1、专门用来获取子组件或者DOM元素句柄
>
>2、存储渲染周期之间的共享数据，(state会引发重渲染，ref不会）
>
### 自定义 Hooks

### Hooks 的使用法则
>1、只在顶层使用 Hooks ，即不能在循环语句、条件语句或者是嵌套函数中使用 hooks 函数
>
>2、仅在函数组件或者自定义 hooks 函数中调用 hooks 函数
>
### Hooks 常见问题
>1、生命周期函数如何映射到 Hooks？
>
>——useEffect
>
>2、类实例成员变量如何映射到 Hooks
>
>——useRef
>
>3、Hooks中如何获取历史 props 和 state
>
>——useRef
>
>4、如何强制更新一个 Hooks 组件
>
>——搞一个props每次更新值
>
## Redux
### 三大原则
>单一数据源
>
>状态不可变
>
>纯函数修改状态
>
## PWA——Progressive Web App
### Service Worker——服务工作线程
>常驻内存运行、
>代理网络请求、
>依赖HTTPS
### Promise
>优化回调地狱、
>async/await语法同步化、
>Service Worker的API风格
### fetch——网络请求
>比XMLHttpRequest更简洁、
>Promise风格、
>依旧存在不足
### catch API——支持资源的缓存系统
>缓存资源(css/scripts/image)、
>依赖Service Worker代理网络请求、
>支持理线运行
### notification API——消息推送
>依赖用户授权、
>适合在Service Worker中推送
>
>
## 任务
### 页面一
>React 视觉组件拆分
>
>redux store 状态涉及
>
>redux action/reducer 设计