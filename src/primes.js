// export function getPrimes(numbers, prime = 2) {
//     if(prime === numbers[numbers.length - 1]) {
//     return numbers;
//   } else {
//     const nums = numbers.filter(e => ((e % prime) !== 0) || e === prime);
//     return getPrimes(nums, prime + 1);
//   }
// }

export function getPrimes(number, nums = [], prime = 2) {
  if(number <= 2 || Number.isNaN(number)) {
    return;
  }
  if (prime === nums[nums.length - 1]) {
    return nums;
  } else {
    if (prime === 2) {
      // for (let i = 2; i <= number; i++) {
      //   nums.push(i);
      // }
      nums = [...Array(number).keys()].map(e => e + 1);
    }
    nums = nums.filter(e => ((e % prime) !== 0) && e > 1 || e === prime);
    return getPrimes(number, nums, prime + 1);
  }
}



// export function getPrimes2(number) {
//   // MAKE ARRAY
//   const numbers = [...Array(number+1).keys()];

//   const calculate = (numbers, prime = 2) => {
//     if(prime === numbers[numbers.length - 1]) {
//       return numbers;
//     } else {
//       const nums = numbers.filter(e => ((e % prime) !== 0) || e === prime);
//       return calculate(nums, prime + 1);
//     }
//   }
// }



/*
function getPrimes(numbers, max, prime) {
  if(prime === max) {
    return numbers;
  } else {
    const nums = numbers.filter(e => ((e % prime) !== 0) && e !== prime);
    return getPrimes(nums, max, prime + 1);
  }
}
*/