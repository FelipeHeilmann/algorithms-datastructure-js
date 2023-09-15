export type ICompareFunction<T> = (a: T, b: T) => number

export enum Compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0
}

export function defaultCompare<T>(a: T, b: T): number {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function swap(array: any[], a: number, b: number) {
    /* const temp = array[a];
    array[a] = array[b];
    array[b] = temp; */
    [array[a], array[b]] = [array[b], array[a]]
}

export function reverseCompare<T>(compareFn: ICompareFunction<T>): ICompareFunction<T> {
    return (a, b) => compareFn(b, a);
}

