import { transver } from "..";

describe("transverter", () => {
  it("二进制", () => {
    let num = transver(2, 2);
    expect(num).toEqual("10");
  });
  it("十进制", () => {
    let num = transver(2, 10);
    expect(num).toEqual("2");
  });
});
