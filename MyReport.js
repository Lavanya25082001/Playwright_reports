class MyReporter {
    onBegin(config, suite) {
      console.log(`Starting the run with ${suite.allTests().length} tests`);
    }
  
    onTestBegin(test, result) {
      console.log(`Starting test ${test.title}`);
    }
  
    onTestEnd(test, result) {
        console.log(`Finished test ${test.title}: ${result.status}`);
        if (result.status === 'failed') {
          console.log(`Issues for test ${test.title}:`);
          result.errors.forEach(error => {
            console.log(`- ${error.message}`);
          });
        }
      }
  
    onEnd(result) {
      console.log(`Finished the run: ${result.status}`);
    }
  }
  
  module.exports = MyReporter;
  