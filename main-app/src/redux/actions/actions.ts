import { ActionTypes } from "../types/actionTypes";
import { robotsDataUrl } from "../../constants";

export const setSearchField = (text: string) => ({
    type: ActionTypes.CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch: any) => {
    dispatch({type: ActionTypes.REQUEST_ROBOTS_PENDING})
    fetch(robotsDataUrl)
      .then(response => response.json())
      .then(data => dispatch({type: ActionTypes.REQUEST_ROBOTS_SUCCESS, payload: data}))
      .catch(err => dispatch({type: ActionTypes.REQUEST_ROBOTS_FAILED, payload: err}));
}