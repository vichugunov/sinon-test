const functionUnderTest = async (helper) => {
  helper.transaction(async (transaction) => {
    await helper.doSomething();
    await helper.expectedToBeCalled();
    console.log("done");
  });
};
module.exports = {
  functionUnderTest,
};
