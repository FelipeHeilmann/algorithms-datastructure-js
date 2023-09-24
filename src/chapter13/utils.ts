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



