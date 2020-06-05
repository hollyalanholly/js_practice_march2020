const { isValidDNA,
    getComplementaryDNA,
    sumMultiples,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/week9");

describe("isValidDNA", () => {
    test("it throws an error if no string is passed", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("string is required");
    });
    test("it returns true if string contains DNA letters C,G,T or A else it returns false", () => {
        expect(isValidDNA("CGTA")).toBe(true);
        expect(isValidDNA("CGTACGTA")).toBe(true);
        expect(isValidDNA("CGTACBB")).toBe(false);
    });
    test("it returns true if string contains DNA letters C,G,T or A else it returns false even if the string is lower case", () => {
        expect(isValidDNA("CGtACgTA")).toBe(true);
        expect(isValidDNA("CGTAcbbb")).toBe(false);
    });

});

describe("getComplementaryDNA", () => {
    test("it throws an error if no string is passed", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("string is required");
    });

    test("it returns a complementary string if the string contains DNA letters C,G,T or A.  So a string of ACTG would have a complementary DNA string of TGAC else it returns false even if the string is lower case", () => {
        expect(getComplementaryDNA("CGtACgTA")).toBe("GCATGCAT");
        expect(getComplementaryDNA("CGTAcbbb")).toBe(false);
    });

});

//done
describe("sumMultiples", () => {
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("holly alan ruby jessa");
        }).toThrow("Array is required");
    });

    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });

    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5, 0, 15, 25, 9]);
        const expected = 57;
        expect(result).toBe(expected);
    });

    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 15.5]);
        const expected = 3;
        expect(result).toBe(expected);
    });

    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 2, 731]);
        const expected = 0;
        expect(result).toBe(expected);
    });

    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([]);
        const expected = 0;
        expect(result).toBe(expected);
    });

});

describe("isItPrime", () => {
    test("it throws an error if not passed a number", () => {
        expect(() => {
            isItPrime();
        }).toThrow("n is required");
    });

    test("returns true if number is prime, else returns false", () => {
        expect(isItPrime(9)).toBe(false);
        expect(isItPrime(121)).toBe(false);
        expect(isItPrime(0)).toBe(false);
        expect(isItPrime(997)).toBe(true);
    });
});

describe("createMatrix", () => {
    it("returns matrix of 1 x 1 when passed 1", () => {
        const result = createMatrix(1, "foo");
        const expected = [["foo"]]; //<=complex values
        expect(result).toEqual(expected);
    });

    it("returns matrix of 4 x 4 when passed 4", () => {
        const result = createMatrix(4, "Jeffery the Cat");
        const expected = [
            ["Jeffery the Cat",
                "Jeffery the Cat",
                "Jeffery the Cat",
                "Jeffery the Cat"],
            ["Jeffery the Cat",
                "Jeffery the Cat",
                "Jeffery the Cat",
                "Jeffery the Cat"],
            ["Jeffery the Cat",
                "Jeffery the Cat",
                "Jeffery the Cat",
                "Jeffery the Cat"],
            ["Jeffery the Cat",
                "Jeffery the Cat",
                "Jeffery the Cat",
                "Jeffery the Cat"],
        ]
            ; //<=complex values
        expect(result).toEqual(expected);
    });

    it("returns matrix of 4 x 4 when passed 4 even if it is a number", () => {
        const result = createMatrix(4, 12);
        const expected = [
            [12,
                12,
                12,
                12],
            [12,
                12,
                12,
                12],
            [12,
                12,
                12,
                12],
            [12,
                12,
                12,
                12],

        ]
            ; //<=complex values
        expect(result).toEqual(expected);
    });
});

describe("areWeCovered", () => {
    test("it returns false if no staff available at all", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);
    });
    test("it returns false if there are staff but less than 3 are scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "Tuesday"] },
            { name: "sally", rota: ["Wednesday", "Thursday"] },
            { name: "jess", rota: ["Wednesday", "Thursday"] }
        ];
        expect(areWeCovered(staff, "Monday")).toBe(false);
    });
    test("it returns true if there are 3 or more staff scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "Tuesday"] },
            { name: "sally", rota: ["Monday", "Thursday"] },
            { name: "jess", rota: ["Wednesday", "Thursday"] }
        ];
        expect(areWeCovered(staff, "Monday")).toBe(true);
    });

    test("it returns true if there are 3 or more staff scheduled to work and it ignores case", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "TuEsday"] },
            { name: "sally", rota: ["Tuesday", "Thursday"] },
            { name: "jess", rota: ["WedNesday", "Thursday"] }
        ];
        expect(areWeCovered(staff, "tuesday")).toBe(true);
    });
});