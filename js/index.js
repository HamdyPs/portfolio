function missingNumber(nums) {
  const n = nums.length;

  if (n !== nums.length) {
    throw new Error("n is not equal to the length of the input array");
  }

  const numSet = new Set();

  for (const num of nums) {
    if (num < 0 || num > n) {
      throw new Error("Numbers in the array are out of range [0, n]");
    }

    if (numSet.has(num)) {
      throw new Error("Numbers in the array are not unique");
    }

    numSet.add(num);

  }

  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = nums.reduce((sum, num) => sum + num, 0);


  console.log(
    expectedSum - actualSum
  );
  return expectedSum - actualSum;
}

missingNumber([3, 0, 1])
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])
missingNumber([9, 5, 4, 2, 3, 8, 7, 0, 1])