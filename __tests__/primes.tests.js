import { getPrimes } from './../src/primes.js';

describe('prime sifting', () => {

  test('return a list of prime numbers from a range', () => {

    expect(getPrimes(10)).toEqual([2,3,5,7]);
  });
});