
function printVertically(s: string): string[] {
    const input = s.split(Util.ONE_EMPTY_SPACE);
    const verticalFormat: string[][] = createMatrixForVerticalFormat(input);
    extractInputIntoVerticalFormat(input, verticalFormat);

    return createListForVerticalFormat(verticalFormat);
};

function createMatrixForVerticalFormat(input: string[]): string[][] {
    let rows = 0;
    let columns = input.length;
    for (let current of input) {
        rows = Math.max(rows, current.length);
    }
    return Array.from(new Array(rows), () => new Array(columns));
}

function extractInputIntoVerticalFormat(input: string[], verticalFormat: string[][]): void {
    for (let column = 0; column < verticalFormat[0].length; ++column) {
        for (let row = 0; row < verticalFormat.length; ++row) {
            if (row < input[column].length) {
                verticalFormat[row][column] = input[column].charAt(row);
                continue;
            }
            verticalFormat[row][column] = Util.ONE_EMPTY_SPACE;
        }
    }
}

function createListForVerticalFormat(verticalFormat: string[][]): string[] {
    const listVerticalFormat: string[] = new Array();

    for (let row = 0; row < verticalFormat.length; ++row) {
        let lastIndexOfNotEmptySpace = verticalFormat[row].length - 1;
        while (lastIndexOfNotEmptySpace >= 0 && verticalFormat[row][lastIndexOfNotEmptySpace] === Util.ONE_EMPTY_SPACE) {
            --lastIndexOfNotEmptySpace;
        }
        const current = (verticalFormat[row].join('')).substring(0, lastIndexOfNotEmptySpace + 1);
        listVerticalFormat.push(current);
    }

    return listVerticalFormat;
}

class Util {
    static ONE_EMPTY_SPACE = ' ';
}
