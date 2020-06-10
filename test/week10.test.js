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

        test("it throws an error if not passed a number for start", () => {
            expect(() => {
                createRange(undefined, 10, 1);
            }).toThrow("start is required");
        });

        test("it throws an error if not passed a number for end", () => {
            expect(() => {
                createRange(2, undefined, 2);
            }).toThrow("end is required");
        });

        test("it throws an error if step is 0", () => {
            expect(() => {
                createRange(2, 10, 0);
            }).toThrow("step required >0");
        });


        test("it throws an error if step is <0", () => {
            expect(() => {
                createRange(2, 10, -2);
            }).toThrow("step required >0");
        });

        it("it returns an array which starts with START and increases by STEP and does not exceed END", () => {
            const result = createRange(2, 10, 2);
            const expected = [2, 4, 6, 8, 10];

            const result2 = createRange(-2, 10, 4);
            const expected2 = [-2, 2, 6, 10];
            expect(result).toEqual(expected);
            expect(result2).toEqual(expected2);

            const result3 = createRange(0, 21, 7);
            const expected3 = [0, 7, 14, 21];
            expect(result3).toEqual(expected3);

            const result4 = createRange(0, 20, 3);
            const expected4 = [0, 3, 6, 9, 12, 15, 18];
            expect(result4).toEqual(expected4);
        });

        it("if no step specified it returns an array which starts with START and increases by STEP of 1 and does not exceed END", () => {
            const result2 = createRange(3, 9, undefined);
            const expected2 = [3, 4, 5, 6, 7, 8, 9];
            expect(result2).toEqual(expected2);
        });
    });

    describe("findWinner", () => {

        test("it throws an error if not passed a board", () => {
            expect(() => {
                findWinner();
            }).toThrow("board is required");
        });

        it("it returns X if X has three in arow, 0 i 0 has three in a row or null if no winners", () => {
            const result = findWinner([
                ["X", "0", null],
                ["X", null, "0"],
                ["X", null, "0"]
            ]);
            const expected = "X";
            expect(result).toEqual(expected);

            const result2 = findWinner([
                ["0", "0", null],
                ["X", null, "0"],
                ["X", null, "0"]
            ]);
            const expected2 = null;
            expect(result2).toEqual(expected2);
        
            const result3 = findWinner([
                ["0", "0", "0"],
                ["X", "X", "0"],
                ["X", null, "X"]
            ]);
            const expected3 = "0";
            expect(result3).toEqual(expected3);
        
            const result4 = findWinner([
                 ["X", "0", "0"],
                ["0", "X", "0"],
                ["X", null, "X"]
            ]);
            const expected4 = "X";
            expect(result4).toEqual(expected4);

            const result5 = findWinner([
                ["0", "0", "X"],
               ["0", "X", "0"],
               ["X", null, "X"]
           ]);
           const expected5 = "X";
           expect(result5).toEqual(expected5);

           const result6 = findWinner([
            ["0", null, "X"],
           ["X", "0", "0"],
           ["X", null, "0"]
       ]);
       const expected6 = "0";
       expect(result6).toEqual(expected6);
        });   

        it("it returns X if X has three in arow, 0 i 0 has three in a row or null if no winners regardless of case", () => {
            const result = findWinner([
                ["x", "0", null],
                ["x", null, "0"],
                ["X", null, "0"]
            ]);
            const expected = "X";
            expect(result).toEqual(expected);
        });
    });

});



