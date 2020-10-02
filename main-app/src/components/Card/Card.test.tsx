import {shallow} from 'enzyme';
import React from 'react';
import Card from './Card';

const testProps = {
    id: -1,
    name: 'Test',
    email: 'test@test.com'
}

it('expect to render Card Component', () => {
    expect(shallow(<Card {...testProps}/>).length).toEqual(1);
    expect(shallow(<Card {...testProps}/>)).toMatchSnapshot();
});