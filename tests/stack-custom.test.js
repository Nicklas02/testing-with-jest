const stack = require('../src/stack');


  test('Stack should return items in a last in first out (LIFO) order', () => {
    stack.push("first");
    stack.push("second");
    stack.push("third");

    expect(stack.pop()).toBe("third");
    expect(stack.pop()).toBe("second");
    expect(stack.pop()).toBe("first");
    expect(stack.pop()).toBeUndefined();
  });