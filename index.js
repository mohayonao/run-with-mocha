"use strict";

const MOCHA_GLOBAL_API = [ "context", "describe", "it", "before", "after", "beforeEach", "afterEach" ];
const noop = () => {};

function runWithMocha() {
  if (MOCHA_GLOBAL_API.every(key => typeof global[key] === "function")) {
    return;
  }
  MOCHA_GLOBAL_API.forEach((key) => {
    if (!global.hasOwnProperty(key)) {
      global[key] = noop;
    }
  });

  const cp = require("child_process");
  const bin = cp.execSync("npm bin", { encoding: "utf-8" }).trim();
  const proc = cp.exec(`${ bin }/mocha ${ process.argv[1] }`);

  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
}

runWithMocha();
