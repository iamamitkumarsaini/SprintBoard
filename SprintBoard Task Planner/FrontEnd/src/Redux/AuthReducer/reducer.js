import * as types from "./actionTypes";

const initData = {
    isLoading:false,
    isError:false,
    token:""
};

export const reducer = (oldState = initData, action) => {

    const { type, payload } = action;

    switch(type){
        case types.USER_SIGNUP_REQUEST:
            return {
            ...oldState,
            isLoading:true
        }

        default:
            return oldState
    }
}