// commented out the import of add and total as we are now using a mock function
// import { add, total } from './App';
import { total } from './App';
// to mock a fn you mock dependency
import { add } from './add.js'; 
jest.mock('./add.js', () => ({
    add: jest.fn(() => 28)
}))

// test("dummy", () => {
//     // these are assertions
//     expect(true).toBeTruthy()
// });

// unit test - one thing
// test("add", () => {
//     // these are assertions
//     expect(add(2, 3)).toBe(5)
// });

// integration test - tests things working together
test("total", () => {
    expect(total(3, 25)).toBe("£28")
    expect(add).toHaveBeenCalledTimes(1)

    // Redundant - below wont really be used in real world as it is simply retesting
    // if called with different args (like a remock)
    add.mockImplementation(() => 30)
    expect(total(5, 25)).toBe("£30")
    expect(add).toHaveBeenCalledTimes(2)
});

/**
 * Mock Functions
 * you can turn a db call into a mock function so you are not hitting db in your tests
 */
// const add = jest.fn(() => 5)

// test("add", () => {
//     expect(add(2, 3)).toBe(5)
//     // test how many times fn is called
//     expect(add).toHaveBeenCalledTimes(1);
//     // test what a fn is called with
//     expect(add).toHaveBeenCalledWith(2, 3);
// });
