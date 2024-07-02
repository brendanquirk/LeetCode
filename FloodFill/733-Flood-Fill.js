/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

/*
Question:
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.
*/



const floodFill = (image, sr, sc, color) => {
    if (image[sr][sc] == color) return image
    fill(image, sr, sc, color, image[sr][sc])
    return image
}

const fill = (image, sr, sc, color, cell) => {
    //check boundries of the grid
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return


    if(cell != image[sr][sc]) return

    //update the cell to the color
    image[sr][sc] = color

    //recurse in every direction in the grid
    fill(image, sr + 1, sc, color, cell)
    fill(image, sr - 1, sc, color, cell)
    fill(image, sr, sc + 1, color, cell)
    fill(image, sr, sc - 1, color, cell)
}
