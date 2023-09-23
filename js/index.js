function missingNumber(nums) {
  const n = nums.length;

  const numSet = [... new Set(nums)];
  numSet.sort((a, b) => a - b);

  if (numSet[0] !== 0) {
    console.log("Your array doesn't start with 0");
    return;
  }

  if (numSet.length !== nums.length) {
    console.log("this array has a duplicated nums");
    return;
  }
  
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = nums.reduce((sum, num) => sum + num, 0);


  console.log(
    expectedSum - actualSum
  );
  return expectedSum - actualSum;
}

missingNumber([3, 0, 1,])
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])
missingNumber([9, 5, 4, 2, 3, 8, 7, 0, 1])