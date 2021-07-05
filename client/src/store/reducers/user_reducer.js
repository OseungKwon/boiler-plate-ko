const USER_LOGIN = "login_user";
const REGISTER_USER = "register_user";
const AUTH_USER = "auth_user";

// 리듀서 함수 생성
export default function (state = {}, action) {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, loginSuccess: action.payload }
        case REGISTER_USER:
            return { ...state, register: action.payload }
        case AUTH_USER:
            return { ...state, userData: action.payload }
        default:
            return state;
    }
}