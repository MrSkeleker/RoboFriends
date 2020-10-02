import { ActionTypes } from "../types/actionTypes"
import * as actions from './actions';
import { mockStore } from '../../setupTests';

describe('setSearchField Action Tests', () => {
    it('test search action', () => {
        const text = 'test';
        const expectedAction = {
            type: ActionTypes.CHANGE_SEARCH_FIELD,
            payload: 'test'
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    })
})

describe('requestRobots Action Tests', () => {
    let store: any;

    beforeEach(() => {
        store = mockStore();
        fetchMock.resetMocks();
    })

    it('test request action pending', () => {
        expect.assertions(1);
        const expectedActions = [
            {
                type: ActionTypes.REQUEST_ROBOTS_PENDING
            }]
        store.dispatch(actions.requestRobots());
        const actualActions = store.getActions();
        expect(actualActions).toEqual(expectedActions);
    })

    it('test request action success', () => {
        expect.assertions(1);
        const mockData = [
            {
                id: -1,
                name: 'test1',
                username: 'test1',
                email: 'test1@test.com'
            }
        ]
        const expectedAction = {
            type: ActionTypes.REQUEST_ROBOTS_SUCCESS,
            payload: mockData
        }
        fetchMock.mockResponseOnce(JSON.stringify(mockData));
        
        return store.dispatch(actions.requestRobots())
        .then((res: any)=>{
            expect(res).toEqual(expectedAction);
        })
    })

    it('test request action failed', () => {
        expect.assertions(1);
        const mockError = new Error('bad request');
        const expectedAction = {
            type: ActionTypes.REQUEST_ROBOTS_FAILED,
            payload: mockError
        }
        fetchMock.mockReject(()=>Promise.reject(mockError));
        return store.dispatch(actions.requestRobots())
        .then((res: any)=>{
            expect(res).toEqual(expectedAction);
        })
    })
})
