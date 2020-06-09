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

    describe("createRange", () => {

        

        test("it throws an error if not passed a number for start and a number for an end", () => {
            expect(() => {
                createRange();
            }).toThrow("start and end required");
        });

        it("it returns an array which starts with START and increases by STEP and does not exceed END", () => {
            const result = createRange(2,10,2);
            const expected = [2,4,6,8,10];
            expect(result).toEqual(expected);
        });
    

        it("it returns an array which starts with START and increases by STEP and does not exceed END", () => {
            const result = createRange(0,21,7);
            const expected = [0,7,14,21];
            expect(result).toEqual(expected);
        });

        it("it returns an array which starts with START and increases by STEP and does not exceed END", () => {
            const result = createRange(0,20,3);
            const expected = [0,3,6,9,12,15,18];
            expect(result).toEqual(expected);
        });

        it("if no step specified it returns an array which starts with START and increases by STEP of 1 and does not exceed END", () => {
            const result = createRange(3,9,"");
            const expected = [3,4,5,6,7,8,9];
            expect(result).toEqual(expected);
        });
    });
});



