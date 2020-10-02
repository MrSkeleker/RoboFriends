// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
//import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
configure({adapter: new Adapter() });
export const mockStore = configureMockStore([thunkMiddleware]);