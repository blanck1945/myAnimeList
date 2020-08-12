import { SET_ADMIN_MENU, SET_POST_TO } from "../adminTypes"

export const setMenuTo = value => ({
    type: SET_ADMIN_MENU,
    value
})

export const setPostTo = value => ({
    type: SET_POST_TO,
    value
})