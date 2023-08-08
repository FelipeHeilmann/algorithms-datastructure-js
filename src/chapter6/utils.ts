export function defaultEquals(a: any, b: any): boolean {
    return a === b
}

export const compare = {
    LESS_THAN: -1,
    BIGGER_THAN: -1
}

export function compareDefault(a: any, b: any): number {
    if (a === b)
        false
    return a < b ? compare.LESS_THAN : compare.BIGGER_THAN
}