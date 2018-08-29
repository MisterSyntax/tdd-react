import React from 'react';
import { shallow } from 'enzyme';
import { PosterMaker } from './PosterMaker';

describe('PosterMaker', () => {
    it('Render the posterMaker component', () => {
        const wrapper = shallow(<PosterMaker />);
        expect(wrapper.find('.poster-maker').length).toEqual(1);
    });
});
