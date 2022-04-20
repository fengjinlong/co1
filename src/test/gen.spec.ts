import { fun } from "..";
describe("test", () => {
  it("t", () => {
    console.log(fun);
    expect(fun()).toBe(1);
    expect(2 + 2).toBe(4);
    expect([1]).toEqual([1]);
    // expect({}).toBe({})
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
    // expect(data).toBe({one: 1, two: 2});

    expect(1).not.toBe(0);
  });
  test("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  // 数字
  test("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
    // expect(0.1+0.2).toEqual(0.3);
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });

  // 字符串
  test('there is no I in team', () => {
    // expect('team').not.toMatch(/t/);
    expect('team').toMatch(/t/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  // 数组
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
  test('shoppingList数组中包含milk', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

  // error
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }
  
  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  
    // 你可以自己定义确切的错误消息内容或者使用正则表达式
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
});
