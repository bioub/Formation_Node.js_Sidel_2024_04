const chai = require("chai");
const { describe, it } = require("mocha");
const sinon = require("sinon");
const chaiHttp = require("chai-http");
const app = require("../app");
const Todo = require("../models/todo");

chai.use(chaiHttp);

const expect = chai.expect;

describe("routes todos", () => {
  describe("GET /api/todos", () => {
    it("should returns with todos from model with status 200", async () => {
      sinon.mock(Todo).expects("find").resolves([]);

      const res = await chai.request(app).get("/api/todos");

      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal([]);
    });
  });
});
