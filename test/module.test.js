const { expect } = require("./helpers/chai");
const sinon = require("sinon");
const { functionUnderTest } = require("../module");

describe("module", function () {
  let sandbox;
  let mockHelper;
  const transaction = {};

  beforeEach(function () {
    sandbox = sinon.createSandbox();
    mockHelper = {
      transaction: sandbox.stub().callsArgWithAsync(0, transaction),
      doSomething: sandbox.stub().resolves({}),
      expectedToBeCalled: sandbox.stub().resolves({}),
    };
  });

  afterEach(function () {
    sandbox.restore();
  });

  it("the former function should be called", async function () {
    await functionUnderTest(mockHelper);
    expect(mockHelper.doSomething).to.be.called;
  });

  it("the latter function should be called", async function () {
    await functionUnderTest(mockHelper);
    expect(mockHelper.expectedToBeCalled).to.be.called;
  });
});
