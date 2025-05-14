const stack = require('../src/stack');
//clearing the stack before tests
beforeEach(() => {
    while(stack.peek() !== undefined) {
        stack.pop();
    }
  });

  test('Stack should return items in a last in first out (LIFO) order', () => {
    stack.push("first");
    stack.push("second");
    stack.push("third");

    expect(stack.pop()).toBe("first");
    expect(stack.pop()).toBe("third");
    expect(stack.pop()).toBe("second");
    expect(stack.pop()).toBeUndefined();
  });