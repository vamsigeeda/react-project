export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";


export const userloginrequest = ()=>{
    return {
        type:USER_LOGIN_REQUEST,
    }
}

export const userloginsuccess = (data)=>{
    return {
        type:USER_LOGIN_SUCCESS,
        payload:data
    }
}


export const userloginfailure = (error)=>{
    return {
        type:USER_LOGIN_FAILURE,
        payload:error
    }
}