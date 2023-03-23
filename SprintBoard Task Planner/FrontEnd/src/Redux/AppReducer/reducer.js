
const initData = {
    isLoading:false,
    isError:false,
    user:""
};


export const reducer = (oldState = initData, action) => {
    const { type, payload} = action;

    switch(type){
        default: return oldState
    }
}