import { describe, it, expect } from "vitest";
import { sum } from "./my-maths.js";

describe("my-maths.ts", () => {
  describe("sum function", () => {
    it("should add 2 positives numbers", () => {
      expect(sum(1, 2)).to.equal(3);
      expect(sum(2, 3)).to.equal(5);
    });
    it("should add 2 negative numbers", () => {
      expect(sum(-1, -2)).to.equal(-3);
      expect(sum(-5, -2)).to.equal(-7);
    });
  });
});
