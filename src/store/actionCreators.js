//管理action的
import { CHANGE_INPUT , ADD_ITEM, DELETE_ITEM, GET_LIST,GET_MY_LIST} from './actionTypes'
import axios from 'axios'
export const changeInputAction = (value)=>({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type: ADD_ITEM, 
})

export const deleteItemAction = (index)=>({
    type: DELETE_ITEM, 
    index
})

// 将ajax获取的数据 真正变到
export const getListAction = (data)=>({
    type: GET_LIST, 
    data
})

// 这里返回的是一个对象，返回的是一个方法，因此可以在这里写
export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            // console.log(res)
            const data = res.data 
            // console.log(data)
            const action = getListAction(data)
            dispatch(action) //传入到store中了
        })
    }
}

// redux-saga
export const getMyListAction = ()=>({
    
    type: GET_MY_LIST
    
})