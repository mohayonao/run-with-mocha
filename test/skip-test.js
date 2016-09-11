"use strict";

require("../");

const assert = require("assert");

describe.skip("test", () => {
  it("success", () => {
    assert(1 === 1);
  });
});

describe.only("test", () => {
  it("success", () => {
    assert(1 === 1);
  });
});
