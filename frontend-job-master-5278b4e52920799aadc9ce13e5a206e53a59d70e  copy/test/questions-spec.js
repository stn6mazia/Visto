import test from 'ava';

import {
    one,
    two,
    three,
} from '../questions';

test('Question one', (t) => {
    const five = one();

    t.is(five, 5);
});

test('Question two', (t) => {
    two();

    t.truthy(String.prototype.repeatify, 'Should define repeatify');
    t.is('a'.repeatify(1), 'a');
    t.is('b'.repeatify(2), 'bb');
    t.is('c'.repeatify(3), 'ccc');
});

test('Question three', (t) => {
    const oneTwoThree = three(['1', '2', '3']);

    t.deepEqual(oneTwoThree, [1, 2, 3]);
});
