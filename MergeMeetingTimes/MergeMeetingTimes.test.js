const mergeRanges = require("./index");

describe("Merge Ranges", () => {
  test("meetings overlap", () => {
    let expected = [{ startTime: 1, endTime: 4 }];

    expect(
      mergeRanges([
        { startTime: 1, endTime: 3 },
        { startTime: 2, endTime: 4 },
      ])
    ).toEqual(expected);
  });

  test("meetings touch", () => {
    let expected = [{ startTime: 5, endTime: 8 }];
    expect(
      mergeRanges([
        { startTime: 5, endTime: 6 },
        { startTime: 6, endTime: 8 },
      ])
    ).toEqual(expected);
  });

  test("meetings contains other meetings", () => {
    let expected = [{ startTime: 1, endTime: 8 }];

    expect(
      mergeRanges([
        { startTime: 1, endTime: 8 },
        { startTime: 2, endTime: 5 },
      ])
    ).toEqual(expected);
  });

  test("meetings stay separate", () => {
    let expected = [
      { startTime: 1, endTime: 3 },
      { startTime: 4, endTime: 8 },
    ];

    expect(
      mergeRanges([
        { startTime: 1, endTime: 3 },
        { startTime: 4, endTime: 8 },
      ])
    ).toEqual(expected);
  });

  test("multiple merged meetings", () => {
    let expected = [{ startTime: 1, endTime: 8 }];

    expect(
      mergeRanges([
        { startTime: 1, endTime: 4 },
        { startTime: 2, endTime: 5 },
        { startTime: 5, endTime: 8 },
      ])
    ).toEqual(expected);
  });

  test("meetings not sorted", () => {
    let expected = [
      { startTime: 1, endTime: 4 },
      { startTime: 5, endTime: 8 },
    ];
    expect(
      mergeRanges([
        { startTime: 5, endTime: 8 },
        { startTime: 1, endTime: 4 },
        { startTime: 6, endTime: 8 },
      ])
    ).toEqual(expected);
  });

  test("oneLongMeetingContainsSmallerMeetings", () => {
    let expected = [{ startTime: 1, endTime: 12 }];

    expect(
      mergeRanges([
        { startTime: 1, endTime: 10 },
        { startTime: 2, endTime: 5 },
        { startTime: 6, endTime: 8 },
        { startTime: 9, endTime: 10 },
        { startTime: 10, endTime: 12 },
      ])
    ).toEqual(expected);
  });

  test("sample input", () => {
    let expected = [
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 8 },
      { startTime: 9, endTime: 12 },
    ];

    expect(
      mergeRanges([
        { startTime: 0, endTime: 1 },
        { startTime: 3, endTime: 5 },
        { startTime: 4, endTime: 8 },
        { startTime: 10, endTime: 12 },
        { startTime: 9, endTime: 10 },
      ])
    ).toEqual(expected);
  });
});
