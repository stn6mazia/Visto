import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../lib/shared/components/layout/layout';

const wrapper = shallow(<Layout />);

test('Layout', (t) => {
    t.is(wrapper.type(), 'div', 'should be div');
    t.true(wrapper.hasClass('container'), 'should have className container');
    t.true(wrapper.hasClass('layout'), 'should have className layout');
});
