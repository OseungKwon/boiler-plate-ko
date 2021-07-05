// 루트 리듀서 생성
// (store를 만들 때, 하나의 리듀서만 사용해야 하기 때문에)

import { combineReducers } from 'redux';
import user from './user_reducer';

const rootReducer = combineReducers({
    user
})

export default rootReducer;