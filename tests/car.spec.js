import moveCar from "../car";

const logSpy = jest.spyOn(console, "log").mockImplementation((str) => str.toLowerCase());

describe("Car drives through the road section", () => {
  afterEach(() => {
    logSpy.mockClear();
  });

  afterAll(() => {
    logSpy.mockRestore();
  });

  it("car goes to the step 10, if the road is not damaged", () => {
    moveCar([false, false, false, false, false, false, false, false, false, false]);
    expect(logSpy).toHaveBeenCalledTimes(10);
    expect(logSpy).toHaveLastReturnedWith("the car goes to step 10");
  });

  it("the car is damaged, but goes to step 10, if 1 road step is damaged", () => {
    moveCar([false, false, false, false, true, false, false, false, false, false]);
    expect(logSpy).toHaveNthReturnedWith(5, "the car is damaged");
    expect(logSpy).toHaveLastReturnedWith("the car goes to step 10");
  });

  it("the car goes forward till faces 2 damaged road steps, after that car gets broken", () => {
    moveCar([false, false, false, false, true, false, true, false, false, false]);
    expect(logSpy).toHaveBeenCalledTimes(7);
    expect(logSpy).toHaveNthReturnedWith(5, "the car is damaged");
    expect(logSpy).toHaveLastReturnedWith("the car is broken");
  });
});
