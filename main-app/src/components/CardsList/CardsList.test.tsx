import {shallow} from 'enzyme';
import React from 'react';
import CardsList from './CardsList';

const testProps = {
    robots: [{
        id: -1,
        name: 'Test',
        email: 'test@test.com'
    }]
}

it('expect to render CardList Component', () => {
    expect(shallow(<CardsList {...testProps}/>)).toMatchSnapshot();
});