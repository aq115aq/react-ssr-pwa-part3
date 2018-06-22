// 用 Ducks 结构， 把相关的代码放在一个独立的 module 文件中
// 对外暴露 types、reducer、action creators

import {actions as asyncComponentWillMount} from './asyncComponentWillMount'

// Actions
export const types = {
  LOGIN: 'user/LOGIN',
  LOGOUT: 'user/LOGOUT',
  GETINFO: 'user/GETINFO'
}

const initialState = {
  isLogined: false,
  info: ''
}
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN: 
      return {
        ...state,
        isLogined: true
      }
    case types.LOGOUT:
      return {
        ...state,
        isLogined: false
      }
    case types.GETINFO:
      return {
        ...state,
        info: action.info
      }
    default: return state;
  }
}

// Action Creators
export const actions = {
  login: () => {
    return dispatch => {
      dispatch({type: types.LOGIN})
    }
  },
  logout: () => {
    return dispatch => {
      dispatch({type: types.LOGOUT})
    }
  },
  getInfo: () => {
    return dispatch => {
      dispatch(asyncComponentWillMount.addAsync())
      setTimeout(() => {
        dispatch({type: types.GETINFO, info: '你已成功获取异步信息'})
        dispatch(asyncComponentWillMount.decreaseAsync())
      }, 50)
    }
  }
}