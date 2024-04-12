const { expect, use } = require("chai");
const { describe, it } = require("mocha");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { list } = require("./todo");
const Todo = require('../models/todo');

use(sinonChai);

describe("controllers/todos", () => {
  describe("list function", () => {
    it("should call res.json with todos from model", async () => {
      const req = {}; // as any;
      const res = {
        json: sinon.spy(),
      };
      const next = () => {};

      sinon.mock(Todo).expects('find').resolves([]);

      await list(req, res, next);
      expect(res.json).to.have.been.calledOnceWithExactly([]);

      sinon.verifyAndRestore();
    });
    it("should call next with an error when find rejects", async () => {
      const req = {}; // as any;
      const res = {};
      const next = sinon.spy();

      sinon.mock(Todo).expects('find').rejects('sample error');

      await list(req, res, next);
      expect(next).to.have.been.calledOnce;

      sinon.verifyAndRestore();
    });
  });
});
