import {takeEvery, put} from 'redux-saga/effects'
import {GET_MY_LIST} from './actionTypes'
import axios from 'axios'
import {getListAction} from './actionCreators'
//业务逻辑的地方
// generator ES6的写法
function* mySage(){
    //等待监听
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
    console.log('jspang')
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
    //         // console.log(res)
    //         const data = res.data 
    //         // console.log(data)
    //         const action = getListAction(data)
    //         put(action) //传入到store中了
    //     })

    const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
        // console.log(res)
        const data = res.data 
        // console.log(data)
        const action = getListAction(data) 
        put(action)
    })

    const action = getListAction(res.data)
    yield put(action)

}

export default mySage