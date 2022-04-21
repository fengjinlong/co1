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
  test("there is no I in team", () => {
    // expect('team').not.toMatch(/t/);
    expect("team").toMatch(/t/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
  });

  // 数组
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  test("shoppingList数组中包含milk", () => {
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });

  // error
  function compileAndroidCode() {
    throw new Error("you are using the wrong JDK");
  }

  test("compiling android goes as expected", () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // 你可以自己定义确切的错误消息内容或者使用正则表达式
    expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });

  test("map calls its argument with a non-null argument", () => {
    const mock = jest.fn();
    [1].map((x) => mock(x));
    expect(mock).toBeCalledWith(expect.anything());
    expect(0).toEqual(expect.anything());
  });
  describe("arrayContaining", () => {
    const expected = ["Alice", "Bob"];
    it("matches even if received contains additional elements", () => {
      expect(["Alice", "Bob", "Eve"]).toEqual(expect.arrayContaining(expected));
    });
    it("does not match if received does not contain expected elements", () => {
      expect(["Bob", "Eve"]).not.toEqual(expect.arrayContaining(expected));
    });
  });

  describe('Beware', () => {
    const expected = [1, 2, 3, 4, 5, 6];
    it('matches even with an unexpected number 7', () => {
      expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(
        expect.arrayContaining(expected),
      );
    });
    it('does not match without an expected number 2', () => {
      expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(
        expect.arrayContaining(expected),
      );
    });
  });
});
