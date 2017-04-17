import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Form from '../lib/shared/components/form/form';

test('Form Default', (t) => {
    const wrapper = shallow(<Form status="WAITING_USER" />);

    t.is(wrapper.type(), 'form', 'should be form');
});

test('Form SENDING', (t) => {
    const wrapper = shallow(<Form status="SENDING" />);

    t.is(wrapper.type(), 'div', 'should be div');
    t.true(wrapper.hasClass('alert'), 'should have className alert');
    t.true(wrapper.hasClass('alert-info'), 'should have className alert-info');
});

test('Form DONE', (t) => {
    const wrapper = shallow(<Form status="DONE" />);

    t.is(wrapper.type(), 'div', 'should be div');
    t.true(wrapper.hasClass('alert'), 'should have className alert');
    t.true(wrapper.hasClass('alert-success'), 'should have className alert-success');
});

test('Form FAILED', (t) => {
    const wrapper = shallow(<Form status="FAILED" />);

    t.is(wrapper.type(), 'div', 'should be div');
    t.true(wrapper.hasClass('alert'), 'should have className alert');
    t.true(wrapper.hasClass('alert-danger'), 'should have className alert-danger');
});
