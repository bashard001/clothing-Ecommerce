import { UserActionTypes } from "./user.types";
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const setAsGuest = user => (
    {
        type: UserActionTypes.IS_GUEST,
        payload: user
    }
)