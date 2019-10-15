import React from 'react';
import {shallow} from '../../../setupTests';

import Home from '../landing/home';

describe('Home page', () => {
    const wrapper = shallow(<Home />);

    it('renders without crashing', () => {
        wrapper;
    })

    it('renders landing section', () => {
        expect(wrapper.find('.landing')).toExist();
    });

    it('renders the splash image', () => {
        expect(wrapper.find('.landing-img-container')).toExist();
        expect(wrapper.find('.landing-img-container')).toContainMatchingElement('img');
    })

    it('renders the banner', () => {
        expect(wrapper.find('.landing-banner')).toExist();
        expect(wrapper.find('.landing-banner')).toContainMatchingElement('h1.head1');
        expect(wrapper.find('.landing-banner')).toContainMatchingElement('button.button2');
    })

    it('renders the club video', () => {
        expect(wrapper.find('.landing-video')).toExist();
        expect(wrapper.find('.landing-video')).toContainMatchingElement('iframe.big-video');
    })
})