import { UserActionTypes } from "./user.types";
const INITIAL_STATE = {
    currentUser: null,
    isGuest: false,
    modalShow: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        case UserActionTypes.SET_AS_GUEST:
            return {
                ...state,
                isGuest: state.isGuest = true
            }
        case UserActionTypes.Modal_Control:
            return {
                ...state,
                modalShow: action.payload

            }

        default:
            return state
    }
}

export default userReducer;
