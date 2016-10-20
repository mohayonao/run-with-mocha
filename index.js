"use strict";

const path = require("path");

const MOCHA_GLOBAL_API = [ "context", "describe", "it", "before", "after", "beforeEach", "afterEach" ];

const ENV = {};

function findMocha() {
  try {
    const mochaPath = require.resolve("mocha");
    const pathItems = mochaPath.split(path.sep);

    pathItems.splice(-2, 2, ".bin", "mocha");

    return pathItems.join(path.sep);
  } catch (e) {
    return "mocha";
  }
}

function runWithMocha() {
  if (MOCHA_GLOBAL_API.every(key => typeof global[key] === "function")) {
    return;
  }
  MOCHA_GLOBAL_API.forEach((key) => {
    global[key] = () => {};
    global[key].skip = global[key].only = () => {};
  });

  process.nextTick(() => {
    const cp = require("child_process");
    const cmd = findMocha();
    const proc = cp.exec(`${ cmd } ${ process.argv[1] }`, {
      env: Object.assign({}, process.env, { NODE_ENV: "development" }, ENV)
    });

    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on("exit", (code) => {
      process.exit(code);
    });
  });
}

runWithMocha();

module.exports = (env) => {
  Object.assign(ENV, env);
};
