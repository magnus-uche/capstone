import { CATEGORY_ACTION_TYPE } from "./category.types"
const initial_state = {
    categoriesMap: {},
}

export const categoryReducer = (state = initial_state, action) =>{
    const {type, payload} = action

    switch(type) {
        case CATEGORY_ACTION_TYPE.SET_CATEGORY_MAP:
            return {
                ...state,
                categoriesMap: payload
            }
        default :
        return state
    }
}