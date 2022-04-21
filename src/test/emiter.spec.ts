import { events } from "../eventEmitter";

describe("eventEmiter", () => {
  it("on", () => {
    events.on("f1", (a) => {});
    events.on("f1", (a) => {});
    expect(events.__events["f1"].length).toBe(2);
  });
  it("emit", () => {
    let val = 1;
    let fun = jest.fn((a) => {
      val = a;
    });
    let fun2 = jest.fn((a) => {});
    events.on("a", fun);
    events.on("a", fun2);
    events.emit("a", 666);

    expect(fun).toHaveBeenCalledTimes(1);
    expect(val).toBe(666);
  });

  it("length", () => {
    expect(events.__events["f1"].length).toBe(2);
  });

  it("off1", () => {
    let fun1 = jest.fn();
    events.on("f2", fun1);
    expect(events.__events["f2"].length).toBe(1);
    events.off("f2", fun1);
    expect(events.__events["f2"].length).toBe(0);
    events.off("f2", fun1);
    expect(events.__events["f2"].length).toBe(0);
  });
  it("off2", () => {
    let fun1 = jest.fn();
    let fun2 = jest.fn();
    events.on("f3", fun1);
    events.on("f3", fun2);
    expect(events.__events["f3"].length).toBe(2);
    events.off("f3", fun1);
    expect(events.__events["f3"].length).toBe(1);
    events.off("f3", fun1);
    expect(events.__events["f3"].length).toBe(1);
  });

  it("once", () => {
    let fun = jest.fn();
    events.once("f4", fun);
    events.emit("f4", 1);
    expect(fun).toHaveBeenCalledTimes(1);
    expect(events.__events["f4"].length).toBe(0);
  });
  it("Repeat to add", () => {
    let fun5 = jest.fn();
    events.on("f5", fun5);
    expect(events.__events["f5"].length).toBe(1);
    events.on("f5", fun5);
    events.on("f5", fun5);
    events.on("f5", fun5);
    expect(events.__events["f5"].length).toBe(1);
  });

  it("allOff", () => {
    let fun6 = jest.fn();
    let fun7 = jest.fn();
    events.on("f6", fun6);
    events.on("f6", fun7);
    events.allOff("f6");
    expect(events.__events["f6"].length).toBe(0);
  });
});
