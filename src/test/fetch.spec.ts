import { getData } from "../fetch";
describe("fetch", () => {
  test("测试 getData 的返回值为 { success: true }", () => {
    return getData().then((res) => {
      expect(res.data).toEqual({ success: true });
    });
  });

  test("测试 getData 的返回值包含 404", () => {
    return getData().catch((err) => {
      expect.assertions(1);
      expect(err.toString()).toMatch("404");
    });
  });
});
