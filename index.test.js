const {score, bestScore} = require('./index.js')

describe("Bowling game", () => {
    describe("Calculate score", () => {
        it("returns score as 90 if the rolls are 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6", () => {
            expect(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90);
        })
        it("returns score as 30 if the rolls are 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10", () => {
            expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toEqual(30);
        })
        it("returns score as 16 9f the rolls are 6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0", () => {
            expect(score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(16)
        })
        it("throws an error if frames are incomplete", () => {
            expect(() => score([3, 6, 3])).toThrow(Error)
        })
        it("throws an error if less than 10 frames are given", () => {
            expect(() => score([10, 5, 5, 9, 0])).toThrow(Error)
        })
        it("throws an error if more than 10 frames are given", () => {
            expect(() => score([[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3]])).toThrow(Error)
        })
    })
    describe("Best Score", () => {
        it("returns best score for a set of games", () => {
            expect(bestScore([[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]])).toEqual(90)
        })
    })
})