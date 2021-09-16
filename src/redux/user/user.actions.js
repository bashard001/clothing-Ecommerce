import { UserActionTypes } from "./user.types";
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const setAsGuest = () => (
    {
        type: UserActionTypes.SET_AS_GUEST
    }
)
export const setModalState = (modal) => (
    {
        type: UserActionTypes.Modal_Control,
        payload: modal
    }
)