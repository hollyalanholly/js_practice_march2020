const { sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
    test("it throws an error if not passed a string of a number", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");
    });

    test("it returns the total of each digit of a number added up, if the first number is a -ve it treats it as such", () => {
        expect(sumDigits("123")).toBe(6);
        expect(sumDigits("12345")).toBe(15);
        expect(sumDigits("1")).toBe(1);
        expect(sumDigits("-1234")).toBe(8);
    });

    test("it returns the total of each digit of a number added up, even if first number =0", () => {
        expect(sumDigits("0123")).toBe(6);

    });

    test("it returns the total of each digit of a number added up, even a number is passed in", () => {
        expect(sumDigits(123)).toBe(6);
//can't figure out how to make it work if a number is passed in starting with a 0! Tried converting to string but no avail.
    });
});



