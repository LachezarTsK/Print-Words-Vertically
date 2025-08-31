
import java.util.ArrayList;
import java.util.List;

public class Solution {

    private static final char ONE_EMPTY_SPACE_CHAR = ' ';
    private static final String ONE_EMPTY_SPACE_STR = " ";

    public List<String> printVertically(String s) {
        String[] input = s.split(ONE_EMPTY_SPACE_STR);
        char[][] verticalFormat = createMatrixForVerticalFormat(input);
        extractInputIntoVerticalFormat(input, verticalFormat);

        return createListForVerticalFormat(verticalFormat);
    }

    private char[][] createMatrixForVerticalFormat(String[] input) {
        int rows = 0;
        int columns = input.length;
        for (String current : input) {
            rows = Math.max(rows, current.length());
        }
        return new char[rows][columns];
    }

    private void extractInputIntoVerticalFormat(String[] input, char[][] verticalFormat) {
        for (int column = 0; column < verticalFormat[0].length; ++column) {
            for (int row = 0; row < verticalFormat.length; ++row) {
                if (row < input[column].length()) {
                    verticalFormat[row][column] = input[column].charAt(row);
                    continue;
                }
                verticalFormat[row][column] = ONE_EMPTY_SPACE_CHAR;
            }
        }
    }

    private List<String> createListForVerticalFormat(char[][] verticalFormat) {
        List<String> listVerticalFormat = new ArrayList<>();

        for (int row = 0; row < verticalFormat.length; ++row) {
            int lastIndexOfNotEmptySpace = verticalFormat[row].length - 1;
            while (lastIndexOfNotEmptySpace >= 0 && verticalFormat[row][lastIndexOfNotEmptySpace] == ONE_EMPTY_SPACE_CHAR) {
                --lastIndexOfNotEmptySpace;
            }
            String current = String.valueOf(verticalFormat[row]).substring(0, lastIndexOfNotEmptySpace + 1);
            listVerticalFormat.add(current);
        }

        return listVerticalFormat;
    }
}
