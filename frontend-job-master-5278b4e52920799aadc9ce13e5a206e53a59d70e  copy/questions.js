/* eslint-disable no-extend-native */

/**
 * should return 5.
 */
export const one = () => {
    (() => {
        const a = b = 5;
    })();

    return b;
};

/**
 * create a function called "repeatify" in "String.prototype" that repeat itself.
 * aka: "String.repeat".
 */
export const two = () => {};

/**
 * should transform array of strings in array of numbers using "Array.map" and "Number.parseInt".
 */
export const three = (stringNumbers) => stringNumbers;
