
package main
import "strings"

const ONE_EMPTY_SPACE_CHAR byte = ' '
const ONE_EMPTY_SPACE_STR string = " "

func printVertically(s string) []string {
    input := strings.Split(s, ONE_EMPTY_SPACE_STR)
    var verticalFormat [][]byte = createMatrixForVerticalFormat(input)
    extractInputIntoVerticalFormat(input, verticalFormat)

    return createListForVerticalFormat(verticalFormat)
}

func createMatrixForVerticalFormat(input []string) [][]byte {
    rows := 0
    columns := len(input)
    for _, current := range input {
        rows = max(rows, len(current))
    }

    verticalFormat := make([][]byte, rows)
    for row := range rows {
        verticalFormat[row] = make([]byte, columns)
    }
    return verticalFormat
}

func extractInputIntoVerticalFormat(input []string, verticalFormat [][]byte) {
    for column := range len(verticalFormat[0]) {
        for row := range verticalFormat {
            if row < len(input[column]) {
                verticalFormat[row][column] = input[column][row]
                continue
            }
            verticalFormat[row][column] = ONE_EMPTY_SPACE_CHAR
        }
    }
}

func createListForVerticalFormat(verticalFormat [][]byte) []string {
    listVerticalFormat := make([]string, 0)

    for row := range verticalFormat {
        lastIndexOfNotEmptySpace := len(verticalFormat[row]) - 1
        for lastIndexOfNotEmptySpace >= 0 && verticalFormat[row][lastIndexOfNotEmptySpace] == ONE_EMPTY_SPACE_CHAR {
            lastIndexOfNotEmptySpace--
        }

        current := string(verticalFormat[row])[0 : lastIndexOfNotEmptySpace + 1]
        listVerticalFormat = append(listVerticalFormat, current)
    }

    return listVerticalFormat
}
