import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

describe('Test MainPage Component', () => {
    let wrapper: any;
    const mockProps = {
        robots: [{
            id: -1,
            name: 'John',
            email: 'john@gmail.com'
        },
        {
            id: -2,
            name: 'Tom',
            email: 'tom@gmail.com'
        }],
        searchField: '',
        isPending: false,
        onSearchChange: jest.fn(),
        onRequestRobots: jest.fn()
    }
    beforeEach(() => {
        wrapper = shallow(<MainPage {...mockProps}/>);
    });

    it('test base component', ()=>{
        expect(wrapper).toMatchSnapshot();
    })

    it('test isPending branches', ()=>{
        const wrapper2 = shallow(<MainPage {...mockProps} isPending={true}/>);
        expect(wrapper2).toMatchSnapshot();
    })
})
