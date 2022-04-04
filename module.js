const functionUnderTest = async (helper) => {
  helper.transaction(async (transaction) => {
    await helper.doSomething();
    await helper.expectedToBeCalled();
  });
};
module.exports = {
  functionUnderTest,
};
