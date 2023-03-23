import * as types from "./actionTypes"

const userSignupRequest = () => {
    return {
        type:types.USER_SIGNUP_REQUEST
    };
};

const userSignupSuccess = (payload) => {
    return {
        type:types.USER_SIGNUP_SUCCESS,
        payload
    };
};

const userSignupFailure = () => {
    return {
        type:types.USER_SIGNUP_FAILURE
    };
};