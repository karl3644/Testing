import { add } from "./add.js"

test("add", () => {
    expect(add(1, 2)).toBe(3)
    expect(add(3, 4)).toBe(7)
});
