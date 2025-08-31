
/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
    this.ONE_EMPTY_SPACE = ' ';
    const input = s.split(this.ONE_EMPTY_SPACE);
    const verticalFormat = createMatrixForVerticalFormat(input);
    extractInputIntoVerticalFormat(input, verticalFormat);

    return createListForVerticalFormat(verticalFormat);
};

/**
 * @param {string[]} input
 * @return {string[][]}
 */
function createMatrixForVerticalFormat(input) {
    let rows = 0;
    let columns = input.length;
    for (let current of input) {
        rows = Math.max(rows, current.length);
    }
    return Array.from(new Array(rows), () => new Array(columns));
}

/**
 * @param {string[]} input
 * @param {string[][]} verticalFormat 
 * @return {void}
 */
function extractInputIntoVerticalFormat(input, verticalFormat) {
    for (let column = 0; column < verticalFormat[0].length; ++column) {
        for (let row = 0; row < verticalFormat.length; ++row) {
            if (row < input[column].length) {
                verticalFormat[row][column] = input[column].charAt(row);
                continue;
            }
            verticalFormat[row][column] = this.ONE_EMPTY_SPACE;
        }
    }
}

/**
 * @param {string[][]} verticalFormat 
 * @return {string[]}
 */
function createListForVerticalFormat(verticalFormat) {
    const listVerticalFormat = new Array();

    for (let row = 0; row < verticalFormat.length; ++row) {
        let lastIndexOfNotEmptySpace = verticalFormat[row].length - 1;
        while (lastIndexOfNotEmptySpace >= 0 && verticalFormat[row][lastIndexOfNotEmptySpace] === this.ONE_EMPTY_SPACE) {
            --lastIndexOfNotEmptySpace;
        }
        const current = (verticalFormat[row].join('')).substring(0, lastIndexOfNotEmptySpace + 1);
        listVerticalFormat.push(current);
    }

    return listVerticalFormat;
}
