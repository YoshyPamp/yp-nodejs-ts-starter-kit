import assert from "assert";
import { expect } from "chai";

describe("Basic Mocha String Test", function () {
  it("should return number of charachters in a string", function () {
    assert.equal("Hello".length, 5);
  });
  it("should return first character of the string", function () {
    assert.equal("Hello".charAt(0), "H");
  });
  it("should be an object", () => {
      expect({cosa:""}).to.be.an("object")
  })
});
