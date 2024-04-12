import { describe, it, expect } from "vitest";
import { racineCarre } from "./racine-carre.js";

describe('racineCarre function', () => {
  it('should throw an error when param is negative', () => {
    expect(() => racineCarre(-1)).to.throw();
  });
})
