export type ICompareFunction<T> = (a: T, b: T) => number

export enum compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0
}

export function defaultCompare<T>(a: T, b: T): number {
    if (a === b) {
        return compare.EQUALS;
    }
    return a < b ? compare.LESS_THAN : compare.BIGGER_THAN;
}