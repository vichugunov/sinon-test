const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const chaiSinon = require("sinon-chai");

chai.use(chaiSinon);
chai.use(chaiAsPromised);

module.exports = { expect: chai.expect };
