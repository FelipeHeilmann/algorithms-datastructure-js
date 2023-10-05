export const INF_CONST = Number.MAX_SAFE_INTEGER

export type ICompareFunction<T> = (a: T, b: T) => number;

export type IEqualsFunction<T> = (a: T, b: T) => boolean

export type IDiffFunction<T> = (a: T, b: T) => number

export const DOES_NOT_EXIST = -1

export enum Compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0
}

export function lesserEquals<T>(a: T, b: T, compareFn: ICompareFunction<T>) {
    const comp = compareFn(a, b)
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS
}

export function biggerEquals<T>(a: T, b: T, compareFn: ICompareFunction<T>) {
    const comp = compareFn(a, b)
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS
}

export function defaultCompare<T>(a: T, b: T): number {
    if (a === b) {
        return Compare.EQUALS
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

export function defaultEquals<T>(a: T, b: T): boolean {
    return a === b
}

export function defaultToString(item: any): string {
    if (item === null) {
        return 'NULL';
    } else if (item === undefined) {
        return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString()
}

export function swap(array: any[], a: number, b: number) {
    [array[a], array[b]] = [array[b], array[a]]
}

export function reverseCompare<T>(compareFn: ICompareFunction<T>): ICompareFunction<T> {
    return (a, b) => compareFn(b, a)
}

export function defaultDiff<T>(a: T, b: T): number {
    return Number(a) - Number(b)
}

export const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
}

export const initializeColors = (vertices: (string | number)[]) => {
    const color: { [key: string | number]: string | number } = {}
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE
    }

    return color
}

export function createNonSortedArray(size: number): number[] {
    const array = []
    for (let i = size; i >= 0; i--) {
        array.push(i)
    }

    return array
}

export function shuffle<T>(array: T[]): T[] {
    for (let i = 0; i < array.length; i++) {
        const randomIndex = Math.floor(Math.random() * array.length)
        swap(array, i, randomIndex)
    }

    return array
}

