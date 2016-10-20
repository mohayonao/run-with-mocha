"use strict";

require("../")({ foo: "bar" });

const assert = require("assert");

describe("custom-env", () => {
  it("works", () => {
    assert(process.env.foo === "bar");
  });
});
