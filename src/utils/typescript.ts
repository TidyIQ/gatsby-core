/**
 * Extends 'Partial' to include nested objects
 *
 * See: https://stackoverflow.com/a/51365037
 */

/* eslint-disable-next-line */
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};
