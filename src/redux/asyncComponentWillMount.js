// 用 Ducks 结构， 把相关的代码放在一个独立的 module 文件中
// 对外暴露 types、reducer、action creators

// Actions
export const types = {
  ADDASYNC: 'asyncComponentWillMount/ADDASYNC',
  DECREASEASYNC: 'asyncComponentWillMount/DECREASEASYNC'
}

const initialState = {
  asyncWait: 0
}
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADDASYNC: 
      return {
        ...state,
        asyncWait: state.asyncWait + 1
      }
    case types.DECREASEASYNC: 
      return {
        ...state,
        asyncWait: state.asyncWait - 1
      }
    default: return state;
  }
}

// Action Creators
export const actions = {
  addAsync: () => {
    return dispatch => {
      dispatch({type: types.ADDASYNC})
    }
  },
  decreaseAsync: () => {
    return dispatch => {
      dispatch({type: types.DECREASEASYNC})
    }
  }
}