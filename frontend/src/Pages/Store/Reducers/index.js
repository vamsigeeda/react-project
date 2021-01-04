
import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILURE} from '../Actions/index';

      const initialState = {
          isloading:false,
          data:[],
          error:false
      }
         export const login = (state=initialState,action)=>{
                switch (action.type) {
                    case USER_LOGIN_REQUEST:
                      return{
                          ...state,
                          isloading:true,
                      }
                        

                        case USER_LOGIN_SUCCESS:
                        return {
                            ...state,
                            isloading:false,
                            data:action.payload
                        }
                  
                        case USER_LOGIN_FAILURE:
                        return {
                             isloading:false,
                             error:action.payload
                        }
                      
                
                    default:
                    return state
                }

         }