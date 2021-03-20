### 启动
- cnpm install 
- npm start 

### 相关依赖
- npm install antd --save
- npm install -save redux
- npm install -save axios
- pm install --save redux-thunk
- npm install --save redux-saga

### toDoList
    - react+redux 实现的todolist小demo
    - axios 获取数据dispatch到store，数据通过easy mock 模拟
    - 输入框输入添加，数据条点击删除

#### 一些总结 
    - react-组件逻辑和样式相分离，可以提高性能
    - 常量可单独分离，减少错误
    -  Reducer 里只能接受state, 不能改变state，可深度拷贝返回新对象
    - 方法定义记得绑定this
    - 