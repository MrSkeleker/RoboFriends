import { ActionTypes } from "../types/actionTypes"

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state = initialStateSearch, action: any) => {
    switch(action.type){
        case ActionTypes.CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload
            };
        default:
            return state;
    }
}

const initialStateRequest = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state = initialStateRequest, action: any) => {
    switch(action.type){
        case ActionTypes.REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                isPending: true
            }
        case ActionTypes.REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                robots: action.payload,
                isPending: false
            }
        case ActionTypes.REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                error: action.payload,
                isPending: false
            }
        default:
            return state;
    }
}