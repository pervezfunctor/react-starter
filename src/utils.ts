import { produce } from 'immer'

type Mutable<T> = { -readonly [P in keyof T]: Mutable<T[P]> } // Remove readonly

export const mutative = <T>(
  obj: T,
  f: (this: Mutable<T>, draft: Mutable<T>) => T | void,
): T => produce(obj, f as any)
