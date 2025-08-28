function multi(...nums) {
  return nums.reduce((acc, curr) => acc * curr, 0)
}
function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0)
}
function min(...nums) {
  return nums.reduce((acc, curr) => acc - curr, 0)
}
function div(...nums) {
  return nums.reduce((acc, curr) => acc / curr, 1)
}

module.exports = {multi, sum, min, div}
