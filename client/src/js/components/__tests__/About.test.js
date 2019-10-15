import React from 'react';
import { shallow, mount } from '../../../setupTests';

import About from '../about/about';
import Stories, { StoryHome } from '../about/stories';

describe('About page', () => {
    const wrapper = shallow(<About />);

    it('renders without crashing', () => {
        wrapper;
    })

    it('is contained within a main-page section tag', () => {
        expect(wrapper.find('.main-page')).toExist();
    })

    describe('splash', () => {
        const splash = wrapper.find('.main-splash');
        const splash2 = wrapper.find('.about-splash');

        it('renders the splash', () => {
            expect(splash).toExist();
            expect(splash2).toExist();
            expect(splash).toMatchSelector('.about-splash');
            expect(splash2).toMatchSelector('.main-splash');
        })

        it('renders a header element with the class "head1"', () => {
            expect(splash).toContainMatchingElement("h1.head1")
        })
    })

    describe('renders the main content container', () => {
        const content = wrapper.find('.main-content');
        const content2 = wrapper.find('.about-content');

        it('renders the container', () => {
            expect(content).toExist();
            expect(content2).toExist();
            expect(content).toMatchSelector('.about-content');
            expect(content2).toMatchSelector('.main-content');
        })

        it('renders a header with class "head2', () => {
            expect(content).toContainMatchingElement("h2.head2");
            expect(wrapper.find(".head2")).toHaveText("WE ARE");
        })

        describe('we are section', () => {
            const weAre = wrapper.find('.about-we-are');

            it('renders the container', () => {
                weAre;
            })

            it('contains paragraphs', () => {
                expect(weAre).toContainMatchingElements(2, 'p');
            })

            it('contains an image', () => {
                expect(weAre).toContainExactlyOneMatchingElement('img');
            })
        })

        describe('mission section', () => {
            const mission = wrapper.find('.about-mission');

            it('renders the container', () => {
                mission;
            })

            it('contains an image', () => {
                expect(mission).toContainExactlyOneMatchingElement('img');
            })
        })
    })
})

describe('Story home page', () => {
    const wrapper = mount(<Stories />);

    it('renders without breaking', () => {
        wrapper;
    })

    describe('routing', () => {

        it('renders the StoryHome component', () => {
            expect(wrapper.find('.stories-content')).toExist();
            expect(wrapper.find('.stories-page-content')).not.toExist();
        })
    })

})