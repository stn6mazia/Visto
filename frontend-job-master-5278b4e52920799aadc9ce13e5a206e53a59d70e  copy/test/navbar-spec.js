import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../lib/shared/components/navbar/navbar';

const wrapper = shallow(
    <Navbar
        brandName="My Brand"
        navLinks={[{
            to: '/link',
            label: 'My Link',
        }]}
    />
);

test('Navbar', (t) => {
    t.is(wrapper.type(), 'nav', 'should be nav');
    t.true(wrapper.hasClass('navbar'), 'should have className navbar');
    t.true(wrapper.hasClass('navbar-inverse'), 'should have className navbar-inverse');
    t.true(wrapper.hasClass('navbar-fixed-top'), 'should have className navbar-fixed-top');
});

test('Navbar children', (t) => {
    const child = wrapper.childAt(0);

    t.truthy(child, 'should have child');
    t.is(child.type(), 'div', 'should be div');
    t.true(child.hasClass('container'), 'should have className container');
});

test('Navbar header', (t) => {
    const navbarHeader = wrapper.childAt(0).childAt(0);

    t.is(navbarHeader.type(), 'div', 'should be div');
    t.truthy(navbarHeader.hasClass('navbar-header'));
    t.is(navbarHeader.childAt(0).prop('to'), '/', 'to should be /');
    t.truthy(navbarHeader.childAt(0).hasClass('navbar-brand'), 'should have className navbar-brand');
    t.is(navbarHeader.childAt(0).childAt(0).text(), 'My Brand', 'should have text My Brand');
});

test('Navbar nav', (t) => {
    const navbarNav = wrapper.childAt(0).childAt(1);

    t.is(navbarNav.type(), 'ul', 'should be ul');
    t.truthy(navbarNav.hasClass('nav'));
    t.truthy(navbarNav.hasClass('navbar-nav'));
    t.is(navbarNav.childAt(0).prop('to'), '/link', 'to should be /link');
    t.is(navbarNav.childAt(0).childAt(0).text(), 'My Link', 'should have label My Link');
});
