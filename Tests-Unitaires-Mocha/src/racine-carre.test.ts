import { expect } from "chai";
import { describe, it } from "mocha";
import { racineCarre } from "./racine-carre.js";

describe('racineCarre function', () => {
  it('should throw an error when param is negative', () => {
    expect(() => racineCarre(-1)).to.throw();
  });
  it('should not throw an error', () => {
    racineCarre(4)
  });
})
