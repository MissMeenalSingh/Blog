const Reducer = (state, action) => {

    switch(action.type){
        case "LOGIN_START" :
            return {
                error:null,
                user:false,
                isFetching:true,
            }
        case "LOGIN_SUCCESS" :
            return {
                error:null,
                user:action.payload,
                isFetching:false,
            }
        case "LOGIN_FAILURE" :
            return {
                error:true,
                user:false,
                isFetching:false,
            }
        default:
            return state
    }

}

export default Reducer