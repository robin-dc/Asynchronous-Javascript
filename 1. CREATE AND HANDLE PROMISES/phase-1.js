function stretch() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      console.log("done stretching")
    },1000)
  })
}

function runOnTreadmill() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      console.log("done running on treadmill")
    },500)
  })
}

function liftWeights() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
      console.log("done lifting weights")
    },2000)
  })
}

function workout() {
  // Your code here
  stretch()
  .then(() => runOnTreadmill())
  .then(() => liftWeights())
  .then(() => console.log('done working out'))
  .catch(err => console.error(err))
}

// ### `workout`

// Write a function called `workout` that runs the above functions in a way
// that ensures you begin running on the treadmill after you've finished
// stretching. Begin lifting weights after running on the treadmill. Print
// `"done working out"` after you've finished lifting weights.

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
