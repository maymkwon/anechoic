import {createAction, handleActions} from 'redux-actions'
import {Map, List, fromJS} from 'immutable'
import axios from 'axios'
//inital
const url = 'https://jsonplaceholder.typicode.com/posts' 

const caller = (params) => {
  
}

console.log(caller)
const initialState = Map({
  counter: List([
    Map({
      color: 'black',
      number: 0
    })
  ]),
  list: List([])
})

//type 

const CREATE = 'test/CREATE';
const REMOVE = 'test/REMOVE';
const READ = 'test/READ';
const UPDATE = 'test/UPDATE';
const GET_LIST = 'test/GET_LIST';


//action
function createAsyncAction(type, fn) {
  return (...args) => async(dispatch) => {
    dispatch({
      type: `${type}_STARTED`,
      payload: args
    });
    let result;
    try {
      result = await fn(...args);
    } catch (error) {
      dispatch({
        type: `${type}_FAILED`,
        error: true,
        payload: error
      });
      throw error;
    }
    dispatch({
      type: `${type}_ENDED`,
      payload: result
    });
    return result;
  }
}

export const create = createAction(CREATE);
export const remove = createAction(REMOVE);
export const read = createAction(READ);
export const update = createAction(UPDATE);
export const getList = createAction(GET_LIST, (update) => caller(update));
export const get = createAsyncAction(
  GET_LIST,
  (update) => axios(url).then((res) => {
    // console.log(res)
    return res.data
  }) 
);


//reducer

export default handleActions({
  [CREATE]: (state, action) => {
    const counter = state.get('counter');

    return state.set('counter', counter.push(
      Map({
        color: action.payload,
        number: 0
      })
    ))
  },
  [REMOVE]: (state, action) => state,
  [READ]: (state, action) => state,
  [UPDATE]: (state, action) => state,
  [GET_LIST]: (state, action) => {
    console.log(action)
    return state.set('list', List(action.payload))
  },
}, initialState)