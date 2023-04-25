import { CATEGORY_ACTION_TYPE } from "./category.types";
import { createAction } from "../../utils/reducer.utils";

export  const  setCategoriesMap = (categoriesMap) => createAction(CATEGORY_ACTION_TYPE.SET_CATEGORY_MAP, categoriesMap)