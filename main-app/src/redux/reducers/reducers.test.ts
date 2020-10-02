import { ActionTypes } from "../types/actionTypes"
import * as reducers from './reducers';

describe('searchRobots Reducer Tests', ()=>{
    const initialStateSearch = {
        searchField: ''
    }
    it('test for no action', ()=>{
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
    })
    it(`test for action ${ActionTypes.CHANGE_SEARCH_FIELD}`, ()=>{
        expect(reducers.searchRobots(initialStateSearch, {
            type: ActionTypes.CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({searchField: 'abc'});
    })
})

describe('requestRobots Reducer Tests', () => {
    const initialStateRequest = {
        isPending: false,
        robots: [],
        error: ''
    }
    it('test for no action', ()=>{
        expect(reducers.requestRobots(undefined, {}))
        .toEqual(initialStateRequest);
    })
    it(`test for action ${ActionTypes.REQUEST_ROBOTS_PENDING}`, () => {
        expect(reducers.requestRobots(initialStateRequest, {type: ActionTypes.REQUEST_ROBOTS_PENDING}))
        .toEqual({
            ...initialStateRequest, 
            isPending: true
        });
    })
    it(`test for action ${ActionTypes.REQUEST_ROBOTS_SUCCESS}`, ()=>{
        expect(reducers.requestRobots(initialStateRequest, {
            type: ActionTypes.REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }],
        })).toEqual({
            ...initialStateRequest,
            isPending: false,
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        });
    })
    it(`test for action ${ActionTypes.REQUEST_ROBOTS_FAILED}`, ()=>{
        expect(reducers.requestRobots(initialStateRequest, {
            type: ActionTypes.REQUEST_ROBOTS_FAILED,
            payload: 'Error'
        }))
        .toEqual({
            ...initialStateRequest,
            error: 'Error',
            isPending: false
        });
    })
})