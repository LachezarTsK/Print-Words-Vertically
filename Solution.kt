
import kotlin.math.max

class Solution {

    private companion object {
        const val ONE_EMPTY_SPACE = ' '
    }

    fun printVertically(s: String): List<String> {
        val input = s.split(ONE_EMPTY_SPACE)
        val verticalFormat: Array<CharArray> = createMatrixForVerticalFormat(input)
        extractInputIntoVerticalFormat(input, verticalFormat)

        return createListForVerticalFormat(verticalFormat)
    }

    private fun createMatrixForVerticalFormat(input: List<String>): Array<CharArray> {
        var rows = 0
        val columns = input.size
        for (current in input) {
            rows = max(rows, current.length)
        }
        return Array<CharArray>(rows) { CharArray(columns) }
    }

    private fun extractInputIntoVerticalFormat(input: List<String>, verticalFormat: Array<CharArray>) {
        for (column in verticalFormat[0].indices) {
            for (row in verticalFormat.indices) {
                if (row < input[column].length) {
                    verticalFormat[row][column] = input[column][row]
                    continue
                }
                verticalFormat[row][column] = ONE_EMPTY_SPACE
            }
        }
    }

    private fun createListForVerticalFormat(verticalFormat: Array<CharArray>): MutableList<String> {
        val listVerticalFormat = mutableListOf<String>()

        for (row in verticalFormat.indices) {
            var lastIndexOfNotEmptySpace = verticalFormat[row].size - 1
            while (lastIndexOfNotEmptySpace >= 0 && verticalFormat[row][lastIndexOfNotEmptySpace] == ONE_EMPTY_SPACE) {
                --lastIndexOfNotEmptySpace
            }
            val current = String(verticalFormat[row]).substring(0, lastIndexOfNotEmptySpace + 1)
            listVerticalFormat.add(current)
        }

        return listVerticalFormat
    }
}
