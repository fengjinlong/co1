## 本来想写co，看来还是耍耍 jest吧
## 常用的匹配器
1. toBe使用 Object.is来进行精准匹配的测试。 如果您想要检查对象的值，请使用 toEqual 代替
    expect({}).toEqual({}) // ok
    expect({}).toBe({}) // error
2. toEqual 递归检查对象或数组的每个字段
```js
const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
```
3. 测试相反的匹配
```js
expect(1).not.toBe(0)
```
4. 真值
- toBeNull 只匹配 null
- toBeUndefined 只匹配 undefined
- toBeDefined 与 toBeUndefined 相反
- toBeTruthy 匹配任何 if 语句为真
- toBeFalsy 匹配任何 if 语句为假
- 对于比较浮点数相等，使用 toBeCloseTo 而不是 toEqual，因为你不希望测试取决于一个小小的舍入误差

5. 字符串
可以检查对具有 toMatch 正则表达式的字符串
```js
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```
6. 数组和可迭代对象
```js
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
```
6. 例外
若你想测试某函数在调用时是否抛出了错误，你需要使用 toThrow。
```js
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
```

https://jestjs.io/zh-Hans/docs/expect