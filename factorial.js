// src/factorial.ts

/**
 * Berechnet die Fakultät von n.
 * Überladungen für number und bigint:
 *   factorial(10)  → 3628800
 *   factorial(50n) → 30414093201713378043612608166064768844377641568960512000000000000n
 */
export function factorial(n: number): number;
export function factorial(n: bigint): bigint;
export function factorial(n: number | bigint) {
  if (typeof n === 'bigint') {
    // bigint-Zweig
    if (n < 0n) {
      throw new RangeError('n must be ≥ 0n');
    }
    let acc = 1n;
    for (let i = 2n; i <= n; i++) {
      acc *= i;
    }
    return acc;
  } else {
    // number-Zweig
    if (!Number.isInteger(n) || n < 0) {
      throw new RangeError('n must be a non-negative integer');
    }
    let acc = 1;
    for (let i = 2; i <= n; i++) {
      acc *= i;
    }
    return acc;
  }
}
